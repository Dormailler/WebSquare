/*amd /page/P00349.xml 6695 aba11e1caaf35789b365ac3d72ea70d6b2373bec5e35724c692746a152e54dfb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_exam1',repeatNode:'data',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'depth',name:'depth'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'label'}},{T:1,N:'w2:column',A:{dataType:'text',id:'value',name:'value'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fileName',name:'fileName'}}]},{T:1,N:'w2:data',A:{use:'true',xmlns:''},E:[{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'1'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1'}]},{T:1,N:'value',E:[{T:4,cdata:'menu1'}]},{T:1,N:'fileName',E:[{T:4,cdata:'menu1.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'2'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1-1 (좌측 버튼 클릭)'}]},{T:1,N:'value',E:[{T:4,cdata:'menu1-1'}]},{T:1,N:'fileName',E:[{T:4,cdata:'menu1-1.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'value',E:[{T:4,cdata:'menu1-1-1'}]},{T:1,N:'depth',E:[{T:4,cdata:'3'}]},{T:1,N:'fileName',E:[{T:4,cdata:'menu1-1-1.xml'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1-1-1'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'2'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1-2'}]},{T:1,N:'value',E:[{T:4,cdata:'menu1-2'}]},{T:1,N:'fileName',E:[{T:4,cdata:'menu1-2.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'3'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴1-2-1'}]},{T:1,N:'value',E:[{T:4,cdata:'menu1-2-1'}]},{T:1,N:'fileName',E:[{T:4,cdata:'menu1-2-1.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'1'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴2'}]},{T:1,N:'value',E:[{T:4,cdata:'menu2'}]},{T:1,N:'fileName',E:[{T:4,cdata:'menu2.xml'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'depth',E:[{T:4,cdata:'2'}]},{T:1,N:'label',E:[{T:4,cdata:'메뉴2-1'}]},{T:1,N:'value',E:[{T:4,cdata:'menu2-1'}]},{T:1,N:'fileName',E:[{T:4,cdata:'menu2-1.xml'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // 예제 테스트를 위한 설정
    // GridView 'grd_exam1', 'grd_exam2'의 1번째 행을 비활성화.
    grd_exam1.setRowDisabled(1, true);
    grd_exam2.setRowDisabled(1, true);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{escape:'false',label:'GridView의 속성 \'ignoreToggleOnDisabled\' 설정 비교 예제입니다.<br/>이 속성은 컬럼의 속성 \'inputType\'의 설정 값이 \'drilldown\'인 셀에 \'disabled\'이 적용되고, 해당 셀에 표시된 \'확장/축소\' 버튼이 클릭되었을 때 동작합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',label:'속성의 설정 값에 따른 동작은 다음과 같습니다.<br/>- true : 셀이 비활성화되면 확장, 축소 기능이 동작하지 않습니다. 셀의 비활성화 여부에 따라 기능이 적용됩니다.<br/>- false : (기본 값) 셀의 비활성화 여부와 상관없이 확장, 축소 기능이 항상 동작합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',label:'비활성화된 셀의 글자색이 회색(#bbb)으로 표시됩니다.',style:'',class:'ws_example_txt_desc_info'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',label:'(기본 설정) 셀의 \'disabeld\' 적용 여부와 상관없이 버튼 \'확장/축소\'의 기능 활성화'}},{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:gridView',A:{ignoreToggleOnDisabled:'false',autoFit:'lastColumn',autoFitMinWidth:'250',class:'gvw',dataList:'dlt_exam1',defaultCellHeight:'26',id:'grd_exam1',readOnly:'true',style:'height: 150px;',tooltipDisplay:'true',visibleRowNum:'all',rowMouseOver:'false',focusMode:'none',disabledFontColor:'#bbb'},E:[{T:1,N:'w2:caption',A:{id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1'},E:[{T:1,N:'w2:row',A:{id:'row1'},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',value:'drilldown',width:'170'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',value:'fileName',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1'},E:[{T:1,N:'w2:row',A:{id:'row2'},E:[{T:1,N:'w2:column',A:{blockSelect:'false',depthColumn:'depth',displayMode:'label',id:'label',inputType:'drilldown',showDepth:'3',textAlign:'left',width:'170',value:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'fileName',inputType:'text',textAlign:'left',width:'100'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style'},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',label:'셀에 \'disabeld\'이 적용되면 버튼 \'확장/축소\'의 기능 비활성화'}},{T:1,N:'xf:group',A:{class:'example_div_td_style'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'w2:gridView',A:{ignoreToggleOnDisabled:'true',autoFit:'lastColumn',autoFitMinWidth:'250',class:'gvw',dataList:'dlt_exam1',defaultCellHeight:'26',id:'grd_exam2',readOnly:'true',style:'height: 150px;',tooltipDisplay:'true',visibleRowNum:'all',rowMouseOver:'false',focusMode:'none',disabledFontColor:'#bbb'},E:[{T:1,N:'w2:caption',A:{id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1'},E:[{T:1,N:'w2:row',A:{id:'row1'},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',value:'drilldown',width:'170'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',value:'fileName',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1'},E:[{T:1,N:'w2:row',A:{id:'row2'},E:[{T:1,N:'w2:column',A:{blockSelect:'false',depthColumn:'depth',displayMode:'label',id:'label',inputType:'drilldown',showDepth:'3',textAlign:'left',width:'170',value:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'fileName',inputType:'text',textAlign:'left',width:'100'}}]}]}]}]}]}]}]}]}]}]}]})