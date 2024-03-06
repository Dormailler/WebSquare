/*amd /ex/mapChart1.xml 1958 35ff723bc0199c6a3e7d516ffbfe348b4632caed92e6e3cd9cc2eb968f0ca74e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.select11_onviewchange = function(info) {
    mapchart1.dataMapPath = "/Data/" + info.newValue;
    mapchart1.changeMapPath(mapchart1.dataMapPath);
};

scwin.ma = function(name,code){
    return "<br>완료 0," + "<br>진행중 0," + "<br>일정 0";
}
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:select1',A:{id:'select11',chooseOption:'true',style:'width: 148px;height: 21px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',chooseOptionLabel:'연도 선택','ev:onviewchange':'scwin.select11_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2009'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2009'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2010'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2011'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2011'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2012'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2012'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2013'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2013'}]}]}]}]},{T:1,N:'w2:mapchart',A:{style:'height: 500px;',id:'mapchart1',useMarker:'true',contextFormatter:'scwin.ma'}}]}]}]})