/*amd /ex/GridView4.xml 6825 a5ac0928eeac44460bbd96c64d53dd44529ca390b73496be295926608ed81521 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'1'}]},{T:1,N:'col2',E:[{T:4,cdata:'6'}]},{T:1,N:'col3',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'4'}]},{T:1,N:'col2',E:[{T:4,cdata:'5'}]},{T:1,N:'col3',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col3',E:[{T:4,cdata:'3'}]},{T:1,N:'col2',E:[{T:4,cdata:'9'}]},{T:1,N:'col1',E:[{T:4,cdata:'7'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList3',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
    
};

scwin.trigger1_onclick = function(e) {
    gv2.setCellClass(0, 0, "blue")
};

scwin.trigger2_onclick = function(e) {
    scwin.tempfilter = dataList2.getFilterList();
    alert("필터저장");
};


scwin.trigger3_onclick = function(e) {
    for(var i = 0 ; i < scwin.tempfilter.length; i++){
        dataList2.setColumnFilter(scwin.tempfilter[i]);
    }
    alert("필터 불러오기");
};

scwin.trigger4_onclick = function(e) {
    dataList2.clearFilter();
};

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.blue{color:#00f}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'',style:'position:absolute; top:25px; left:18px; width:327px; height:140px; ',dataList:'data:dataList1',noResultMessageVisibleAlways:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'name2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col2',value:'',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'gv2',style:'position:absolute; top:224px; left:81px; width:252px; height:156px; ',dataList:'data:dataList2',dataDragDrop:'true',dataDragDropOther:'true',moveKeyEditMode:'false',moveKeyEditModeAll:'true',selectedCellColor:'#FF0080',focusMode:'both',selectedRowColor:'#400080',useFilterList:'true',focusFlow:'linear'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'name2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'name3',displayMode:'label',useFilter:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'custom',style:'',id:'col2',value:'',displayMode:'label',typeGetter:'getType'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col3',value:'',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'',style:'position:absolute; top:231px; left:417px; width:260px; height:147px; ',dataList:'data:dataList3',dataDragDrop:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'name2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'name3',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col3',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position:absolute; top:391px; left:87px; width:175px; height:33px; ','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setCellClass()'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger2',style:'position:absolute; top:391px; left:295px; width:107px; height:34px; ','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getFilter'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger3',style:'position:absolute;top:395px;left:550px;width:105px;height:29px;','ev:onclick':'scwin.trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setFilter'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger4',style:'position:absolute; top:394px; left:426px; width:98px; height:29px; ','ev:onclick':'scwin.trigger4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'clearFilter'}]}]}]}]}]})