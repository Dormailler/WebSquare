/*amd /ex/onSelect.xml 1555 f8c9dfbf8659f5d6e9d1187ec5d32f16f8a31ba00977130ac6590d3cab572d80 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.autoComplete1_onitemclick = function(index) {
    alert("onItemClick - " + index + "이벤트 발생!");
};

scwin.autoComplete1_onselected = function() {
    alert("onselect " + "이벤트 발생!")
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'autoComplete1',style:'width: 148px;height: 21px;',submenuSize:'auto',search:'start',allOption:'',chooseOption:'',ref:'','ev:onitemclick':'scwin.autoComplete1_onitemclick','ev:onselected':'scwin.autoComplete1_onselected'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]}]})