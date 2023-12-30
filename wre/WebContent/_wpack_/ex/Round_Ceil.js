/*amd /ex/Round_Ceil.xml 1356 f3c25121256b7ca6681350ef6852a966aefdc36b58630348e070cb750dc8d7d7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.capitalMask = function(value){
    return value.toUpperCase();
}
scwin.plus = function(value){
    return Number(value)+1;
}
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:input',A:{id:'',style:'width: 144px;height: 21px;',dataType:'float',displayFormat:'##.##',maxlength:'2.10',validateOnInput:'true'}},{T:1,N:'xf:input',A:{id:'',style:'width: 144px;height: 21px;',displayFormat:'##.##[ceil]',dataType:'float'}},{T:1,N:'br'},{T:1,N:'xf:input',A:{id:'',style:'width: 144px;height: 21px;',displayFormatter:'scwin.capitalMask',dataType:'text'}},{T:1,N:'xf:input',A:{id:'',style:'width: 144px;height: 21px;',dataType:'number',displayFormatter:'scwin.plus'}}]}]}]})