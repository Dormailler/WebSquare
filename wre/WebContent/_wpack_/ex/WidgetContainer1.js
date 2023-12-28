/*amd /ex/WidgetContainer1.xml 1481 50d382b04de9ac89209ff7fcb0caafd76c8b8eaa8fe1c55b90cec813a9e44de4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	wg1.addWidgets({
        id : "w1",
        title: "위젯1",
        src: "GridView1.xml",
        scope: "true",
        x: 0,
        y: 0,
        unitHeight : 2,
        unitWidth : 1,
        hasTitleBar : true
    });
    wg1.addWidgets({
        id : "w2",
        title: "위젯2",
        src: "pageList1.xml",
        scope: "true",
        x: 0,
        y: 0,
        unitHeight : 1,
        unitWidth : 1,
        hasTitleBar : false
    });
    wg1.getWidgetById("w2").showTitle(true);
    wg1.enableWidgetTitle(false);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:widgetContainer',A:{minUnitWidth:'1',verticalMargin:'0',threshold:'null',params:'false',mode:'pushpull',style:'height: 500px;',id:'wg1',horizontalMargin:'0',cols:'8',unitHeightPixel:'200',widgetResize:'false'}}]}]}]})