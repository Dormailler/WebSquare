/*amd /page/P00317.xml 4317 3d9bfeee3b68e29d67ad3f1e5e7e6c44a8394e87aba3609c6aa85f992be5eca8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_exam',repeatNode:'data',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'depth',name:'depth'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'label'}},{T:1,N:'w2:column',A:{dataType:'text',id:'value',name:'value'}}]},{T:1,N:'w2:data',A:{use:'true',xmlns:''},E:[{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'1'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1'}]},{T:1,N:'value',E:[{T:4,cdata:'menu1'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'2'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1-1'}]},{T:1,N:'value',E:[{T:4,cdata:'menu1-1'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'2'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1-2'}]},{T:1,N:'value',E:[{T:4,cdata:'menu1-2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'3'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1-2-1'}]},{T:1,N:'value',E:[{T:4,cdata:'menu1-2-1'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'2'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1-3'}]},{T:1,N:'value',E:[{T:4,cdata:'menu1-3'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'1'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴2'}]},{T:1,N:'value',E:[{T:4,cdata:'menu2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'2'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴2-1'}]},{T:1,N:'value',E:[{T:4,cdata:'menu2-1'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo'},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    // 예제 테스트를 위해 TreeView 'trv_exam1'의 노드 Value가 'menu1-2-1'인 노드를 선택합니다.
    trv_exam1.findNodeByValue('menu1-2-1', true);
};

/**
 * 버튼 [모든 노드의 선택 해제하기] 클릭 시
 */
scwin.btn_exam1_1_onclick = function (e) {
    // TreeView 'trv_exam1'의 선택된 노드를 해제합니다.
    trv_exam1.deselectNode();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{escape:'false',label:'스크립트로 TreeView의 모든 노드를 선택 해제하는 예제입니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',label:'다음의 TreeView 함수로 구현합니다.<br/>- deselectNode( ) : 선택된 노드를 해제합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',label:'TreeView의 선택된 노드를 강조하기 위해 별도의 class가 적용되어있습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_exam1_1_onclick',id:'btn_exam1_1',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'모든 노드의 선택 해제하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 6px;border: 1px solid #CED4DA;box-sizing: border-box;'},E:[{T:1,N:'w2:treeview',A:{class:'P00317',dataType:'listed',hierarchy:'true',id:'trv_exam1',style:'min-height: 50px;overflow: inherit;',toggleEvent:'none',useHirarchySelect:'true'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_exam'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'value'}},{T:1,N:'w2:depth',A:{ref:'depth'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]}]}]}]}]}]}]}]})