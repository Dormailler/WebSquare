/*amd /middle.xml 1938 b24554c0d8c235d2dff7544e37322682ada9def9314d49ecd540a6c575d4fb6a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:aliasDataMap',A:{scope:'../dma_dataMap1',id:'adm_aliasDataMap1',studioSrc:'/ui/main.xml'}}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.btn2_onclick = function(e) {
    alert(ipt1.getValue());
};

scwin.btn3_onclick = function(e) {
    alert(w1.getWindow().ipt1.getValue());
};

scwin.btn1_onclick = function(e) {
    /* alert($p.main().ipt1.getValue()); */
    /* alert($p.parent().ipt1.getValue()); */
    alert($p.top().ipt1.getValue());
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Middle',style:'color:#008040;',tagname:'h2'}},{T:1,N:'xf:input',A:{id:'ipt1',style:'width: 144px;height: 21px;'}},{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'',style:'width:148px;',ref:'data:adm_aliasDataMap1.key1'}},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn1',style:'',type:'button','ev:onclick':'scwin.btn1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'main'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn2',style:'',type:'button','ev:onclick':'scwin.btn2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'middle'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn3',style:'',type:'button','ev:onclick':'scwin.btn3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'sub'}]}]},{T:1,N:'w2:wframe',A:{style:'height: 100px;',id:'w1',src:'/ui/sub.xml'}}]}]}]})