/*amd /ex/AutoComplete.xml 2070 83dbe89b739cfd9cc093477e5bd3df69d52801c261cc7f5fc60d84bc559bdcd7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.autoComplete1_oneditkeyup = function(info,e) {
    var message = ("이전값: " + info.oldValue + ", \n현재값: " + info.newValue + ", \n현재누른키코드: " + info.keyCode + "." );
    alert(message);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'autoComplete1',style:'width: 148px;height: 21px;',submenuSize:'auto',search:'contain',allOption:'',chooseOption:'',ref:'',useKeywordHighlight:'true','ev:oneditkeyup':'scwin.autoComplete1_oneditkeyup'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ad'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'b4r'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ce'}]},{T:1,N:'w2:value'}]}]}]},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'',style:'position:absolute;top:34px;left:2px;width:148px;height:21px;',submenuSize:'auto',search:'start',allOption:'',chooseOption:'',ref:'',nextTabByEnter:'true',nextTabID:'i1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'a'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'b'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'c'}]},{T:1,N:'w2:value'}]}]}]},{T:1,N:'xf:input',A:{id:'i1',style:'position:absolute;top:35px;left:168px;width:117px;height:34px;'}}]}]}]})