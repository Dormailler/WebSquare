/*amd /page/P00195.xml 22784 36c90848a9bad993252c5da0813893697cd5e76adc2b7823dcb99086e991b19c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}},{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

}
/**
 * 영역 [Event: oneditenter]의
 * 입력 [ibx1]의 oneditenter 함수
 */
scwin.ibx1_oneditenter = function () {
    var value = this.getValue();
    var str_len = value.trim().length;
    var strLog = "[Input] 필수 입력 항목 - 입력 값 : " + value;
    var isPass = true;

    if (str_len == 0) {
        //로그 출력
        strLog = "[Input] 해당 항목은 필수입력 항목입니다.";
        isPass = false;
    }
    scwin.setResultTxt(spn1, isPass);
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
}
/**
 * 영역 [Event: onviewchange]의
 * 입력 [ibx2]의 onviewchange 함수
 */
scwin.ibx2_onviewchange = function (info) {
    var value = this.getValue();
    var strLog = "[Input] 날짜 입력 검증 - 입력 값 : " + value;
    var flag = scwin.isDate(value);
    var isPass = true;
    if (!flag) {
        //로그 출력
        strLog = "[Input] 날짜입력 오류입니다.";
        this.setValue("");
        this.focus();
        isPass = false;
    }
    scwin.setResultTxt(spn2, isPass);
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

/**
 * 영역 [Event: onviewchange]의
 * 입력 [ibx2]의 날짜 형식 유효성 확인 함수
 */
scwin.isDate = function (sDate, timeChk) {
    var flag = true;
    try {
        if (sDate.length == 8) {
            sDate = sDate + "000000";
        }

        var y1 = parseInt(sDate.substring(0, 4), 10);
        var m1 = parseInt(sDate.substring(4, 6), 10);
        var d1 = parseInt(sDate.substring(6, 8), 10);
        var h1 = parseInt(sDate.substring(8, 10), 10);
        var t1 = parseInt(sDate.substring(10, 12), 10);
        var s1 = parseInt(sDate.substring(12), 10);
        if (isNaN(y1) || isNaN(m1) || isNaN(d1) || isNaN(h1) || isNaN(t1) || isNaN(s1))
            flag = false;

        if (m1 < 1 || m1 > 12)
            flag = false;

        var maxDay = 31;
        if (m1 == 2) {
            maxDay = ((y1 % 400 == 0) || ((y1 % 4 == 0) && (y1 % 100 != 0))) ? 29
                : 28;
        } else if (m1 == 4 || m1 == 6 || m1 == 9 || m1 == 11) {
            maxDay = 30;
        }

        if (d1 < 1 || d1 > maxDay) {
            flag = false;
        }

        if (h1 + t1 + s1 != "") {
            if (h1 < 0 || h1 > 24) {
                flag = false;
            } else if (h1 == 24) {
                if (typeof timeChk == "boolean" && !timeChk)
                    flag = false;
                if (t1 > 0)
                    flag = false;
                if (s1 > 0)
                    flag = false;
            }
            if (t1 < 0 || t1 > 59)
                flag = false;
            if (s1 < 0 || s1 > 59)
                flag = false;
        }
    } catch (ex) {
        console.error(ex);
        flag = false;
    }
    return flag;
};

/**
 * 영역 [Event: onchange]의
 * 입력 [ibx1]의 onchange 함수
 */
scwin.ibx3_onchange = function (info) {
    var value = this.getValue();
    var flag = scwin.isSSN(value);
    var strLog = "[Input] 주민등록 번호 - 입력 값 : " + value;
    var isPass = true;

    if (!flag) {
        //로그 출력
        strLog = "[Input] 주민번호를 확인하세요";
        isPass = false;
    }
    scwin.setResultTxt(spn3, isPass);
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};


/**
 * 영역 [Event: onchange]의
 * 입력 [ibx1]의 주민등록 번호 유효성 확인 함수
 */
scwin.isSSN = function (str) {
    var checkID = new Array(2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5);
    var i = 0, sum = 0;
    var temp = 0;
    var yy = "";

    if (str.length != 13) {
        return false;
    }

    for (i = 0; i < 13; i++) {
        if (str.charAt(i) < '0' || str.charAt(i) > '9') {
            return false;
        }
    }

    // foreigner PersonID Pass
    if (str.substring(6, 13) == "5000000" || str.substring(6, 13) == "6000000" || str.substring(6, 13) == "7000000"
        || str.substring(6, 13) == "8000000") {
        return true;
    }

    for (i = 0; i < 12; i++) {
        sum += str.charAt(i) * checkID[i];
    }

    temp = sum - Math.floor(sum / 11) * 11;
    temp = 11 - temp;
    temp = temp - Math.floor(temp / 10) * 10;

    // 나이 (-) 체크
    if (str.charAt(6) == '1' || str.charAt(6) == '2' || str.charAt(6) == '5' || str.charAt(6) == '6') {
        yy = "19";
    } else {
        yy = "20";
    }
    if (parseInt(WebSquare.date.getCurrentServerDate("yyyy")) - parseInt(yy + str.substring(0, 2)) < 0) {
        return false;
    }

    // 외국인 주민번호 체크로직 추가
    if (str.charAt(6) != '5' && str.charAt(6) != '6' && str.charAt(6) != '7' && str.charAt(6) != '8') {
        if (temp == parseInt(str.charAt(12))) {
            return true;
        } else {
            return false;
        }
    } else {
        if ((temp + 2) % 10 == parseInt(str.charAt(12))) {
            return true;
        } else {
            return false;
        }
    }
};

/**
 * 영역 [Property: displayFormatter]의
 * 입력 [ibx4]의 displayFormatter 함수
 */
scwin.phoneFormatter = function (str) {
    var strLog = "[Input] 전화번호 - 입력 값 : " + str;
    var phoneNum = scwin.formatPhone(str);
    var isDash = (phoneNum.indexOf("-") > 1);
    var isPass = true;

    if (!isDash) {
        //로그 출력
        strLog = "[Input] 전화번호 형식 오류입니다.";
        phoneNum = "";
        isPass = false;
    }
    scwin.setResultTxt(spn4, isPass);
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
    return phoneNum;
};

/**
 * 영역 [Property: displayFormatter]의
 * 입력 [ibx4]의 문자열에 전화번호 형식 Formatter를 적용하여 반환하는는 함수
 */
scwin.formatPhone = function (str) {
    try {
        str = str.replace(/\s+/g, "");
        var commCdList = ["0505"]; // 4자리 국번 ,예외가 되는 국번 확인
        var commCdNum = str.substr(0, 4); // 국번 4자리 확인
        if (commCdList.indexOf(commCdNum) > -1) { //국번이 0505 인경우
            return str.replace(/^(01[0136789]{1}|02|0[3-9]{1}[0-9]{1}[0-9]{1})-?([*0-9]{3,4})-?([0-9]{4})$/, "$1-$2-$3");
        } else if (str.length <= 11) {
            return str.replace(/^(01[0136789]{1}|02|0[3-9]{1}[0-9]{1})-?([*0-9]{3,4})-?([0-9]{4})$/, "$1-$2-$3");
        } else {
            return str;
        }
    } catch (ex) {
        console.error(ex);
    }
};

/**
 * 영역 [Property: validator]의
 * 입력 [ibx5]의 validator 함수
 */
scwin.ibx5_validator = function (info) {
    var value = info;
    var strLog = "[Input] 이메일 주소 - 입력 값 : " + value;
    var flag = scwin.isEmail(info);
    var isPass = true;

    if (!flag) {
        //로그 출력
        strLog = "[Input] 이메일 주소 형식 오류입니다.";
        value = "";
        isPass = false;
    }
    if (info.length != 0) {
        scwin.setResultTxt(spn5, isPass);
        $c.frame.printExampleLog(strLog, txa_log, false);
        console.log(strLog);
    }
    return value;
};
/**
 * 영역 [Property: validator]의
 * 입력 [ibx5]의 이메일 주소 유효성 검사사 함수
 */
scwin.isEmail = function (str) {
    if (typeof str != "undefined" && str != "") {
        var format = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (format.test(str)) {
            return true;
        } else {
            return false;
        }
    }

    return true;
};

/**
 * 영역 [Event: onviewchange]의
 * selectbox [slt1]의 onviewchange 함수
 * 입력[ibx6]에서 받은 값을 확인할 범위를 지정
 */
scwin.slt1_onviewchange = function (info) {
    ibx6.setValue("");
    ibx6.focus();
};

/**
 * 영역 [Event: onviewchange]의
 * 입력[ibx6]의 onviewchange 함수
 */
scwin.ibx6_onviewchange = function (info) {
    var selData = slt1.getValue();
    var data = this.getValue();
    var strLog = "[Input]값 범위 체크 - 입력 값 : " + data;
    var isPass = true;

    if (data == "") {
        return;
    }
    data = parseInt(data);

    if (selData == "1") {
        if (data > 1000 || data < 1) {
            isPass = false;
            strLog = "[Input] 1~1000 사이의 값을 입력하세요";
            this.setValue("");
        }
    } else if (selData == "2") {
        if (data > 2000 || data < 1001) {
            isPass = false;
            strLog = "[Input] 1001~2000 사이의 값을 입력하세요";
            this.setValue("");
        }
    } else if (selData == "3") {
        if (data > 3000 || data < 2001) {
            isPass = false;
            strLog = "[Input] 2001~3000 사이의 값을 입력하세요";
            this.setValue("");
        }
    } else if (selData == "4") {
        if (data < 3001) {
            isPass = false;
            strLog = "[Input] 3001 이상상의 값을 입력하세요";
            this.setValue("");
        }
    }

    scwin.setResultTxt(spn6, isPass);

    //로그 출력
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

/**
 * 결과 표시 텍스트, css 설정 함수
 */
scwin.setResultTxt = function (spnObj, isPass) {
    var msg = "O";
    var color = "green";

    if (isPass == false) {
        msg = "입력을 확인하세요";
        color = "red";
    }

    spnObj.setValue(msg);
    spnObj.setStyle("color", color);
}

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};

/**
 * 영역 [실행 순서 테스트]의
 * 입력[ibx7], 입력[ibx8]의 onblur 함수
 */
scwin.test_onblur = function(e) {
    //로그 출력
    var strLog = "[Input] onblur";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

/**
 * 영역 [실행 순서 테스트]의
 * 입력[ibx7], 입력[ibx8]의 oneditenter 함수
 */
scwin.test_oneditenter = function() {
    //로그 출력
    var strLog = "[Input] oneditenter";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);

};

/**
 * 영역 [실행 순서 테스트]의
 * 입력[ibx7], 입력[ibx8]의 onviewchange 함수
 */
scwin.test_onviewchange = function(info) {
    //로그 출력
    var strLog = "[Input] onviewchange";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);

};


