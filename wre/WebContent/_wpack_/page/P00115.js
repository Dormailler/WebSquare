/*amd /page/P00115.xml 5498 a8c109b3e3bcd2592648c25e51c4abada86e16348a7de092b50d903833683358 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.initPage();
};

/**
 * 화면 초기화
 */
scwin.initPage = function () {
    var strDefaultWidth;

    //예제 테스트를 위해 default width 변경
    if (window.innerWidth < 450) {
        strDefaultWidth = "230px";
    } else {
        strDefaultWidth = "300px";
    }

    //윈도우 추가
    wdc_exam1.createWindow("P00115S01", null, "/page/P00115S01.xml", null, "w_P00115S01", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");
    wdc_exam1.createWindow("P00115S02", null, "/page/P00115S02.xml", null, "w_P00115S02", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");
    wdc_exam1.createWindow("P00115S03", null, "/page/P00115S03.xml", null, "w_P00115S03", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");

    wdc_exam2.createWindow("P00115S01", null, "/page/P00115S01.xml", null, "w_P00115S01", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");
    wdc_exam2.createWindow("P00115S02", null, "/page/P00115S02.xml", null, "w_P00115S02", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");
    wdc_exam2.createWindow("P00115S03", null, "/page/P00115S03.xml", null, "w_P00115S03", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");

    //시작 - 예제 테스트를 위한 설정
    wdc_exam1.setArrangeWindows("sequential", ["w_P00115S01", "w_P00115S02", "w_P00115S03"]); //윈도우 분할
    wdc_exam2.setArrangeWindows("sequential", ["w_P00115S01", "w_P00115S02", "w_P00115S03"]); //윈도우 분할
    //종료 - 예제 테스트를 위한 설정
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'툴바 영역에 "윈도우 목록 보기" 아이콘을 출력하는 예제입니다.<br/>아이콘을 클릭하면 윈도우 목록이 닫기 버튼과 함께 콤보 형태로 출력됩니다.<br/>WindowContainer의 속성 "useWindowScrollButton"을 설정하여 기능을 사용할 수 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mw600',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'툴바에 윈도우 목록 아이콘 출력하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:windowContainer',A:{controlIconPosition:'left',fixArrangeFullScreen:'false',hideTitleOnMaximize:'false',horizontalArrangeNum:'2',id:'wdc_exam2',nameLayerRearrange:'false',sequentialArrangeColNum:'2',sequentialArrangeRowNum:'2',spaInitCount:'0',stopMinimizeOnNameLayer:'false',stopToggleOnLast:'false',style:'position: relative;height: 340px;',toolbarPosition:'bottom',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'false',useControlIconTitle:'false',useCustomMsg:'false',useFixButton:'false',useNameContainer:'false',useStatusMsg:'false',verticalArrangeNum:'2',windowAutoResize:'false',windowMaxNum:'5',windowMaximizeAll:'false',windowTooltipDisplay:'true',useWindowScrollButton:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'기본 동작',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:windowContainer',A:{controlIconPosition:'left',fixArrangeFullScreen:'false',hideTitleOnMaximize:'false',horizontalArrangeNum:'2',id:'wdc_exam1',nameLayerRearrange:'false',sequentialArrangeColNum:'2',sequentialArrangeRowNum:'2',spaInitCount:'0',stopMinimizeOnNameLayer:'false',stopToggleOnLast:'false',style:'position: relative;height: 340px;',toolbarPosition:'bottom',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'false',useControlIconTitle:'false',useCustomMsg:'false',useFixButton:'true',useNameContainer:'false',useStatusMsg:'false',verticalArrangeNum:'2',windowAutoResize:'false',windowMaxNum:'5',windowMaximizeAll:'false',windowTooltipDisplay:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]}]}]}]}]}]})