/*amd /ex/Popup2.xml 1677 4b9b87b0cd1952b307f6cdbf7f09cdb0a7a3060363e8caa6e6d07bfe8803bb7f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.trigger1_onclick = function(e) {
    requires("uiplugin.popup");
    var option = {
        id:"popup1",
        tpye:"wframePopup",
        height:"300px",
        width:"300px",
        closeAction:"scwin.closeAction"
    };
    $p.openPopup("", option);
};

scwin.closeAction = function(id,info){
    if(!info.isCloseButtonClick){
        return true;
    }
    alert("클로즈엑션 실행");
    return true;
}

scwin.trigger2_onclick = function(e) {
    console.table($p.getAllPopupList());
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position:absolute; top:31px; left:39px; width:148px; height:48px; ','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'openPopup()'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger2',style:'position:absolute; top:109px; left:44px; width:127px; height:26px; ','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getAllPopupList'}]}]}]}]}]})