/*amd /ex/Calendar2.xml 2371 ca46aed65f6e52627190f2085eec4bcbc8cdd7cdf2444e29accb1381bcc96bd9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',A:{palette:''},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'20240112'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'20240111'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'*0113'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * @component
 * @company 
 * @developer gerre
 * @variableClone true
 * @notSupportBrowser 
 * @version 
 * @htmlRender 
 * @icon 
 * @disableIcon 
 * @width 
 * @height 
 * @description 
 */ 

/**
 * @property
 * @name style
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @bindparent 
 * @description desc
 */ 

/**
 * @property
 * @name class
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @bindparent 
 * @description desc
 */ 

/**
 * @property
 * @name id
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @bindparent 
 * @description desc
 */ 

scwin.onpageload = function() {
	
};

scwin.trigger1_onclick = function(e) {
    c1.setHolidayRef("data:dataList1.col1");
};

scwin.c1_onmonthselect = function(info) {
    alert(info.oldValue);
};
 

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:calendar',A:{id:'c1',style:'position:absolute; top:85px; left:86px; width:246px; height:237px; ','ev:onmonthselect':'scwin.c1_onmonthselect'}},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position:absolute;top:342px;left:90px;width:120px;height:47px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'setHolidayRef()'}]}]}]}]}]})