/*amd /page/P00240.xml 2743 14409c68429399e47191f10d002ec8e60351f6c8f65d14a138096c047ef97b71 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 영역 [속성 'displayFormatter'에 Input 입력값을 소문자에서 대문자로 바꿔주는 함수 지정]의
 * 입력 [ibx_exam2]의 displayFormatter 함수
 */
scwin.toUpperCaseFormatter = function (value) {
    return value.toUpperCase();
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'displayFormatter 속성에 사용자 함수를 지정하는 예제입니다.<br/>displayFormatter 속성으로 함수명을 지정하고 스크립트에서 해당 함수를 별도로 정의해야 합니다.<br/>이 기능은 아래의 속성으로 사용할 수 있습니다.<br/>- dataType : Input의 dataType을 명시<br/>- displayFormatter : 스크립트에서 선언한 함수명 기재',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'속성 \'displayFormatter\'에 사용자 함수 지정',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'소문자 알파뱃 입력 후 Input에서 focus out 또는 Blur 시점에 사용자 함수에 의해 대문자 알파뱃으로 포맷이 변화되는 것을 확인할 수 있습니다.<br/><br/>ex) 입력값 : abcdefgh -> 출력값 : ABCDEFGH',style:'',displayFormat:''}},{T:1,N:'w2:textbox',A:{class:'txt_info_important',escape:'false',id:'',label:'※Input에 포커스를 주면 처음에 입력한 값으로 돌아옵니다.',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ibx_exam2',maxByteLength:'8',style:'min-width:120px;',dataType:'text',displayFormatter:'scwin.toUpperCaseFormatter'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''}}]}]}]}]}]})