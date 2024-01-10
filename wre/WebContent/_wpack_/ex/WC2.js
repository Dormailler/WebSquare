/*amd /ex/WC2.xml 4586 f827d384e837c876f9d6b904faeef83d1543e82f00188d6fc8104055cc8c75e8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	scwin.trigger1_onclick = function(e) {
    wc1.createWindow({
        title:"sub_wl",
        src:"https://www.naver.com",
        refid: "sub_w1",
        id: "sub_w1",
        windowId:"",
    });
    wc1.createWindow("윈도우2",null,"https://www.google.com");
    wc1.createWindow("윈도우3",null,"https://www.inswave.com/");
    };
    
    scwin.trigger2_onclick = function(e) {
        wc1.fixWindow('mf_wc1_subWindow0');
    };

    scwin.trigger3_onclick = function(e) {
        wc1.unfixWindow('mf_wc1_subWindow0');
    };


    scwin.trigger4_onclick = function(e) {
        wc1.createWindow({
            title:"윈도우4",
            src:"https://www.youtube.com/",
            openAction:'newWindow',
            fixed:true
            });
    };

};


scwin.trigger5_onclick = function(e) {
    var winobj = {
        title: "600X300",
        src:"window_src.xml",
        windowTitle: "600X300_title",
        windowId:"600X300_ID",
        frameMode:"wframe",
        defaultWidth:"600",
        defaultHeight:"300"
    }
    wc1.createWindow(winobj);
};

scwin.trigger6_onclick = function(e) {
    var winobj = {
        title: "200X200",
        src:"window_src.xml",
        windowTitle: "200X200_title",
        windowId:"200X200_ID",
        frameMode:"wframe",
        defaultWidth:"200",
        defaultHeight:"200"
    }
    wc1.createWindow(winobj);
};

scwin.trigger7_onclick = function(e) {
    wc1.closeOthers();
};


scwin.onminimizedbtnclick = function(info){
    alert("최소화버튼클릭/" + "src: " + info.src + "\ntitle: " + info.title + "\nwindowTitle: " + 
    info.windowTitle + "\nid: " + info.id + "\nwindowId: "  + info.windowId);
}

scwin.onrestorebtnclick = function(info){
    alert("최소화버튼클릭/" + "src: " + info.src + "\ntitle: " + info.title + "\nwindowTitle: " + 
    info.windowTitle + "\nid: " + info.id + "\nwindowId: "  + info.windowId);
}
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.w2window_selected{border:10px solid green}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:windowContainer',A:{id:'wc1',style:'position: relative;width: 700px;height: 400px;',useFixButton:'true',closeType:'noneFixedWindow',useWindowScrollButton:'true',nameLayerRearrange:'true',windowMoveType:'overflow',autoArrange:'true','ev:onminimizebtnclick':'scwin.onminimizedbtnclick','ev:onrestorebtnclick':'scwin.onrestorebtnclick'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger2',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고정'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger3',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고정 취소'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger4',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고정 생성'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger5',style:'width:141px;height:23px;','ev:onclick':'scwin.trigger5_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'크기 생성(600X300)'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger6',style:'width:126px;height:23px;','ev:onclick':'scwin.trigger6_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'크기 생성(200X200)'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger7',style:'width:135px;height:23px;','ev:onclick':'scwin.trigger7_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'closeOthers()'}]}]}]}]}]})