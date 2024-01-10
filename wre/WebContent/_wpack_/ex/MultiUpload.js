/*amd /ex/MultiUpload.xml 1741 b032dff44e2a05d8f62a2b700909611c0f1495ea07023d620343d80af4d458b2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.trigger1_onclick = function(e) {
    alert(mul1.getFileCount());
};

scwin.trigger2_onclick = function(e) {
    var fileInfos = mul1.getFileInfos();
    var json = {};
    for(var i=0; i < fileInfos.length; i++){
        var fileName = fileInfos[i].name;
        var fileSize = fileInfos[i].Size;
        json[fileName] = {
            "index":1,
            "name":fileName,
            "value":fileSize
        }
    }
    mul1.setParamJSON(json);
    alert(JSON.stringify(json));
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:multiupload',A:{mode:'html5_transparent',style:'width: 500px;height: 150px;',id:'mul1',uploadButton:''}},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'width:554px;height:179px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파일개수확인'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger2',style:'position:absolute; top:346px; left:13px; width:119px; height:51px; ','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setParamJSON'}]}]}]}]}]})