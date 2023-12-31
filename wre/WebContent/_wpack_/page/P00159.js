/*amd /page/P00159.xml 4568 e01fa4b6c51f2ac4fc50b0cc074b410984ecd14bbdc72dfde599b4f31693e83a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.initPage();
};

/**
 * 화면 초기화
 */
scwin.initPage = function () {

    //TabControl [tac_exam1], [tac_exam2], [tac_exam3], [tac_exam4]에 탭 P00159S01.xml, P00159S02.xml, P00159S03.xml 추가하기
    for (let i = 1; i <= 3; i++) {
        let strPage = "P00159S0" + i;

        tac_exam1.addTab(strPage, { "label": strPage, "openAction": "select" }, { "src": "/page/" + strPage + ".xml", "wframe": true });
        tac_exam2.addTab(strPage, { "label": strPage, "openAction": "select" }, { "src": "/page/" + strPage + ".xml", "wframe": true });
        tac_exam3.addTab(strPage, { "label": strPage, "openAction": "select" }, { "src": "/page/" + strPage + ".xml", "wframe": true });
        tac_exam4.addTab(strPage, { "label": strPage, "openAction": "select" }, { "src": "/page/" + strPage + ".xml", "wframe": true });
    }

    //탭 추가 예시
    //tac_exam1.addTab( "P00159S01", { "label" : "P00159S01", "openAction" : "select" }, { "src" : "/page/P00159S01.xml", "wframe" : true });
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'TabControl의 탭을 표시할 위치를 지정하는 속성 tabPosition 예제입니다.<br/>속성 tabPosition에 지정할 수 있는 값은 "top", "left", "right", "bottom" 입니다.<br/>속성 tabScroll이 "true"로 지정된 경우 "top", "bottom"만 지원되며, "left", "right"로 지정된 경우 "top"으로 동작합니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:''}},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mw600',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본 동작) 탭 위치 : top',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_exam1',style:'position: relative;height: 160px;',tabScroll:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'탭 위치 : right',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_exam2',style:'position: relative;height: 160px;',tabScroll:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true',tabPosition:'right'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'탭 위치 : bottom',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_exam3',style:'position: relative;height: 160px;',tabScroll:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true',tabPosition:'bottom'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'탭 위치 : left',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_exam4',style:'position: relative;height: 160px;',tabScroll:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true',tabPosition:'left'}}]}]}]}]}]}]}]})