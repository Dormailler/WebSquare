/*amd /test.xml 2411 631b8d6d17a3ad305c4932341ab3bdc06d886e8e4a6f11a23f04cde7cfca7069 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'a',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'id',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'a',id:'b'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'code=="001"'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'',action:'',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',src:'/js/eduCommon.js'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	ipt1.setValue("123456789");
};

scwin.btnSelect_onclick = function(e) {
    alert("1");
};

scwin.btnSelect_onfocus = function(e) {

};

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.aa{background-color:green}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:input',A:{id:'',style:'width:186px;height:44px;background-color: yellow;',placeholder:'성만 넣어주세요'}},{T:1,N:'xf:input',A:{id:'',style:'width:162px;height:42px;',initValue:'123456789',dataType:'number',displayFormat:'#,###',applyFormat:'all',class:'aa'}},{T:1,N:'xf:trigger',A:{type:'button',id:'btnSelect',style:'width:104px;height:42px;','ev:onclick':'scwin.btnSelect_onclick','ev:onfocus':'scwin.btnSelect_onfocus'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:input',A:{id:'ipt1',style:'width:163px;height:41px;',class:'dbgct'}},{T:1,N:'w2:calendar',A:{id:'',style:'width: 200px;height: 200px;'}}]}]}]})