/*amd /ex/pivot.xml 3463 ab15a08ecae9e310ab4dba4bd0348c20317afadfdc3f666880bd294afb6da93e */
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
    options.sumColor = "red";
    options.sumFontSize = "15";
    options.sumFormat = "#,###";

    p1.pivotExcelDownload(options);
};

scwin.trigger2_onclick = function(e) {
    var options = {};
    options.startRowIndex = 1;
    options.startColumnIndex = 1;
    options.append = 1; // 원래 데이터에 추가
    p1.pivotExcelUpload(options);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:pivot',A:{style:'width: 500px;height: 300px;',dataList:'data:dataList1',vals:'col2',rows:'col1',cols:'col3',id:'p1',headerYMerge:'true',noColumnMove:'true',allTotalName:'합계',grandTotalDisplayType:'both',showGrandTotal:'true',grandTotalName:'총합계'},E:[{T:1,N:'w2:fieldInfo',E:[{T:1,N:'w2:field',A:{name:'name1',id:'col1'}},{T:1,N:'w2:field',A:{name:'name2',id:'col2'}},{T:1,N:'w2:field',A:{name:'name3',id:'col3'}}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'width:275px;height:23px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'pivotExcelDownload'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger2',style:'position:absolute;top:302px;left:297px;width:174px;height:23px;','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'pivotExcelUpload'}]}]}]}]}]})