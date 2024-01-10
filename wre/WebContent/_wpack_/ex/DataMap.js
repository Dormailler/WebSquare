/*amd /ex/DataMap.xml 1837 235a8e7eb93a71b93fe76571501d72571aa5a194ef7b7a18242771fafc318a9c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dataMap1','ev:onbeforemodelchange':'scwin.dataMap1_onbeforemodelchange'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'id',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'type',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'color',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shape',name:'name4',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'Round',E:[{T:4,cdata:' '}]},{T:1,N:'id',E:[{T:4,cdata:'1001'}]},{T:1,N:'type',E:[{T:4,cdata:'Medical'}]},{T:1,N:'color',E:[{T:4,cdata:'Red'}]},{T:1,N:'shape',E:[{T:4,cdata:'Round'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.trigger1_onclick = function(e) {
    dataMap1.set("type","인간");
};

scwin.dataMap1_onbeforemodelchange = function(info) {
    // if(info.newValue == ) {return false;}
    alert("key: " + info.key + "\nOldValue: " + info.oldValue + "\nNewValue: " + info.newValue);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position:absolute;top:61px;left:75px;width:152px;height:52px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'datamap.set()'}]}]}]}]}]})