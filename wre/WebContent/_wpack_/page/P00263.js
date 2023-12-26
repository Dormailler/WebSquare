/*amd /page/P00263.xml 5127 dc32d5bd6d6fe3a07a9f2800306de07608033bf74553382846f17b7775dcd941 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230320'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_list',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'City',name:'Label'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Code',name:'Code'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'Code',E:[{T:4,cdata:'SE'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Paris'}]},{T:1,N:'Code',E:[{T:4,cdata:'PA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'London'}]},{T:1,N:'Code',E:[{T:4,cdata:'LN'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Beijing'}]},{T:1,N:'Code',E:[{T:4,cdata:'BJ'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};

/**
 * 버튼 "Validate 실행"의 onclick 이벤트
 */
scwin.btn_validate_onclick = function(e) {
    // validate 실행 및 결과 저장
    var validate = acb_validate.validate();
    //로그 출력 
    var strLog = "[validate] :" + validate;
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'AutoComplete의 validate 함수를 이용해 값이 선택 되었는지 확인하는 예제입니다.<br/>validate()는 컴포넌트에서 값이 선택되면 "true", 선택되지 않으면 "false"를 반환합니다.<br/>단, interactionMode="ture"인 경우 항상 "true"를 반환합니다.',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'validate()',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'1. AutoComplete의 값을 선택하지 않은 상태에서 버튼을 클릭합니다.<br/>2. 로그 창에서 "false" 값 반환을 선택합니다.<br/>3. AutoComplete의 값을 선택하고 버튼을 클릭합니다.<br/>4. 로그 창에서 "true" 값 반환을 확인합니다.',style:''}},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_validate',useKeywordHighlight:'false',style:'width: 148px;margin-right: 5px;',submenuSize:'auto',search:'start',useLocale:'false',allOption:'',chooseOption:'true',ref:'',selectedData:'true',mandatory:'true',chooseOptionLabel:'- 선택 -'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_list'},E:[{T:1,N:'w2:label',A:{ref:'City'}},{T:1,N:'w2:value',A:{ref:'Code'}}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false',id:'btn_validate',style:'width: 150px;',type:'button','ev:onclick':'scwin.btn_validate_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Validate 실행'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})