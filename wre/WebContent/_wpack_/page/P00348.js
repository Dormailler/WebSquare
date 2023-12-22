/*amd /page/P00348.xml 6803 762025fe38e1171265267a1086f63dae8d1f5864a52029e59c54f6035614d7ea */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_exam1',repeatNode:'data',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'depth',name:'depth'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'label'}},{T:1,N:'w2:column',A:{dataType:'text',id:'value',name:'value'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fileName',name:'fileName'}}]},{T:1,N:'w2:data',A:{use:'true',xmlns:''},E:[{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'1'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1 (좌측 버튼 클릭)'}]},{T:1,N:'value',E:[{T:4,cdata:'menu1'}]},{T:1,N:'fileName',E:[{T:4,cdata:'menu1.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'2'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1-1'}]},{T:1,N:'value',E:[{T:4,cdata:'menu1-1'}]},{T:1,N:'fileName',E:[{T:4,cdata:'menu1-1.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'2'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1-2 (좌측 버튼 클릭)'}]},{T:1,N:'value',E:[{T:4,cdata:'menu1-2'}]},{T:1,N:'fileName',E:[{T:4,cdata:'menu1-2.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'3'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1-2-1'}]},{T:1,N:'value',E:[{T:4,cdata:'menu1-2-1'}]},{T:1,N:'fileName',E:[{T:4,cdata:'menu1-2-1.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'2'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1-3'}]},{T:1,N:'value',E:[{T:4,cdata:'menu1-3'}]},{T:1,N:'fileName',E:[{T:4,cdata:'menu1-3.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'1'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴2 (좌측 버튼 클릭)'}]},{T:1,N:'value',E:[{T:4,cdata:'menu2'}]},{T:1,N:'fileName',E:[{T:4,cdata:'menu2.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'2'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴2-1'}]},{T:1,N:'value',E:[{T:4,cdata:'menu2-1'}]},{T:1,N:'fileName',E:[{T:4,cdata:'menu2-1.xml'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * GridView 'grd_exam1'의 'oncellclick' 이벤트 발생 시
 */
scwin.grd_exam1_oncellclick = function (row, col, colId) {
    alert("이벤트 oncellclick 발생");
};

/**
 * GridView 'grd_exam2'의 'oncellclick' 이벤트 발생 시
 */
scwin.grd_exam2_oncellclick = function (row, col, colId) {
    alert("이벤트 oncellclick 발생");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{escape:'false',label:'GridView의 속성 \'ignoreCellClick\' 설정 비교 예제입니다.<br/>이 속성은 컬럼의 속성 \'inputType\'의 설정 값이 \'drilldown\'인 셀에 표시된 \'확장/축소\' 버튼이 클릭되었을 때 동작합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',label:'속성의 설정 값에 따른 동작은 다음과 같습니다.<br/>- true : GridView의 이벤트 \'oncellclick\'가 발생하지 않음.<br/>- false : (기본 값) GridView의 이벤트 \'oncellclick\'가 발생함.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',label:'각 GridView에는 이벤트 \'oncellclick\' 핸들러가 설정되어 있습니다. 셀을 클릭하면 핸들러에서 브라우저 \'alert\'으로 문자열 \'이벤트 oncellclick 발생\'을 출력합니다.',style:'',class:'ws_example_txt_desc_info'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',label:'(기본 설정) 버튼 \'확장/축소\'를 클릭하면 이벤트 \'oncellclick\' 발생'}},{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'250',class:'gvw',dataList:'dlt_exam1',defaultCellHeight:'26','ev:oncellclick':'scwin.grd_exam1_oncellclick',id:'grd_exam1',readOnly:'true',style:'height: 150px;',tooltipDisplay:'true',visibleRowNum:'all',ignoreCellClick:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1'},E:[{T:1,N:'w2:row',A:{id:'row1'},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',value:'drilldown',width:'170'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',value:'fileName',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1'},E:[{T:1,N:'w2:row',A:{id:'row2'},E:[{T:1,N:'w2:column',A:{blockSelect:'false',depthColumn:'depth',displayMode:'label',id:'label',inputType:'drilldown',showDepth:'2',textAlign:'left',width:'170',value:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'fileName',inputType:'text',textAlign:'left',width:'100'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',label:'버튼 \'확장/축소\'를 클릭하면 이벤트 \'oncellclick\' 미발생'}},{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'250',class:'gvw',dataList:'dlt_exam1',defaultCellHeight:'26','ev:oncellclick':'scwin.grd_exam2_oncellclick',id:'grd_exam2',ignoreCellClick:'true',readOnly:'true',style:'height: 150px;',tooltipDisplay:'true',visibleRowNum:'all'},E:[{T:1,N:'w2:caption',A:{id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1'},E:[{T:1,N:'w2:row',A:{id:'row1'},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',value:'drilldown',width:'170'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',value:'fileName',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1'},E:[{T:1,N:'w2:row',A:{id:'row2'},E:[{T:1,N:'w2:column',A:{blockSelect:'false',depthColumn:'depth',displayMode:'label',id:'label',inputType:'drilldown',showDepth:'2',textAlign:'left',width:'170',value:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'fileName',inputType:'text',textAlign:'left',width:'100'}}]}]}]}]}]}]}]}]}]}]}]})