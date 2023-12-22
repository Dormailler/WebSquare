/*amd /page/P00224.xml 4861 49ef00483db1f790da1ee252a0ef37d57ac7aa80b8b09872dc042478d5d922cc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    let title; // 툴바의 네임레이어에 표시되는 타이틀
    let srcPath; // 서브화면의 경로
    let windowId; // window ID로 null 이나 ""입력시 title이 id로 생성
    let windowName; // window의 헤더에 표시될 타이틀로 null 이나 ""입력시 title값이 출력

    title = "windowTitle_1";
    srcPath = "/page/P00224S01.xml";
    windowId = "windowId_1";
    windowName = "window_1";

    // windowContainer 'wgc_exam_1', 'wgc_exam_2'의 윈도우 생성하기
    wgc_exam_1.createWindow(title, "", srcPath, windowName, windowId, "newWindow");
    wgc_exam_2.createWindow(title, "", srcPath, windowName, windowId, "newWindow");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'선택된 윈도우의 네임레이어 클릭 시 최소화하지 않고 윈도우의 크기를 유지할지 여부에 관한 예제입니다.<br/>이 기능은 아래의 속성으로 사용할 수 있습니다.<br/>- stopMinimizeOnNameLayer : 네임레이어 클릭에 상관 없이 윈도우를 항상 열린 상태로 유지',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본 설정) stopMinimizeOnNameLayer - false',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'네임레이어 클릭 시 해당 윈도우의 크기를 최소화합니다.',style:''}},{T:1,N:'w2:windowContainer',A:{sequentialArrangeColNum:'2',verticalArrangeNum:'2',controlIconPosition:'left',windowMaximizeAll:'false',id:'wgc_exam_1',useStatusMsg:'false',hideTitleOnMaximize:'false',spaInitCount:'0',nameLayerRearrange:'false',useNameContainer:'false',useControlIconTitle:'false',tooltipDisplay:'true',style:'position: relative;height: 300px;',sequentialArrangeRowNum:'2',fixArrangeFullScreen:'false',useFixButton:'false',windowAutoResize:'false',windowMaxNum:'5',useCloseButton:'false',stopMinimizeOnNameLayer:'false',toolbarPosition:'bottom',stopToggleOnLast:'false',horizontalArrangeNum:'2',useCustomMsg:'false',tooltipGroupClass:'false',windowTooltipDisplay:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'stopMinimizeOnNameLayer - true 적용',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'네임레이어 클릭 시 해당 윈도우의 크기를 최소화하지 않습니다.',style:''}},{T:1,N:'w2:windowContainer',A:{controlIconPosition:'left',fixArrangeFullScreen:'false',hideTitleOnMaximize:'false',horizontalArrangeNum:'2',id:'wgc_exam_2',nameLayerRearrange:'false',sequentialArrangeColNum:'2',sequentialArrangeRowNum:'2',spaInitCount:'0',stopMinimizeOnNameLayer:'true',stopToggleOnLast:'false',style:'position: relative;height: 300px;',toolbarPosition:'bottom',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'false',useControlIconTitle:'false',useCustomMsg:'false',useFixButton:'false',useNameContainer:'false',useStatusMsg:'false',verticalArrangeNum:'2',windowAutoResize:'false',windowMaxNum:'5',windowMaximizeAll:'false',windowTooltipDisplay:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]}]}]}]}]}]})