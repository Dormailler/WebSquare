/*amd /ex/GridView5.xml 6997 42638098b477d89c0bbbe28c25347a4d7285bab158b1780a1b17b6fac2c8b3b5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'0.1'}]},{T:1,N:'col2',E:[{T:4,cdata:'0.2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'0.2'}]},{T:1,N:'col2',E:[{T:4,cdata:'-0.2'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'',style:'position:absolute; top:74px; left:96px; width:229px; height:130px; ',dataList:'data:dataList1',contextMenu:'true',contextMenuAltClick:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header3'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'column19',value:'',displayMode:'label',allOption:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column8',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'name2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody3'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'column20',value:'',displayMode:'label',trueValue:'Y',falseValue:'N',valueType:'other'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col2',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column12',value:'',displayMode:'label',expression:'avg("col1")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column11',value:'',displayMode:'label',expression:'AVG("col2")'}}]}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'',style:'position:absolute;top:99px;left:388px;width:347px;',dataList:'data:dataList2',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'column1',displayMode:'label',value:'name1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column6',value:'name2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column8',value:'name3',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'col1',displayMode:'label',partialCheckNextClick:'check'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col3',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'',style:'position:absolute;top:283px;left:109px;width:742px;height:81px;',dataList:'',autoFit:'allColumn',autoFitMinWidth:'800'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column12',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column1',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}}]}]}]}]}]}]})