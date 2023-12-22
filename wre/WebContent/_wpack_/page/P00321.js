/*amd /page/P00321.xml 6357 8c4f85bf72a2aaecba33af28c6c3e045db2d7814342d36143b75ab8c591f21c6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo'},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    // WidgetContainer 'wgc_exam1'에 위젯 1개를 추가합니다.
    wgc_exam1.addWidgets({
        id: "wg_exam1",
        src: "/page/P00321S01.xml",
        scope: true,
        unitWidth: 1,
        unitHeight: 5,
        title: "사용자 버튼 미설정",
        x: 0,
        y: 0
    });
};

/**
 * 버튼 [위젯 추가하기 - 우측 상단에 사용자 버튼 설정] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // 위젯 생성 옵션 정보
    let widgetOptions = {};

    /**
     * [필수] 위젯의 우측 상단의 기능 버튼들의 설정을 반환할 함수 또는 함수의 이름
     * @param {string} argWidgetID Widget의 Runtime ID
     */
    widgetOptions.buttonFormatter = function (argWidgetID) {
        // 우측 상단에 출력할 버튼의 정보를 Array로 반환합니다.
        // 사용자 버튼 2개와 기능 버튼 '최대화', '닫기'를 배치합니다.
        return [
            {
                'id': 'btn_info', // 버튼의 ID. WidgetContainer의 이벤트 'onclickcustombtn' 핸들러에서 ID로 구분하여 로직을 구성합니다.
                'className': 'P00321_w2widget_btnInfo', // 버튼의 class. 정의한 class는 '[프로젝트]/css/example.css'에서 확인할 수 있습니다.
                'isCustom': true // 사용자 버튼 여부
            },
            {
                'id': 'btn_setting', // 버튼의 ID. WidgetContainer의 이벤트 'onclickcustombtn' 핸들러에서 ID로 구분하여 로직을 구성합니다.
                'className': 'P00321_w2widget_btnSetting', // 버튼의 class. 정의한 class는 '[프로젝트]/css/example.css'에서 확인할 수 있습니다.
                'isCustom': true // 사용자 버튼 여부
            },
            {
                'useDefault': 'maximize' // '최대화' 버튼 사용. (위젯 기본 기능 버튼 지정. 'fix': 고정, 'minimize': 최소화, 'maximize': 최대화, 'close': 닫기)
            },
            {
                'useDefault': 'close' // '닫기' 버튼 사용 (위젯 기본 기능 버튼 지정. 'fix': 고정, 'minimize': 최소화, 'maximize': 최대화, 'close': 닫기)
            }
        ];
    };

    // [필수] 위젯 ID. 동일한 ID를 가진 위젯이 있으면 추가되지 않습니다.
    widgetOptions.id = "wg_exam2";

    // [필수] 위젯 파일 경로 
    widgetOptions.src = "/page/P00321S02.xml";

    // [필수] scope 적용 여부로 true 고정
    widgetOptions.scope = true;

    // [필수] 위젯 너비 : (설정 값 / WidgetContainer의 속성 'col'의 설정 값 * 100)으로 '%'단위로 그려집니다.
    widgetOptions.unitWidth = 1;

    // [필수] 위젯 높이 : (설정 값 * WidgetContainer의 속성 'unitHeightPixel'의 설정 값)으로 'px'단위로 그려집니다.
    widgetOptions.unitHeight = 5;

    // [권장] 위젯 타이틀
    widgetOptions.title = "사용자 버튼 설정";

    // 위젯의 x 위치
    widgetOptions.x = 0;

    // 위젯의 y 위치
    widgetOptions.y = 6;

    // WidgetContainer 'wgc_exam1'에 위젯 1개를 추가합니다.
    wgc_exam1.addWidgets(widgetOptions);
};

/**
 * WidgetContainer 'wgc_exam1'의 이벤트 'onclickcustombtn' 핸들러.
 * 우측 상단의 사용자 정의 버튼 클릭 시 호출.
 * (함수 'addWidgets'의 인자 위젯 옵션의 'buttonFormatter'에 정의 한 함수에서 반환한 사용자 버튼)
 * @param {string} id Widget의 Runtime ID
 * @param {string} btnId 우측 상단의 사용자 버튼의 ID
 */
scwin.wgc_exam1_onclickcustombtn = function (id, btnId) {
    switch (btnId) {
        case "btn_info":
            alert("정보 버튼 클릭");
            break;
        case "btn_setting":
            alert("설정 버튼 클릭");
            break;
        default:
            break;
    }
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{escape:'false',label:'WidgetContainer의 함수 \'addWidgets\'로 위젯을 추가할 때, 우측 상단의 버튼 영역에 사용자 버튼을 지정하거나 기본 기능 버튼의 사용 여부를 설정하는 예제입니다.<br/>함수 \'addWidgets\'의 첫 번째 인자의 위젯 옵션 \'buttonFormatter\'을 사용하여 구현할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',label:'화면이 로딩되면 기본 설정 위젯 \'사용자 버튼 미설정\'이 추가됩니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',label:'동일한 ID를 가진 위젯이 있으면 위젯이 추가되지 않습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'위젯 추가하기 - 우측 상단에 사용자 버튼 설정'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',style:''},E:[{T:1,N:'w2:widgetContainer',A:{verticalMargin:'0',threshold:'null',params:'false',mode:'pushpull',style:'height: 200px;',id:'wgc_exam1',cols:'1',unitHeightPixel:'20',class:'ws_exam_comm',horizontalMargin:'8',preventMaximizeByTitle:'true','ev:onclickcustombtn':'scwin.wgc_exam1_onclickcustombtn'}}]}]}]}]}]}]}]}]})