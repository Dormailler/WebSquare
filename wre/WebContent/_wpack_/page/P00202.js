/*amd /page/P00202.xml 5426 31808f858f4ca81b3d389894e5d8aa484719b9685f14b021c9878457c962b223 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [달력에 표시되는 날짜를 1993-05-31로 변경하기] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    // InputCalendar 'ica_exam_3'의 날짜 값을 "20230101" -> "19930531" 변경하기
    ica_exam_3.setDefaultDate("19930531");
};

/**
 * 버튼 [달력에 표시되는 날짜를 획득하여 메시지 창에 표시하기] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    // InputCalendar 'ica_exam_3'의 날짜 값을 획득하여 메시지 창(alert)에 표시하기
    let date = ica_exam_3.getDefaultDate();
    alert(date);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'입력 값이 없는 상태에서 사용자가 초기에 달력 아이콘을 클릭할 때 달력에 표시되는 날짜를 지정 및 값으로 획득할 수 있습니다.<br/>이 기능은 아래의 속성과 함수로 사용할 수 있습니다.<br/>- defaultDate : (속성) 초기에 달력 아이콘을 클릭할 때 달력에 표시되는 날짜<br/>- getDefaultDate : (함수) 현재 컴포넌트에 설정된 defaultDate를 반환<br/>- setDefaultDate : (함수) 속성 defaultDate의 value를 설정',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본 설정) defaultDate = ""',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'속성 defaultDate에 default값인 빈 문자열이 설정되어 있습니다.<br/>달력 아이콘 클릭 후 표시되는 달력의 날짜가 시스템 상의 날짜(오늘)로 설정되어 있는것을 확인합니다.',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'mr_def',focusOnDateSelect:'false',id:'ica_exam_1',renderDiv:'true',rightAlign:'false',style:'width:100px;min-height: 24px;'}},{T:1,N:'xf:group',A:{style:'margin-top: 10px;',id:''}},{T:1,N:'xf:group',A:{id:'',style:'margin-top: 10px;'}}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'속성 defaultDate에 값 설정',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'속성 defaultDate에 "20230101" 문자열을 추가하였습니다.<br/>달력 아이콘 클릭 후 표시되는 달력의 날짜가 2023-01-01로 설정되어 있는것을 확인합니다.',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'mr_def',focusOnDateSelect:'false',id:'ica_exam_2',renderDiv:'true',rightAlign:'false',style:'width:100px;min-height: 24px;',defaultDate:'20230101'}}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'메소드를 통한 속성 defaultDate에 값 설정 및 획득',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'버튼 [달력에 표시되는 날짜를 1993-05-31로 변경하기]를 클릭하여 속성 defaultDate의 값을 변경할 수 있습니다. (변경된 날짜 값은 달력 아이콘을 눌러 확인 가능합니다.)<br/>그 후 버튼 [달력에 표시되는 날짜를 획득하여 메시지 창에 표시하기]를 클릭하면 "19930531" 날짜 값을 획득하고 메시지창(alert)에서 확인할 수 있습니다.',style:''}},{T:1,N:'xf:group',A:{id:'',style:'margin-top: 10px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'달력에 표시되는 날짜를 1993-05-31로 변경하기'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'달력에 표시되는 날짜를 획득하여 메시지 창에 표시하기'}]}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'mr_def',focusOnDateSelect:'false',id:'ica_exam_3',renderDiv:'true',rightAlign:'false',style:'width:100px;min-height: 24px;'}}]}]}]}]}]}]}]})