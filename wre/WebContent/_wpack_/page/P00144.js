/*amd /page/P00144.xml 4311 e6e9b1b49c2fdc92978f7a985030b8855b0b2112626c91c98e4fa3d1377555d1 */
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
 * 항목 숨김 지정 - 스크립트 - 스크립트
 * 버튼 [항목 숨기기] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    //Radio [rad_exam3]의 숨길 항목의 컬럼과 조건값 설정
    //항목 숨기기 컬럼 및 숨기기 값 설정 - 목록과 연결된 DataList의 "useYN" 컬럼의 값이 "N"인 경우 항목을 숨깁니다.
    rad_exam3.setVisibleColumn("useYN", "N");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Radio의 특정 항목을 표시하지 않는 예제입니다.<br/>DataList와 Radio의 항목을 연결하여 설정할 수 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본) 모든 항목 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:select1',A:{id:'rad_exam1',selectedIndex:'-1',appearance:'full',style:'min-width: 80px;min-height: 21px;',cols:'',rows:'',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_exam_code'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'항목 숨김 지정 - 속성',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'rad_exam2',ref:'',rows:'',selectedIndex:'-1',style:'min-width: 80px;min-height: 21px;',visibleColumn:'useYN',visibleColumnFalseValue:'N'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_exam_code'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'항목 숨김 지정 - 스크립트',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'mb10'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'항목 숨기기'}]}]}]},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'rad_exam3',ref:'',rows:'',selectedIndex:'-1',style:'min-width: 80px;min-height: 21px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_exam_code'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]}]}]}]})