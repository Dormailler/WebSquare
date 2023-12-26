/*amd /main.xml 2421 86995115f467eb6d75bc83d270969947abf61854523a3406643488c753424fc5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dataMap1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key1',name:'name1',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'key1',E:[{T:4,cdata:'abcd'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.btn1_onclick = function(e) {
    alert(ipt1.getValue());
};

scwin.btn2_onclick = function(e) {
    alert(t1.getWindow(t1.getSelectedTabID()).ipt1.getValue());
};

scwin.btn3_onclick = function(e) {
    alert(t1.getWindow(t1.getSelectedTabID()).w1.getWindow().ipt1.getValue());
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Main',style:'color:#804040;',tagname:'h2'}},{T:1,N:'xf:input',A:{id:'ipt1',style:'width: 144px;height: 21px;'}},{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'',style:'width:148px;',ref:'data:dma_dataMap1.key1'}},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn1_onclick',id:'btn1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'main'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn2_onclick',id:'btn2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'middle'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn3_onclick',id:'btn3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'sub'}]}]},{T:1,N:'w2:tabControl',A:{id:'t1',alwaysDraw:'false',style:'height: 200px;'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px;',id:'tabs1',label:'1'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px',id:'tabs2',label:'2'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'height:170px',id:'content1',src:'/ui/middle.xml'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'height:170px',id:'content2',src:'/ui/middle.xml'}}]}]}]}]})