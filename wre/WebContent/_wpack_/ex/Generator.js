/*amd /ex/Generator.xml 1357 c01f35243a40298727b4311aae5d0f8b4c94971e4b7ea1d6ef3b44fc968ac0f6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.trigger1_onclick = function(e) {
    var n = i1.getValue();
    for(var i=0;i<n;i++){
        g1.insertChild(i);
    }
    
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:generator',A:{style:'position:absolute; top:122px; left:139px; width:294px; height:144px; ',id:'g1'},E:[{T:1,N:'xf:input',A:{id:'',style:'width: 144px;height: 21px;'}}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position:absolute;top:62px;left:352px;width:79px;height:35px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:input',A:{id:'i1',style:'position:absolute; top:60px; left:140px; width:164px; height:34px; '}}]}]}]})