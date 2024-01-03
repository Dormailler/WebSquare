/*amd /ex/Submission.xml 3112 0179ea855a3ab3ec85e184be96194fce44cf88d2459ce3e1c40702f8dcd69bab */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'a',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'b',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',ref:'',target:'data:json,dataList1',action:'data.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'서브미션 진행중...','ev:submit':'scwin.submission1_submit','ev:submitdone':'scwin.submission1_submitdone','ev:submiterror':'scwin.submission1_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.submission1_submit = function(e) {
    //서브밋 직전 실행
    alert("서브미션 시작!");
};

scwin.submission1_submitdone = function(e) {
    //서브밋 성공
    alert("서브미션 성공!");
};  

scwin.submission1_submiterror = function(e) {
    //서브밋 에러
    alert("서브미션 실패!");
};

scwin.trigger1_onclick = function(e) {
    $p.executeSubmission("submission1");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'',style:'width: 500px;height: 150px;',dataList:'data:dataList1'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header3'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column10',value:'name2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'name3',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody3'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'a',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'b',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'c',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'width:109px;height:52px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'submission1'}]}]}]}]}]})