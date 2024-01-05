/*amd /ex/MultiUpload.xml 1102 34e77ceeba039c527d465d2f390b55aef8ab2eb8446e61eca6ced87e546e7118 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.trigger1_onclick = function(e) {
    alert(mul1.getFileCount());
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:multiupload',A:{mode:'html5_transparent',style:'width: 500px;height: 150px;',id:'mul1',uploadButton:''}},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'width:554px;height:179px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파일개수확인'}]}]}]}]}]})