/**
 * 영역 [실행 순서 테스트]의
 * 입력[ibx7]의 displayformatter 함수
 */
scwin.ibx7_displayFormatter = function(str){
    //로그 출력
    var strLog = "[Input] displayformatter";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
    return str;
}
/**
 * 영역 [실행 순서 테스트]의
 * 입력[ibx8]의 validator 함수
 */
scwin.ibx8_validator = function(info){
    //로그 출력
    var strLog = "[Input] validator";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);

}
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Input의 입력 값의 유효성 검사 방법들의 예제입니다.<br/>크게 두 가지 방법으로 Input의 이벤트를 이용한 방법과 속성에 사용자 정의 함수를 선언하는 방법입니다.<br/>사용할 이벤트와 속성은 아래와 같습니다.<br/><br/>이벤트: oneditenter, onviewchange, onchange, onblur<br/>속성: validator, displayformatter<br/><br/>추가적으로 자주 사용되는 onblur, onviewchange, oneditenter, validator, displayformatter의 실행 순서를 확인할 수 있는 예제를 포함하고 있습니다.',style:'margin-bottom: 10px;'}},{T:1,N:'w2:textbox',A:{class:'exam_txt caution',id:'',label:'컴포넌트의 이벤트 발생 시 결과가 입력 컴포넌트 우측에 표시되며 영역 [로그 확인]의 textarea에 로그가 같이 출력됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''}},{T:1,N:'xf:group',A:{id:'',class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Event: onveiwchange',class:'example_div_th_style',escape:'false'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'example_div_td_style'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'이벤트 onviewchange를 이용한 날짜 형식 유효성 검사입니다.<br/>onviewchange는 사용자가 화면에서 값을 변경한 경우 발생하는 이벤트 입니다.<br/>script 상에서 수정된 경우 이벤트가 발생하지 않습니다.<br/>ex) 20230101 -> (O) , 9999999 -> (X)',class:'ws5_example_txt_normal',escape:'false'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'gvwbox'}},{T:1,N:'xf:input',A:{maxlength:'8',dataType:'date','ev:onviewchange':'scwin.ibx2_onviewchange',displayFormat:'yyyy/MM/dd',style:'width:161px;',allowChar:'0-9',autoFocus:'true',id:'ibx2',placeholder:'YYYY/MM/dd',class:''}},{T:1,N:'w2:span',A:{style:'font-weight: bold;color: red;margin-left: 10px;',id:'spn2',label:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Event: oneditenter',class:'example_div_th_style',escape:'false'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'example_div_td_style'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'이벤트 oneditenter를 이용한 필수 입력 항목입니다.<br/>oneditenter 이벤트는 Input에서 "ENTER"키 혹은 "TAB"키를 누를 때 발생합니다.',class:'ws5_example_txt_normal',escape:'false'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'gvwbox'}},{T:1,N:'xf:input',A:{'ev:oneditenter':'scwin.ibx1_oneditenter',maxlength:'13',dataType:'text',editType:'select',style:'width:161px;',id:'ibx1',placeholder:'해당 항목은 필수입력입니다.',class:'',mandatory:'true'}},{T:1,N:'w2:span',A:{style:'font-weight: bold;color: red;margin-left: 10px;',label:'',id:'spn1'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Event: onchange',class:'example_div_th_style',escape:'false'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'example_div_td_style'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'이벤트 onchange를 이용한 주민등록번호 유효성 검증 샘플입니다<br/>onchange는 Input 안의 값이 변경된 경우 발생하는 이벤트로, 화면에서 사용자의 조작이나 script 상에서 변경된 경우 모두 발생합니다.<br/>script 상에서 변경되어도 이벤트가 발상한다는 점에서 잘 사용되지 않고, <br/>사용자 조작으로만 이벤트가 발생하는 onviewchange가 더 자주 사용됩니다.<br/>ex) 6407131018433 -> (O)',class:'ws5_example_txt_normal',escape:'false'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'gvwbox'}},{T:1,N:'xf:input',A:{'ev:onchange':'scwin.ibx3_onchange',maxlength:'13',dataType:'number',displayFormat:'######-#######',editType:'select',style:'width:161px;',allowChar:'0-9',autoFocus:'true',id:'ibx3',placeholder:'주민번호',class:''}},{T:1,N:'w2:span',A:{style:'font-weight: bold;color: red;margin-left: 10px;',id:'spn3',label:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Event: onblur',class:'example_div_th_style',escape:'false'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'example_div_td_style'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'onblur를 이용한 값 선택한 겂 범위 체크 예제입니다.<br/>onblur는 Input에서 포커스가 벗어나게 되면 발생하는 이벤트입니다.<br/>selectbox에서 범위를 선택하고 숫자를 입력한 뒤 Input이 아닌 다른 곳을 클릭하면 이벤트가 발생합니다.',class:'ws5_example_txt_normal',escape:'false'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'gvwbox'}},{T:1,N:'xf:group',A:{id:'',style:'margin-bottom: 5px;'},E:[{T:1,N:'xf:select1',A:{chooseOptionLabel:'',submenuSize:'auto',chooseOption:'true',allOption:'',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled','ev:onviewchange':'scwin.slt1_onviewchange',disabled:'false',style:'width:164px;',id:'slt1',renderType:'native',class:'',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1~1000'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1001~2000'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2001~3000'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3001~'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:input',A:{dataType:'number','ev:onviewchange':'scwin.ibx6_onviewchange',displayFormat:'###,##0',style:'width:164px;text-align: right;',allowChar:'0-9',id:'ibx6',placeholder:'',class:''}},{T:1,N:'w2:span',A:{style:'font-weight: bold;color: red;margin-left: 10px;',id:'spn6',label:''}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Property: displayFormatter',class:'example_div_th_style',escape:'false'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'example_div_td_style'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사용자 정의 함수를 이용한 전화번호 유효성 검증 예제입니다.<br/>속성 displayFormatter를 이용한 방법으로 displayformatter는 Input에 입력된 값의 표시 형태를 사용자 정의 함수로 만드는 속성입니다.<br/>입력이 완료되면 실행되기 때문에 동작은 onblur 이벤트와 비슷합니다.<br/>ex) 050512345678, 01012345678, 021234567',class:'ws5_example_txt_normal',escape:'false'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'gvwbox'}},{T:1,N:'xf:input',A:{displayFormatter:'scwin.phoneFormatter',editType:'select',style:'width:161px;',allowChar:'0-9',id:'ibx4',placeholder:'전화번호',class:''}},{T:1,N:'w2:span',A:{style:'font-weight: bold;color: red;margin-left: 10px;',id:'spn4',label:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Property: validator',class:'example_div_th_style',escape:'false'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'example_div_td_style'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사용자 정의 함수를 이용한 이메일 유효성 검증 예제입니다.<br/>속성 validator를 이용한 방법으로 유효성 검사를 위한 사용자 정의 함수를 설정하는 속성입니다.<br/>ex) websquare@inswave.com',class:'ws5_example_txt_normal',escape:'false'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'gvwbox'}},{T:1,N:'xf:input',A:{validator:'scwin.ibx5_validator',style:'width:195px;',id:'ibx5',placeholder:'ex) websqaure@inswave.com ',class:''}},{T:1,N:'w2:span',A:{style:'font-weight: bold;color: red;margin-left: 10px;',id:'spn5',label:''}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'실행 순서 테스트',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'자주 사용되는 oneditenter, onviewchange, onblur, validator, displayformatter의 실행 순서를 확인하는 예제 입니다.<br/>모두 적용 한 뒤 실행 순서대로 로그를 출력하는 예제입니다.<br/>주의 사항<br/>1. displayformatter와 validator는 동시에 적용되지 않고 validator가 우선시됩니다.<br/>2. 각 이벤트 발생 조건에 맞게 테스트해야합니다.<br/>onblur는 포커스를 잃었을 때, onviewchange, displayformatter, validator는 값이 변경된 상태에서 포커스를 잃을 때, oneditenter는 "ENTER"키나 "TAB"키를 눌렀을 경우 발생합니다.<br/>전체를 다 실행시키려면 "ENTER"키 혹은 "TAB"키를 눌러줍니다.',style:''}},{T:1,N:'xf:group',A:{class:'gvwbox',id:'',style:''}},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:span',A:{style:'font-weight: bold;',label:'displayformatter',id:''}}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:input',A:{displayFormatter:'scwin.ibx7_displayFormatter','ev:oneditenter':'scwin.test_oneditenter','ev:onblur':'scwin.test_onblur','ev:onviewchange':'scwin.test_onviewchange',style:'width:195px;',id:'ibx7',class:''}}]}]},{T:1,N:'xf:group',A:{id:'',style:'margin-top: 15px;'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:span',A:{style:'font-weight: bold;',id:'',label:'validator'}}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:input',A:{'ev:oneditenter':'scwin.test_oneditenter','ev:onblur':'scwin.test_onblur','ev:onviewchange':'scwin.test_onviewchange',validator:'scwin.ibx8_validator',style:'width:195px;',id:'ibx8',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})