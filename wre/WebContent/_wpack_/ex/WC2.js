/*amd /ex/WC2.xml 2591 7796079cbb2a581e85ad80c1a5d70aa7b673cd500c311b6011d3d5dbf475cf9e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	scwin.trigger1_onclick = function(e) {
    wc1.createWindow({
        title:"sub_wl",
        src:"https://www.naver.com",
        refid: "sub_w1",
        id: "sub_w1",
        windowId:""
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


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:windowContainer',A:{id:'wc1',style:'position: relative;width: 500px;height: 300px;',useFixButton:'true',closeType:'noneFixedWindow'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger2',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고정'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger3',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고정 취소'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger4',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고정 생성'}]}]}]}]}]})