/*amd /ex/LinkedDataList.xml 2493 fe0ed87e374fb5ca11951c09623645d5dfcb5466fafee517a0f0f240b1e5376d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ID',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'AGE',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STATUS',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'ID',E:[{T:4,cdata:'DDD'}]},{T:1,N:'AGE',E:[{T:4,cdata:'13'}]},{T:1,N:'STATUS',E:[{T:4,cdata:'GOOD'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'ID',E:[{T:4,cdata:'ZZZ'}]},{T:1,N:'AGE',E:[{T:4,cdata:'5'}]},{T:1,N:'STATUS',E:[{T:4,cdata:'BAD'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'ID',E:[{T:4,cdata:'GGG'}]},{T:1,N:'AGE',E:[{T:4,cdata:'342'}]},{T:1,N:'STATUS',E:[{T:4,cdata:'GOOD'}]}]}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'dataList1',id:'linkedDataList1'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'STATUS=="GOOD"'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.trigger1_onclick = function(e) {
    //linkedDataList1.setCondition("sort", "DESC('ID')");
    //linkedDataList1.setCondition("filter", "STATUS=='BAD'");
    linkedDataList1.setColumnFilter({
        type:"row",
        colIndex:"ID",
        key:"DDD",
        condition:"and"
    })
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:select1',A:{id:'',selectedIndex:'-1',appearance:'full',style:'position:absolute;top:44px;left:80px;width:210px;height:42px;',cols:'',rows:'',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:linkedDataList1'},E:[{T:1,N:'xf:label',A:{ref:'ID'}},{T:1,N:'xf:value',A:{ref:'AGE'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position:absolute; top:118px; left:88px; width:95px; height:32px; ','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setCondition'}]}]}]}]}]})