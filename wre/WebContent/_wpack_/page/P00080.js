/*amd /page/P00080.xml 4415 3445a428d23215ef7af1a0716a2a600643f44cfaffe8812b12dd5edeb0f7606e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_exam_code',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'label',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYN',name:'useYN',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    //DataList dlt_exam_code에 데이터 할당
    dlt_exam_code.setJSON([
        { "label": "Apple", "code": "01", "useYN": "Y" },
        { "label": "Pear", "code": "02", "useYN": "N" },
        { "label": "Grapes", "code": "03", "useYN": "Y" },
        { "label": "Watermelon", "code": "04", "useYN": "N" },
        { "label": "Peach", "code": "05", "useYN": "Y" }
    ]);
};


/**
 * CheckCombobox - 항목 숨김 지정 - 스크립트
 * 버튼 [항목 숨기기] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    //컴포넌트 ccb_exam3의 숨길 항목의 컬럼과 조건값 설정
    //항목 숨기기 컬럼 및 숨기기 값 설정 - 목록과 연결된 DataList의 "useYN" 컬럼의 값이 "N"인 경우 항목을 숨깁니다.
    ccb_exam3.setVisibleColumn("useYN", "N");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'CheckCombobox - 기본',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:checkcombobox',A:{id:'ccb_exam1',displayAllOptionLabel:'false',chooseOption:'',displayMode:'label',style:'width: 150px;min-height:24px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',ref:'',visibleRowNum:'5'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_exam_code'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'CheckCombobox - 항목 숨김 지정',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:checkcombobox',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',displayAllOptionLabel:'false',displayMode:'label',id:'ccb_exam2',ref:'',style:'width: 150px;min-height:24px;',submenuSize:'auto',visibleColumn:'useYN',visibleColumnFalseValue:'N',visibleRowNum:'5'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_exam_code'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'CheckCombobox - 항목 숨김 지정 - 스크립트',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'mb10'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'항목 숨기기'}]}]}]},{T:1,N:'xf:checkcombobox',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',displayAllOptionLabel:'false',displayMode:'label',id:'ccb_exam3',ref:'',style:'width: 150px;min-height:24px;',submenuSize:'auto',visibleRowNum:'5'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_exam_code'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]}]}]}]})