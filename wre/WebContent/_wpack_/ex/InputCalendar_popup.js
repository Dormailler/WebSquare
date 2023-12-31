/*amd /ex/InputCalendar_popup.xml 2646 80221ffc1279288dc3b114b63db0e0c07a4b2ed1c421916f2b9c3d8ca3554c4c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.trigger1_onclick = function(e) {
    var date = in1.getValue();
    ic1.disableBeforeDate(date)
};

scwin.trigger2_onclick = function(e) {
    var date = in1.getValue();
    ic1.disableAfterDate(date)
};
scwin.ic1_invalidMessageFunc = function(){
    var opt = {
        "id":"popup2",
        "type":"browserPopup", // wframePopup
        "width":"440px",
        "height":"90px",
        "top":100,
        "left":300,
        "popupName":"데이트 유효성 에러",
        "modal":true,
        "title":"데이트 유효성 에러",
        "dataObject":{
            "type":"string",
            "date":this.callerId,
            "name":"callerId"
        }
    };
    $p.openPopup("messagePopup.xml", opt);
    ic1.setValueCancel();

}

scwin.fn_msg = function(){
    var msg = "";
     var invalidType = this.getType();  
     if (invalidType == "mandatory") {
         msg = "Enter a date. 날짜를 입력하세요. ";
    } else {
         msg = "Invalid date. 날짜 형식을 확인하세요.";
     }
     alert(msg); 
 };
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:input',A:{id:'in1',style:'width:175px;height:21px;'}},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'width:166px;height:23px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'disableBeforeDate'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger2',style:'width:164px;height:23px;','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'disableAfterDate'}]}]},{T:1,N:'w2:inputCalendar',A:{id:'ic1',style:'position:absolute;top:22px;left:0px;width:150px;height:23px;',calendarValueType:'yearMonthDate',dateValidCheck:'true',dateValidSet:'true',dateValidSetCustom:'true',validCheck:'true',invalidMessageFunc:'scwin.ic1_invalidMessageFunc',displaymessage:'true'}},{T:1,N:'w2:inputCalendar',A:{id:'',style:'position:absolute; top:52px; left:0px; width:150px; height:23px; ',calendarValueType:'yearMonthDate'}}]}]}]})