/*amd /ex/GridView3_381.xml 5987 d8a7313fe18c42ca946121dcbd5c96a672e30ef688026f1d82e0036a0de7de8f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'a'}]},{T:1,N:'col2',E:[{T:4,cdata:'k'}]},{T:1,N:'col3',E:[{T:4,cdata:'t'}]},{T:1,N:'col4',E:[{T:4,cdata:'100'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'a'}]},{T:1,N:'col2',E:[{T:4,cdata:'k'}]},{T:1,N:'col3',E:[{T:4,cdata:'t'}]},{T:1,N:'col4',E:[{T:4,cdata:'50'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'a'}]},{T:1,N:'col2',E:[{T:4,cdata:'k'}]},{T:1,N:'col3',E:[{T:4,cdata:'f'}]},{T:1,N:'col4',E:[{T:4,cdata:'500'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'b'}]},{T:1,N:'col2',E:[{T:4,cdata:'k'}]},{T:1,N:'col3',E:[{T:4,cdata:'t'}]},{T:1,N:'col4',E:[{T:4,cdata:'200'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'b'}]},{T:1,N:'col2',E:[{T:4,cdata:'c'}]},{T:1,N:'col3',E:[{T:4,cdata:'f'}]},{T:1,N:'col4',E:[{T:4,cdata:'300'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'b'}]},{T:1,N:'col2',E:[{T:4,cdata:'k'}]},{T:1,N:'col3',E:[{T:4,cdata:'f'}]},{T:1,N:'col4',E:[{T:4,cdata:'400'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'b'}]},{T:1,N:'col2',E:[{T:4,cdata:'k'}]},{T:1,N:'col3',E:[{T:4,cdata:'t'}]},{T:1,N:'col4',E:[{T:4,cdata:'500'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'a'}]},{T:1,N:'col2',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'b'}]},{T:1,N:'col2',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'c3'}]},{T:1,N:'col2',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'d'}]},{T:1,N:'col2',E:[{T:4,cdata:'4'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.trigger1_onclick = function(e) {
    var opt = {
        sortIndex: [0,1],
        closeGroup: true,
        groupbyHeader: [{
            InputType:"expression",
            expression:'toggle() + depthStr() + "  [" + count() + "Cases ] "',
            align:"left",
            colSpan:"4"
        }],
        groupbyFooter:{
            depth_0:[{
                colSpan:"3",
                value:"Grand Total",
                align:"right"
            },{
                inputType : "expression",
                expression: 'SUM("col4")'
            }],
            depth_1:[{
                colSpan:"3",
                value:"Sub Total",
                align:"right"
            },{
                inputType : "expression",
                expression: 'SUM("col4")'
            }]
        }
    };
    gv1.groupby(opt);
};

scwin.trigger2_onclick = function(e) {
    var index = gv1.getFocusedRowIndex();
    dataList1.insertRow(index);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'gv1',style:'width:500px;height:309px;',dataList:'data:dataList1',groupbyZone:'true',groupbyZoneHeight:'80',groupbyZoneMessage:'그룹존',groupbyFilterBox:'true',groupbyFilterBoxLocation:'top',useFilterList:'true',customFilterBox:'true',copyType:'default',useShiftKey:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column6',value:'name1',displayMode:'label',useFilter:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'name2',displayMode:'label',useFilter:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'name3',displayMode:'label',useFilter:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'name4',displayMode:'label',useFilter:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'col1',value:'',displayMode:'label delim value',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataList2'},E:[{T:1,N:'w2:label',A:{ref:'col1'}},{T:1,N:'w2:value',A:{ref:'col2'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col4',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger2',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'width:172px;height:23px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'groupby()-필터링'}]}]}]}]}]})