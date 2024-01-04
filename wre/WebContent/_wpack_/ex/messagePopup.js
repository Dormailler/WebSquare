/*amd /ex/messagePopup.xml 1256 3dd4248c3b3fb13437ec66040ac303568bce927ecc98961cfd0cb6c6cf805d85 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	scwin.callerId = $p.getParameter("callerId");
};
scwin.onpageload = function() {
    var comp = $p.getComponentById(scwin.callerId);
    // 현재 안됨..
    if(comp && typeof comp.setValueCancel === "function"){
        comp.setValueCancel();
    }

};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'날짜가 잘못되었습니다.',style:'width:319px;height:120px;font:30px;background: red;color:white;font-size-adjust:3;font-weight:100;',tagname:'h1'}},{T:1,N:'w2:wframe',A:{style:'width: 500px;height: 300px;',id:'',src:'/ex/popup.xml'}}]}]}]})