/*amd /page/P00176.xml 7694 b50631801c4c3f88b1084e74a23bb787ba0870995735e16de7323eb1d26ddad1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{id:'categoryLabel',name:'분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk_1',name:'Checkbox',dataType:'text',defaultValue:'0'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.setInitData();
};

/**
 * DataList에 Data 할당
 */
scwin.setInitData = function () {
    var arrData = [
        { "book_name": "공정하다는 착각", "categoryLabel": "인문", "chk_1": "0" },
        { "book_name": "사람일까 상황일까", "categoryLabel": "인문", "chk_1": "1" },
        { "book_name": "무엇이 옳은가", "categoryLabel": "인문", "chk_1": "0" },
    ];

    dlt_books_1.setJSON(arrData);
};

/**
 * 버튼 [getCheckedJSON] 클릭 시
 * API getCheckedJSON를 호출하여 반환 받기
 */
scwin.btn_ex1_onclick = function (e) {
    var strLog;
    var objData;

    //GridView grd_exam1의 컬럼 chk_1의 체크된 행의 데이터를 JSON으로 반환 받기
    //파라미터는 컬럼의 id와 indexd를 사용할 수 있습니다. 일반적으로 id를 사용합니다.(index는 컬럼이 추가/삭제되면 변경되기 때문입니다.)
    objData = grd_exam1.getCheckedJSON("chk_1");

    //로그 출력
    strLog = "getCheckedJSON 반환 값 : \n";
    strLog += JSON.stringify(objData, null, "\t");

    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

/**
 * 버튼 [getCheckedXML] 클릭 시
 * API getCheckedXML를 호출하여 반환 받기
 */
scwin.btn_ex2_onclick = function (e) {
    var strLog;
    var objData;

    //GridView grd_exam1의 컬럼 chk_1의 체크된 행의 데이터를 XML로 반환 받기
    //파라미터는 컬럼의 id와 indexd를 사용할 수 있습니다. 일반적으로 id를 사용합니다.(index는 컬럼이 추가/삭제되면 변경되기 때문입니다.)
    objData = grd_exam1.getCheckedXML("chk_1");

    //로그 출력
    strLog = "getCheckedXML 반환 값 : \n";
    strLog += WebSquare.xml.indent(objData);

    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

/**
 * 버튼 [getCheckedData] 클릭 시
 * API getCheckedData를 호출하여 반환 받기
 */
scwin.btn_ex3_onclick = function (e) {
    var strLog;
    var objData;

    //GridView grd_exam1의 컬럼 chk_1의 체크된 행의 데이터를 2차원 배열로 반환 받기
    //파라미터는 컬럼의 id와 indexd를 사용할 수 있습니다. 일반적으로 id를 사용합니다.(index는 컬럼이 추가/삭제되면 변경되기 때문입니다.)
    objData = grd_exam1.getCheckedData("chk_1");

    //로그 출력
    strLog = "getCheckedData 반환 값 : \n";
    strLog += JSON.stringify(objData, null, "\t");

    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};


/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 컬럼 속성 inputType이 checkbox일 때, <br/>checkbox가 체크된 행의 데이터를 반환 받는 예제입니다.',style:'',class:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'데이터 유형별 아래의 함수를 사용할 수 있습니다.<br/>- JSON 배열 : getCheckedJSON<br/>- XML : getCheckedXML<br/>- 2차원 배열 : getCheckedData //행 단위로 컬럼의 value가 배열로 담깁니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'체크된 행의 Data 반환받기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'컬럼 [선택]의 checkbox를 체크합니다.<br/>버튼을 클릭하고 로그 확인 영역 로그를 확인합니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false',id:'btn_ex1',style:'',type:'button','ev:onclick':'scwin.btn_ex1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getCheckedJSON'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getCheckedXML'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getCheckedData'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'162',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'grd_exam1',rowNumVisible:'true',rowNumWidth:'20',style:'height:100px;',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'선택',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',style:'',value:'분류',width:'52'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'110'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk_1',inputType:'checkbox',style:'',value:'',valueType:'binary',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',style:'',value:'',width:'52'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',value:'',width:'110'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})