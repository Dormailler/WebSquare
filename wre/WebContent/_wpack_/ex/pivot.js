/*amd /ex/pivot.xml 2809 3c24bfb56f628c7096336c786efc500023888d1928f781e06c2d77792019d5a8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'600000000'}]},{T:1,N:'col2',E:[{T:4,cdata:'2000000000'}]},{T:1,N:'col3',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'3000000000'}]},{T:1,N:'col2',E:[{T:4,cdata:'400000000'}]},{T:1,N:'col3',E:[{T:4,cdata:'50000000000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'5'}]},{T:1,N:'col2',E:[{T:4,cdata:'6'}]},{T:1,N:'col3',E:[{T:4,cdata:'6000000000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'5'}]},{T:1,N:'col2',E:[{T:4,cdata:'6'}]},{T:1,N:'col3',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'1'}]},{T:1,N:'col2',E:[{T:4,cdata:'6'}]},{T:1,N:'col3',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'3'}]},{T:1,N:'col2',E:[{T:4,cdata:'6'}]},{T:1,N:'col3',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'600000000'}]},{T:1,N:'col2',E:[{T:4,cdata:'4'}]},{T:1,N:'col3',E:[{T:4,cdata:'400000000'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.trigger1_onclick = function(e) {
    var options = {};
    options.type = "1";
    options.fileName = "e.xls";
    options.bodyFormat = "#,###,0#";
    options.bodyTextAlign = "right";
    options.autoSizeColumn = "header";

    p1.pivotExcelDownload(options);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:pivot',A:{style:'width: 500px;height: 300px;',dataList:'data:dataList1',vals:'col2',rows:'col1',cols:'col3',id:'p1',headerYMerge:'true'},E:[{T:1,N:'w2:fieldInfo',E:[{T:1,N:'w2:field',A:{name:'name1',id:'col1'}},{T:1,N:'w2:field',A:{name:'name2',id:'col2'}},{T:1,N:'w2:field',A:{name:'name3',id:'col3'}}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'width:275px;height:23px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'pivotExcelDownload'}]}]}]}]}]})