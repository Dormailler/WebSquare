/*amd /sub.xml 1765 b0fd1c3960ca7e6b72b66bbee6ce6f73baa0c06fb951b37dc0bbab479ec9ba96 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:aliasDataMap',A:{scope:'../../dma_dataMap1',id:'aliasDataMap1',studioSrc:'/main.xml'}}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.btn1_onclick = function(e) {
    alert($p.top().ipt1.getValue());
};

scwin.btn2_onclick = function(e) {
    alert($p.parent().ipt1.getValue());
};

scwin.btn3_onclick = function(e) {
    alert(ipt1.getValue());
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Sub',style:'color:#FF8040;',tagname:'h2'}},{T:1,N:'xf:input',A:{id:'ipt1',style:'width: 144px;height: 21px;'}},{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'',ref:'data:adm_aliasDataMap1.key1',style:'width:148px;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn1_onclick',id:'btn1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'main'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn2_onclick',id:'btn2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'middle'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn3_onclick',id:'btn3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'sub'}]}]}]}]}]})