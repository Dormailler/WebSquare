scwin.menu = (function() {
    let _var_jsnAllMenu;
    let _var_arrAllMenu;

    const _init = async function() {
        var prmMenuResult;

        try {
            prmMenuResult = await _getMenuData();
            _createMenuData(prmMenuResult);
        } catch(ex) {
            console.error(ex);
        }
    };

    const _getMenuData = async function() {
        var _promise;

        _promise = new Promise((resolve, reject) => {
            $p.ajax({
                action : $c.frame.getSrc("/frame/data/menu.json")+"?postfix="+$c.frame.getRandomString(),
                method : "get",
                success : function(argRes) { resolve(JSON.parse(argRes.responseText)); },
                error : function(argRes) { reject(argRes); }
            });
        });
        return _promise;
    };
    
    const _createMenuData = function(argArrMenuData) {
        let jsnAllMenu = {};
        let arrAllMenu = [];
        let i, i_max, i_item;
        let arrDCInfo = [];
        let strDataListID = "dlt_menu";
        let jsnCtgKeyword = {};
        let jsnCtgMap = {};
        let strHiddenStatus;
        let numHiddenLevel;
        let arrFileMenu = [];

        _var_jsnAllMenu = [];
        try {$p.data.remove(strDataListID);} catch(ex) {}
        
        let api_regExp_1 = new RegExp("WebSquare\\.uiplugin\\.","g");
        let api_regExp_2 = new RegExp("[a-zA-Z]\\|","g");
        let api_regExp_3 = new RegExp(",","g");

        for (i=0,i_max = argArrMenuData.length; i<i_max; i++) {
            let menuID;
            let strKeyword;
            let strParentID;
            let strHiddenYN;
            let numDepth;

            i_item = argArrMenuData[i];
            menuID = i_item.ID;

            if (!menuID) { throw "메뉴 데이터의 ID가 누락되었습니다. data : " + JSON.stringify(i_item); }

            strKeyword = i_item.KEYWORD || "";
            strParentID = i_item.PARENT_ID;
            strHiddenYN = i_item.HIDDEN || "N";
            numDepth = +i_item.DEPTH || 0;

            // 메뉴명
            i_item["TITLE"] = i_item["TITLE_KO"];  // @todo 영문 인 경우 처리

            if (strHiddenYN === "Y") {
                $c.frame.log("[createMenuData] 메뉴가 hidden 처리 되었습니다. 메뉴명:" + i_item["TITLE"]);

                if (i_item["TYPE"] === "C") {
                    strHiddenStatus = "Y";
                    numHiddenLevel = +i_item["DEPTH"];
                } else {
                    strHiddenStatus = "N";
                    numHiddenLevel = -1;
                }
                continue;
            }

            if (strHiddenStatus == "Y" && numDepth > numHiddenLevel) {
                $c.frame.log("[createMenuData] 상위 메뉴가 hidden 처리 되었습니다. 메뉴명:" + i_item["TITLE"]);
                continue;
            } else {
                strHiddenStatus = "N";
                numHiddenLevel = -1;
            }
            
            // API
            let strAPI = (i_item["API"] || "").trim();
            i_item["API"] = strAPI;
            
            let strDispAPI = strAPI.replace(api_regExp_1,"").replace(api_regExp_2,"").replace(api_regExp_3,"|");
            i_item["DISP_API"] = strDispAPI;
            
            // 키워드
            if (strParentID && jsnCtgKeyword[strParentID]) {
                strKeyword = jsnCtgKeyword[strParentID] + (strKeyword ? "|" : "") + strKeyword;
            }
            
            // API도 키워드에 포함
            let strKeywordAPI = strAPI.split(",").map(item=>{ return item.replace(/.*\./,""); }).join("|");
            
            // API와 중복되는 키워드 제거
            if (strKeywordAPI) {
            	let strResult = "";
            	let strLowerKeywordAPI = strKeywordAPI.toLowerCase();
            	let arrStrKeyword = strKeyword.split("|");
            	for (let i=0, i_max = arrStrKeyword.length; i<i_max; i++) {
            		let item = arrStrKeyword[i];
            		
            		if (strLowerKeywordAPI.indexOf(item.toLowerCase()) < 0) {
            			strResult += (strResult ? "|" : "") + item;
            		}
            	};
            	
            	strKeyword = strResult + (strResult ? "|" : "") + strKeywordAPI;
            }

            if (strKeyword) {
                strKeyword = [... new Set(strKeyword.split("|"))].sort().join("|");
            }

            i_item["ALL_KEYWORD"] = strKeyword;

            if (i_item["TYPE"] === "C") {
                // 메뉴 경로 표현을 위한 작업.
                jsnCtgMap[menuID] = i_item["TITLE"];
                
                if (strParentID) {
                    jsnCtgMap[menuID] = (jsnCtgMap[strParentID] ? jsnCtgMap[strParentID]+"%||%" : "") + jsnCtgMap[menuID];
                }

                if (strKeyword) {
                    jsnCtgKeyword[menuID] = strKeyword;
                }
            }

            if (strParentID) {
            	let tmpParentTitle = jsnCtgMap[strParentID];
                i_item["MENU_BREADCRUMBS"] = jsnCtgMap[strParentID];
                i_item["DISP_MENU_TITLE"] = i_item["TITLE"].replace(new RegExp("\\["+tmpParentTitle.split("%||%").join("\\]\\[")+"\\] {0,1}","i"),"");
            }

            if (jsnAllMenu[menuID]) { 
                console.error("_createMenuData", "메뉴ID가 중복 되었습니다. >>>>>>>> ", "menuID : ", menuID, " | ", i_item.TITLE, " :::::::::::::::::::::::: ", JSON.stringify(jsnAllMenu[menuID]));
            }

            jsnAllMenu[menuID] = i_item;
            
            if (menuID.indexOf("M01") != 0 && i_item.TYPE === "F") {
                arrFileMenu.push(i_item);
            } else {
                // 파일명으로 정렬
                arrFileMenu.sort((a, b) => {
                    let strLowerA = a.TITLE.toLowerCase();
                    let strLowerB = b.TITLE.toLowerCase();
                    let returnValue = 0;

                    if (strLowerA < strLowerB) {
                        returnValue = -1;
                    } else if (strLowerA > strLowerB) {
                        returnValue = 1;
                    } else {
                        returnValue = 0;
                    }

                    return returnValue;
                });

                arrAllMenu = arrAllMenu.concat(arrFileMenu);
                arrFileMenu = [];
                
                arrAllMenu.push(i_item);
            }
        }// for
        
        arrAllMenu = arrAllMenu.concat(arrFileMenu);
        arrFileMenu = [];

        Object.keys(arrAllMenu[0]).forEach((item) => {
            arrDCInfo.push({
                "id" : item,
                "name" : item,
                "dataType" : "text"
            });
        });

        $p.data.create({
            "id" : strDataListID,
            "type" : "dataList",
            "option" : { 
                "baseNode": "list",
                "repeatNode": "map"
            },
            "columnInfo" : arrDCInfo
        });

        $p.data.set("JSON", { [strDataListID] : arrAllMenu}, [strDataListID])

        _var_jsnAllMenu = jsnAllMenu;
        _var_arrAllMenu = arrAllMenu;
    };

    const _getMenuByID = function(argMenuID) {
        var jsnMenuData;

        jsnMenuData = _var_jsnAllMenu[argMenuID];
        if (!jsnMenuData) {
            throw "메뉴가 존재하지 않습니다. MENU ID : " + argMenuID
        }
        return JSON.parse(JSON.stringify(jsnMenuData));
    };

    const _getMenuByPage = function(argMenuPage) {
        var returnValue;

        _var_arrAllMenu.some((item, index) => {
            let strPath = (item.PATH || "").trim();

            if (!strPath) {return false;}
            
            if (strPath.endsWith(argMenuPage) || strPath.endsWith(argMenuPage+".xml")) {
                returnValue = item;
                return true;
            }
        });

        return returnValue;
    };

    const _getAllMenuDataString = function () {
        return JSON.stringify(_var_arrAllMenu);
    };


    return {
        init : _init,
        getMenuByID : _getMenuByID,
        getMenuByPage : _getMenuByPage,
        getAllMenuDataString : _getAllMenuDataString
    };
})();

/**
 * 예제에서 다른 예제 호출할 때 사용
 */
scwin.openPage = function (argPageNo) {
    var jsnMenu;
    if (!argPageNo) { return; }

    jsnMenu = scwin.menu.getMenuByPage(argPageNo);

    if (jsnMenu && jsnMenu.ID) {
        scwin.dispPage(jsnMenu, true);        
    }
};