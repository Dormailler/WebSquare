/*amd /page/P00228.xml 6516 f110354f000cf58a31ee0fc2ec63284c96be4e4064423775d69fbc2a6d24dd97 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.setDataList();
};

/**
 * DataList에 데이터 할당
 */
scwin.setDataList = function () {
    let arrData = [
        { "label": "거의 모든 전쟁의 역사", "categoryLabel": "역사/문화" },
        { "label": "공정하다는 착각", "categoryLabel": "인문" },
        { "label": "기분을 관리하면 인생이 관리된다", "categoryLabel": "시/에세이" },
        { "label": "나는 둔감하게 살기로 했다", "categoryLabel": "인문" },
        { "label": "나로서 충분히 괜찮은 사람", "categoryLabel": "시/에세이" },
        { "label": "나의 문화유산답사기", "categoryLabel": "역사/문화" },
        { "label": "내가 틀릴 수도 있습니다", "categoryLabel": "인문" },
        { "label": "너무 잘하려고 애쓰지 마라", "categoryLabel": "시/에세이" },
        { "label": "마음의 법칙", "categoryLabel": "인문" },
        { "label": "모든 사람에게 좋은 사람일 필요는 없어", "categoryLabel": "시/에세이" },
        { "label": "무엇이 옳은가", "categoryLabel": "인문" },
        { "label": "문명의 붕괴(Collapse)", "categoryLabel": "역사/문화" },
        { "label": "미움받을 용기", "categoryLabel": "인문" },
        { "label": "불편한 편의점", "categoryLabel": "소설" },
        { "label": "선을 넘지 않는 사람이 성공한다", "categoryLabel": "자기계발" },
        { "label": "우리는 여전히 삶을 사랑하는가", "categoryLabel": "인문" },
        { "label": "작별인사", "categoryLabel": "소설" },
        { "label": "잘했고 잘하고 있고 잘 될 것이다", "categoryLabel": "시/에세이" },
        { "label": "저만치 혼자서", "categoryLabel": "소설" },
        { "label": "책들의 부엌", "categoryLabel": "소설" }
    ];

    dlt_books_1.setJSON(arrData);
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};

/**
 * GridView grd_exam1의 onscrollstart 이벤트 핸들러
 */
scwin.grd_exam1_onscrollstart = function () {
    let strLog = "";

    strLog += "** scwin.grd_exam1_onscrollstart **";

    //textarea에 log 출력
    $c.frame.printExampleLog(strLog, txa_log, false);

    console.log("scwin.grd_exam1_onscrollstart");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 이벤트 onScrollStart 예제입니다.<br/>GridView의 세로 스크롤이 이동하여 최상단에 닿을 때 최초 1회 발생합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'속성 alwaysTriggerScrollStart을 \'true\'로 지정하면 스크롤이 최상단에 위치할 때 마다 onscrollstart이벤트가 발생합니다.<br/>',style:''}},{T:1,N:'w2:textbox',A:{class:'exam_txt caution',id:'',label:'컴포넌트의 이벤트 발생 시 영역 [로그 확인]의 textarea 또는 브라우저 개발자도구 콘솔에 로그가 출력됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'이벤트 onscrollstart 발생 시 로그 출력하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'세로 스크롤을 아래로 내렸다가 최상단으로 이동시킵니다.<br/>스크롤이 최상단에 닿으면 최초 1회 로그가 출력됩니다.',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'280',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'grd_exam1',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true',rowNumVisible:'true',rowNumWidth:'26','ev:onscrollstart':'scwin.grd_exam1_onscrollstart'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'분류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'160',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'70',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'160',value:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})