/*amd /cm/template/design_system/design_system_template.xml 22111 8d37676674a48cc18ffb5ef7cc60f179fd4d28bd1dbb71fb2481d594b007a9ac */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/cm/template/design_system/design_system.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'resource',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'id',name:'id',dataType:'text'}},{T:1,N:'w2:column',A:{id:'category',name:'category',dataType:'text'}},{T:1,N:'w2:column',A:{id:'title',name:'타이틀',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iconSrc',name:'아이콘자원',dataType:'text'}},{T:1,N:'w2:column',A:{id:'previewSrc',name:'미리보기자원',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xmlpath',name:'xml자원',dataType:'text'}},{T:1,N:'w2:column',A:{id:'favMenu',name:'즐겨찾기',dataType:'text'}}]},{T:1,N:'w2:data',E:[{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'category',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'id',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iconSrc',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'path',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',src:'/cm/template/design_system/studioAPI.js'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.initUserDataTop = true;    
scwin.categoryTitleGrpMargin = 30;	
scwin.onpageload = function () {
    // requestJson data 생성
    var requestJson = {
        "type": "REQUEST",
        "payload": {
            "type": "READ_TEMPLETE_FILE_LIST",
            // 전체 리스트를 조회하는 경우는 wds로 날려야함.
            "req": {
                "id": "wds"
            }
        }
    }
    studioAPI.exec(scwin.jsonDataCallBack, {}, requestJson);
    

    // LEFT메뉴 리사이징
    $(window).resize(function () {
        var win_w = $(this).width();

        if (win_w < 400) {
            $(".designSystem_layout").removeClass("hide_menu");
            $(".designSystem_layout").addClass("hide_menu");
        }
    });

    $(window).scroll( function() {
        setUserDataTop();
    });    
    
};

fnScrollTo = function(id) {
    var filterFav = { type: 'row', colIndex: 'favMenu', key: "1", condition: 'and' };
    resource.clearFilter();
    resource.setColumnFilter(filterFav);
    var favMenuJson = resource.getAllFilteredJSON();

    if (id == scwin.favCategoryMenu) {//즐겨찾기 메뉴일 경우 즐겨찾기 항목이 없을 경우 아무것도 하지 않기.

        if (favMenuJson.length == 0) return;
        window.scrollTo(0,0);
    } else {
        var top = $p.getComponentById(id).getUserData("top");
        //즐겨찾기가 있으면 +30 해준다.
        if (favMenuJson.length != 0) top = top + scwin.categoryTitleGrpMargin;
        window.scrollTo(0,top-15);
    }
}

scwin.onpageunload = function () {
};

scwin.jsonDataCallBack = function (jsonData) {
    var jsonResource = jsonData && jsonData.res ? jsonData.res.resource : [];
    //var jsonCategory = jsonData && jsonData.res ? jsonData.res.category : [];
    var jsonCategory = [
        {
            "id": "Template",
            "iconSrc": "",
            "path": "/cm/template/",
            "rowStatus": "R"
        }
    ]
    var blankResource = [
        {
            "id": "00_new_component",
            "category": "00_new_component",
            "title": "빈 페이지",
            "iconSrc": "/cm/images/base/icon.png",
            "previewSrc": "/cm/images/base/icon.png",
            "xmlpath": "",
            "favMenu": "",
            "rowStatus": "R"
        }
    ]
    resource.setJSON(blankResource);
    resource.setJSON(jsonResource, true);
    category.setJSON(jsonCategory);
    //category 
    for (var i = 0; i < jsonCategory.length; i++) {
        //console.log("start[" + i + "]" + jsonCategory[i].id);
        var genCatogoryIdx = categoryGen.insertChild();

        var strCategory = jsonCategory[i].id;
        var strCategoryMenuIcon = jsonCategory[i].iconSrc;
        var objCategoryTitle = categoryGen.getChild(genCatogoryIdx, "categoryTitle");
        objCategoryTitle.setValue(strCategory);//category anchor title setting
        var tagCategoryId = objCategoryTitle.getID();//좌측메뉴 클릭시 찾아갈 객체 id 얻어오기
        var objResourceListGen = categoryGen.getChild(genCatogoryIdx, "resourceListGen");

        //category menu setting
        var genCatogoryMenuIdx = categoryMenuGen.insertChild();
        var objCategoryMenu = categoryMenuGen.getChild(genCatogoryMenuIdx, "categoryMenu");
        objCategoryMenu.setValue(strCategory);
        //objCategoryMenu.setHref("#" + tagCategoryId);
        objCategoryMenu.setHref("javascript:setUserDataTop();fnScrollTo('" + tagCategoryId+"')");

        //console.log(tagCategoryId);
        atc_search.addItem(strCategory, genCatogoryMenuIdx);
        var objCategoryMenuIcon = categoryMenuGen.getChild(genCatogoryMenuIdx, "categoryMenuIcon");
        objCategoryMenuIcon.setSrc(strCategoryMenuIcon);

        //resource
        /*
        var filterCon = { type: 'row', colIndex: 'category', key: "00_화면시작", condition: 'and' };
        filterCon.key = strCategory;
        resource.clearFilter();
        resource.setColumnFilter(filterCon);
        */
        var jsonResForCategory = resource.getAllFilteredJSON();

        for (var j = 0; j < jsonResForCategory.length; j++) {
            //console.log("[" + j + "]" + jsonResForCategory[j].id);
            var strRessourceTitle = jsonResForCategory[j].title;
            var strRessourceIcon = jsonResForCategory[j].iconSrc;
            //hidden
            var strResourceId = jsonResForCategory[j].id;
            var strResourceCategory = jsonResForCategory[j].category;
            var strResourcePreviewSrc = jsonResForCategory[j].previewSrc;
            var strResourceXmlpath = jsonResForCategory[j].xmlpath;

            var genResourceIdx = objResourceListGen.insertChild();

            var objResourceTitle = objResourceListGen.getChild(genResourceIdx, "resourceTitle");
            objResourceTitle.setValue(strRessourceTitle);//resource anchor title setting

            var objResourceIcon = objResourceListGen.getChild(genResourceIdx, "resourceIcon");
            objResourceIcon.setSrc(strRessourceIcon);

            var objResourceIconSrc = objResourceListGen.getChild(genResourceIdx, "resourceIconSrc");
            objResourceIconSrc.setValue(strRessourceIcon);

            var objResourceId = objResourceListGen.getChild(genResourceIdx, "resourceId");
            objResourceId.setValue(strResourceId);

            var objResourceCategory = objResourceListGen.getChild(genResourceIdx, "resourceCategory");
            objResourceCategory.setValue(strResourceCategory);

            var objResourcePreviewSrc = objResourceListGen.getChild(genResourceIdx, "resourcePreviewSrc");
            objResourcePreviewSrc.setValue(strResourcePreviewSrc);

            var objResourceXmlpath = objResourceListGen.getChild(genResourceIdx, "resourceXmlpath");
            objResourceXmlpath.setValue(strResourceXmlpath);

            if (jsonResForCategory[j].favMenu == "1") {
                objResourceListGen.getChild(genResourceIdx, "btn_favorit").toggleClass("on");
            }
        }

    }

    //좌측 카테고리에 즐겨찾기 추가
    var i = categoryMenuGen.insertChild();
    var categoryMenuObj = categoryMenuGen.getChild(i,"categoryMenu");
    var categoryMenuIconObj = categoryMenuGen.getChild(i,"categoryMenuIcon");
    categoryMenuObj.setValue("즐겨찾기");
    categoryMenuIconObj.setSrc("/cm/images/base/ico_ds_favorit.png");
    
    scwin.favCategoryMenu = categoryMenuObj.id;
    categoryMenuObj.setHref("javascript:setUserDataTop();fnScrollTo('" + scwin.favCategoryMenu+"')");

    // Snippet 미리보기
    $(".btn_snippet").on("click", function () {
    	designSystemZoomBox.show("");
        $(".designSystem_zoom_box").addClass("on");
        $(".designSystem_dim").addClass("on");
    });
    $(".btn_zoom_close").on("click", function () {
    	designSystemZoomBox.hide();
        $(".designSystem_zoom_box").removeClass("on");
        $(".designSystem_dim").removeClass("on");
    });

    // Snippet 즐겨찾기
    $(".btn_snp_favorit").on("click", function () {
        $(this).toggleClass("on");
    });

    scwin.load_favMenu();
};

setUserDataTop = function () {
	if (scwin.initUserDataTop == true) {
		//console.log("initUserDataTop");
		var categoryGen = mf_wf_main_categoryGen;	
		var dsHeaderHeight = mf_dsheaderGrp.render.getBoundingClientRect().height;
        var favFullHeight = 0;

        if (scwin.favgenTitleId && scwin.favGenFavListGenId) {
            if ($p.getComponentById(scwin.favgenTitleId) && $p.getComponentById(scwin.favGenFavListGenId)) {
                favFullHeight = $p.getComponentById(scwin.favgenTitleId).render.getBoundingClientRect().height + $p.getComponentById(scwin.favGenFavListGenId).render.getBoundingClientRect().height;
            } else {
                favFullHeight = 0;//즐겨찾기 추가후 해제한 경우
            }
        }        
			
		for(i=0;i<categoryGen.getLength();i++){
			
			var categoryTitleObj = categoryGen.getChild(i,"categoryTitle");
			var topVal = categoryTitleObj.render.getBoundingClientRect().top;

			//console.log(categoryTitleObj.id);
			
            if (categoryTitleObj.getUserData("originTop") == undefined) {
                categoryTitleObj.setUserData("originTop", topVal - dsHeaderHeight);
                categoryTitleObj.setUserData("top", topVal - dsHeaderHeight);
            } else {
                categoryTitleObj.setUserData("top", categoryTitleObj.getUserData("originTop") + favFullHeight);
            }
		}
		
		scwin.initUserDataTop = false;	
	}	
}

// LEFT메뉴 버튼 토클
scwin.btnDsSlide_onclick = function () {
    $(".designSystem_layout").toggleClass("hide_menu");
};

scwin.resourceIcon_onclick = function (e) {
    var genIdx = this.getGeneratedIndex();

    var resourceIdObj = this.getGeneratedComponent("resourceId");
    var resourceCategoryObj = this.getGeneratedComponent("resourceCategory");
    var resourceTitelObj = this.getGeneratedComponent("resourceTitle");
    var resourceIconSrcObj = this.getGeneratedComponent("resourceIconSrc");
    var resourcePreviewSrcObj = this.getGeneratedComponent("resourcePreviewSrc");
    var resourceXmlpathObj = this.getGeneratedComponent("resourceXmlpath");

    console.log(genIdx + "번째 , click한  값 : " + resourceIdObj.getValue() + "\n" + resourceCategoryObj.getValue() + "\n" +
        resourceTitelObj.getValue() + "\n" +
        resourceIconSrcObj.getValue() + "\n" +
        resourcePreviewSrcObj.getValue() + "\n" +
        resourceXmlpathObj.getValue()
    );

    // request json 의 스펙을 생성한다.
    var reqJson = {
        "type": "REQUEST",
        "payload": {
            "type": "INSERT_TEMPLETE_PAGE",
            "req": {
                "id": "",
                "category": "",
                "title": "",
                "iconSrc": "",
                "previewSrc": "",
                "xmlpath": ""
            },
            "res": {}
        }
    }

    reqJson.payload.req.id = resourceIdObj.getValue();
    reqJson.payload.req.category = resourceCategoryObj.getValue();
    reqJson.payload.req.title = resourceTitelObj.getValue();
    reqJson.payload.req.iconSrc = resourceIconSrcObj.getValue();
    reqJson.payload.req.previewSrc = resourcePreviewSrcObj.getValue();
    reqJson.payload.req.xmlpath = resourceXmlpathObj.getValue();

    studioAPI.exec({}, {}, reqJson);
};
scwin.btn_popup_onclick = function () {
    var preview_src = this.getGeneratedComponent("resourceXmlpath").getValue().split("WebContent")[1].replaceAll("\\", "/");
    wf_preview.setSrc(preview_src);
};
scwin.atc_search_onviewchange = function (info) {

    var idx = info.newValue;
    if (idx == '') {
        $(".li_categoryMenuGen").css("display", "list-item");
        return;
    }
    $(".li_categoryMenuGen").css("display", "none");
    var selected = categoryMenuGen.getChild(idx, "li_category");
    var menu = categoryMenuGen.getChild(idx, "categoryMenu");
    selected.setStyle("display", "list-item");
    menu.trigger("onclick");
};

scwin.load_favMenu = function () {
    var insertIdx = 0;
    if (categoryGen.getChild(insertIdx, "categoryTitle") != null && categoryGen.getChild(insertIdx, "categoryTitle").getValue() == "즐겨찾기") {
        categoryGen.removeChild(insertIdx);
    }
    var filterFav = { type: 'row', colIndex: 'favMenu', key: "1", condition: 'and' };
    resource.clearFilter();
    resource.setColumnFilter(filterFav);
    var favMenuJson = resource.getAllFilteredJSON();

    if (favMenuJson.length > 0) {
        var genCatogoryFavIdx = categoryGen.insertChild(insertIdx);
        var genFavListGen = categoryGen.getChild(genCatogoryFavIdx, "resourceListGen");
        var genTitle = categoryGen.getChild(genCatogoryFavIdx, "categoryTitle");
        
        //즐겨찾기 타이틀, 리소스목록generator id 기억하기
        scwin.favGenFavListGenId = genFavListGen.id;
        scwin.favgenTitleId = genTitle.id;

        genTitle.setValue("즐겨찾기");
        //categoryMenuGen.getChild(categoryMenuGen.getLength() - 2, "categoryMenu").setHref("#" + genTitle.getID());
        for (var j = 0; j < favMenuJson.length; j++) {
            //console.log("[" + j + "]" + favMenuJson[j].id);
            var strRessourceTitle = favMenuJson[j].title;
            var strRessourceIcon = favMenuJson[j].iconSrc;
            //hidden
            var strResourceId = favMenuJson[j].id;
            var strResourceCategory = favMenuJson[j].category;
            var strResourcePreviewSrc = favMenuJson[j].previewSrc;
            var strResourceXmlpath = favMenuJson[j].xmlpath;

            var genResourceIdx = genFavListGen.insertChild();

            var objResourceTitle = genFavListGen.getChild(genResourceIdx, "resourceTitle");
            objResourceTitle.setValue(strRessourceTitle);//resource anchor title setting

            var objResourceIcon = genFavListGen.getChild(genResourceIdx, "resourceIcon");
            objResourceIcon.setSrc(strRessourceIcon);

            var objResourceIconSrc = genFavListGen.getChild(genResourceIdx, "resourceIconSrc");
            objResourceIconSrc.setValue(strRessourceIcon);

            var objResourceId = genFavListGen.getChild(genResourceIdx, "resourceId");
            objResourceId.setValue(strResourceId);

            var objResourceCategory = genFavListGen.getChild(genResourceIdx, "resourceCategory");
            objResourceCategory.setValue(strResourceCategory);

            var objResourcePreviewSrc = genFavListGen.getChild(genResourceIdx, "resourcePreviewSrc");
            objResourcePreviewSrc.setValue(strResourcePreviewSrc);

            var objResourceXmlpath = genFavListGen.getChild(genResourceIdx, "resourceXmlpath");
            objResourceXmlpath.setValue(strResourceXmlpath);

            genFavListGen.getChild(genResourceIdx, "btn_favorit").toggleClass("on");
            genFavListGen.getChild(genResourceIdx, "btn_favorit").addClass("inFavMenu");
        }
    }
    resource.clearFilter();
    scwin.initUserDataTop = true;//즐겨찾기 항목들이 추가로 그려짐에 따라 ogrigin위치 재계산을 위해 플래그값 수정함.

    // Snippet 미리보기
    $(".btn_snippet").on("click", function () {
        $(".designSystem_zoom_box").addClass("on");
        $(".designSystem_dim").addClass("on");
    });
}
scwin.btn_favorit_onclick = function () {
    var generatorIdx =  this.getGeneratedIndex();
    var id = this.getGenerator().getChild(generatorIdx, "resourceId").getValue();
    //getMatchedIndex는 filter된 데이타에서 찾으므로 잘못된 결과 리턴하여 하기와 같이 clear filter
    resource.clearFilter();
    var resourceIndex = resource.getMatchedIndex("id", id)[0];

    var status = resource.getRowData(resourceIndex)[6] == "1" ? "0" : "1";
    resource.setCellData(resourceIndex, "favMenu", status);

    var len = $(".btn_snp_favorit.on:not(.inFavMenu)").length;
    var title = this.getGenerator().getChild(generatorIdx, "resourceTitle").getValue();
    for (var i = 0; i < len; i++) {
        //var selector = ".btn_snp_favorit.on:eq(" + i + "):not(.inFavMenu)";
        var selector = ".btn_snp_favorit.on:not(.inFavMenu):eq(" + i + ")";
        if ($(selector).next().text() == title) {
            $(selector).toggleClass("on");
            break;
        }
    }
    setUserDataTop();
    scwin.load_favMenu();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload',style:''},E:[{T:1,N:'xf:group',A:{id:'layout',class:'dk_layout page',style:''},E:[{T:1,N:'xf:group',A:{class:'dk_search',id:'',style:''},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'atc_search',useKeywordHighlight:'false',style:'width: 178px;height: 21px;',submenuSize:'auto',search:'contain',autoFocus:'false',allowEmptySubmission:'false',emptyItem:'true',emptyIndex:'1',noResult:'useData','ev:onviewchange':'scwin.atc_search_onviewchange',allOption:'',chooseOption:'',ref:'',placeholder:'Search...',class:'dk_menu_search'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'dk_side'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'dk_menu'},E:[{T:1,N:'w2:generator',A:{id:'categoryMenuGen',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'li_category',style:'',tagname:'li',class:'li_categoryMenuGen'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'a'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:href',E:[{T:3,text:'#mf_layout'}]}]},{T:1,N:'xf:image',A:{id:'categoryMenuIcon',src:'/cm/template/snippets/00_화면시작/00_화면시작.png',style:''}}]},{T:1,N:'w2:anchor',A:{class:'designSystem_m_tit',href:'#mf_layout',id:'categoryMenu',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화면시작'}]}]}]}]}]}]},{T:1,N:'w2:generator',A:{style:'',id:'categoryGen',class:'dk_cont'},E:[{T:1,N:'xf:group',A:{class:'dk_dfbox',id:'categoryTitleGrp',style:''},E:[{T:1,N:'w2:textbox',A:{class:'designSystem_df_tit',id:'categoryTitle',label:'화면시작',style:''}}]},{T:1,N:'w2:generator',A:{class:'dk_list',id:'resourceListGen',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'item',id:'',style:'',tagname:'li'},E:[{T:1,N:'xf:group',A:{class:'img_box',id:''},E:[{T:1,N:'xf:image',A:{id:'resourceIcon',src:'/cm/template/snippets/00_화면시작/0_01%20페이지시작_icon.png',style:'',tabIndex:'','ev:onclick':'scwin.resourceIcon_onclick'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'resourceId',style:'width: 144px;height: 21px;',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'resourceCategory',style:'width: 144px;height: 21px;',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'resourcePreviewSrc',style:'width: 144px;height: 21px;',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'resourceXmlpath',style:'width: 144px;height: 21px;',type:'hidden'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'resourceIconSrc',style:'width: 144px;height: 21px;',type:'hidden'}},{T:1,N:'xf:group',A:{class:'sc_area',id:'',style:''},E:[{T:1,N:'w2:anchor',A:{class:'btn_snippet',id:'btn_popup',outerDiv:'false',style:'','ev:onclick':'scwin.btn_popup_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'title_box'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',style:'',id:'btn_favorit',class:'btn_snp_favorit','ev:onclick':'scwin.btn_favorit_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'즐겨찾기'}]}]},{T:1,N:'w2:anchor',A:{outerDiv:'false',style:'',id:'resourceTitle','ev:onclick':'scwin.resourceIcon_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'01_페이지시작_icon'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'display: none',id:'',class:'dk_cont'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'designSystem_dfbox'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'화면시작',class:'designSystem_df_tit'}}]},{T:1,N:'w2:generator',A:{style:'',id:'',class:'designSystem_list',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'item',id:'',tagname:'li',style:''},E:[{T:1,N:'xf:group',A:{class:'img_box',id:''},E:[{T:1,N:'xf:image',A:{id:'',src:'/cm/template/snippets/00_화면시작/01_페이지시작_icon.png',style:'',tabIndex:''}},{T:1,N:'xf:group',A:{class:'sc_area',id:'',style:''},E:[{T:1,N:'w2:anchor',A:{class:'btn_snippet',id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]}]},{T:1,N:'w2:anchor',A:{class:'btn_snp_favorit',id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'즐겨찾기'}]}]}]}]},{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'01_페이지시작_icon'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'designSystemZoomBox',class:'dk_zoom'},E:[{T:1,N:'xf:group',A:{id:'',class:'dk_zoom_comp'},E:[{T:1,N:'w2:wframe',A:{style:'',id:'wf_preview'}},{T:1,N:'w2:anchor',A:{ref:'',outerDiv:'false',style:'',id:'',class:'btn_zoom_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Insert Text'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'dk_dim'}}]}]}]}]})