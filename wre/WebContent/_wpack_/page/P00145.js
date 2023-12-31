/*amd /page/P00145.xml 5437 57242775daa084fdc64297d4f57015d98a7b8f9f285688b95d560644d4882068 */
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
    wdc_exam1.createWindow("P00145S01", null, "/page/P00145S01.xml", null, "w_P00145S01", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");
    wdc_exam1.createWindow("P00145S02", null, "/page/P00145S02.xml", null, "w_P00145S02", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");
    wdc_exam1.createWindow("P00145S03", null, "/page/P00145S03.xml", null, "w_P00145S03", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");

    wdc_exam2.createWindow("P00145S01", null, "/page/P00145S01.xml", null, "w_P00145S01", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");
    wdc_exam2.createWindow("P00145S02", null, "/page/P00145S02.xml", null, "w_P00145S02", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");
    wdc_exam2.createWindow("P00145S03", null, "/page/P00145S03.xml", null, "w_P00145S03", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");

    //시작 - 예제 테스트를 위한 설정
    wdc_exam1.setArrangeWindows("sequential", ["w_P00145S01", "w_P00145S02", "w_P00145S03"]); //윈도우 분할
    wdc_exam2.setArrangeWindows("sequential", ["w_P00145S01", "w_P00145S02", "w_P00145S03"]); //윈도우 분할
    //종료 - 예제 테스트를 위한 설정
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'선택된 윈도우의 스타일을 적용하는 예제입니다.<br/>선택된 윈도우는 class "w2window_selected" 가 추가됩니다.<br/>class "w2window_selected"를 재정의하여 기본 스타일을 변경할 수 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mw600',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'선택된 윈도우에 스타일 지정하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:windowContainer',A:{controlIconPosition:'left',fixArrangeFullScreen:'false',hideTitleOnMaximize:'false',horizontalArrangeNum:'2',id:'wdc_exam2',nameLayerRearrange:'false',sequentialArrangeColNum:'2',sequentialArrangeRowNum:'2',spaInitCount:'0',stopMinimizeOnNameLayer:'false',stopToggleOnLast:'false',style:'position: relative;height: 340px;',toolbarPosition:'bottom',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'false',useControlIconTitle:'false',useCustomMsg:'false',useFixButton:'true',useNameContainer:'false',useStatusMsg:'false',verticalArrangeNum:'2',windowAutoResize:'false',windowMaxNum:'5',windowMaximizeAll:'false',windowTooltipDisplay:'true',class:'P00145'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'기본 선택된 윈도우 스타일',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:windowContainer',A:{controlIconPosition:'left',fixArrangeFullScreen:'false',hideTitleOnMaximize:'false',horizontalArrangeNum:'2',id:'wdc_exam1',nameLayerRearrange:'false',sequentialArrangeColNum:'2',sequentialArrangeRowNum:'2',spaInitCount:'0',stopMinimizeOnNameLayer:'false',stopToggleOnLast:'false',style:'position: relative;height: 340px;',toolbarPosition:'bottom',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'false',useControlIconTitle:'false',useCustomMsg:'false',useFixButton:'true',useNameContainer:'false',useStatusMsg:'false',verticalArrangeNum:'2',windowAutoResize:'false',windowMaxNum:'5',windowMaximizeAll:'false',windowTooltipDisplay:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]}]}]}]}]}]})