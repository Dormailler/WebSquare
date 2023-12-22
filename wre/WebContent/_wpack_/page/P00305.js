/*amd /page/P00305.xml 8437 6ce48abeaf7606f66471b723082b0f6252810907efa50c87ee3ac06530f70d3e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_chartData_1',repeatNode:'data',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'quarter',name:'quarter'}},{T:1,N:'w2:column',A:{dataType:'text',id:'type1',name:'type1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'type2',name:'type2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'type3',name:'type3'}}]},{T:1,N:'w2:data',A:{use:'true',xmlns:''},E:[{T:1,N:'w2:row',E:[{T:1,N:'quarter',E:[{T:4,cdata:'Q1'}]},{T:1,N:'type1',E:[{T:4,cdata:'11500'}]},{T:1,N:'type2',E:[{T:4,cdata:'28110'}]},{T:1,N:'type3',E:[{T:4,cdata:'23990'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'quarter',E:[{T:4,cdata:'Q2'}]},{T:1,N:'type1',E:[{T:4,cdata:'1500'}]},{T:1,N:'type2',E:[{T:4,cdata:'10600'}]},{T:1,N:'type3',E:[{T:4,cdata:'10000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'quarter',E:[{T:4,cdata:'Q3'}]},{T:1,N:'type1',E:[{T:4,cdata:'27400'}]},{T:1,N:'type2',E:[{T:4,cdata:'31800'}]},{T:1,N:'type3',E:[{T:4,cdata:'42800'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'quarter',E:[{T:4,cdata:'Q4'}]},{T:1,N:'type1',E:[{T:4,cdata:'27400'}]},{T:1,N:'type2',E:[{T:4,cdata:'22900'}]},{T:1,N:'type3',E:[{T:4,cdata:'20800'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_chartType',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chart_name',name:'chart_name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chart_value',name:'chart_value',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Multi-series Column 2D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'mscolumn2d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Multi-series Column 3D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'mscolumn3d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Multi-series Line 2D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'msline'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Multi-series Bar 2D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'msbar2d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Multi-series Bar 3D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'msbar3d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Overlapped Column 2D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'overlappedcolumn2d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Overlapped Bar 2D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'overlappedbar2d'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Multi-series Area 2D'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'msarea'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Marimekko'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'marimekko'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Zoom Line'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'zoomline'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'chart_name',E:[{T:4,cdata:'Zoom Line DY'}]},{T:1,N:'chart_value',E:[{T:4,cdata:'zoomlinedy'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    // Fusionchart 'cht_exam1'의 초기 속성을 설정합니다.
    cht_exam1.setChartAttribute({
        "caption": rad_chartType1.getText(), // radio에 선택된 text를 차트의 caption으로 지정.
        "canvasTopPadding": 6,
        "canvasRightMargin": 10,
        "canvasLeftPadding": 6,
        "canvasRightPadding": 6,
        "chartBottomMargin": 16
    });

    // Fusionchart 'cht_exam1'의 Plot 배경색을 지정합니다.
    cht_exam1.setPlotColor(["#2ec6c8", "#FFD700", "#5ab0ee", "#f4984e", "#d77a80", "#90bddc", "#fe5d55", "#b5dc59", "#9ea7b3", "#00ba84", "#878bb6", "#757a85"]);

    // 지정한 속성을 바탕으로 브라우저에 그립니다.
    cht_exam1.draw();
};

/**
 * 차트 타입이 구성된 Radio 'rad_chartType1'의 이벤트 'onviewchange' 핸들러
 */
scwin.rad_chartType1_onviewchange = function (info) {
    // Fusionchart 'cht_exam1'의 속성을 설정합니다.
    // radio에 선택된 text를 차트의 caption으로 지정.
    cht_exam1.setChartAttribute({
        "caption": this.getText()
    });

    // Fusionchart 'cht_exam1'의 차트 타입을 변경합니다.
    cht_exam1.changeType(info.value);
    
    // Fucionchart의 속성 'seriesColumns' 예시) [['type1','type2','type3']]
    // 'Multi Series' 타입 변경 예시)

    // Fusionchart 'cht_exam1'의 차트 타입을 'Multi-series Column 2D'로 변경합니다.
    // cht_exam1.changeType('mscolumn2d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Multi-series Column 3D'로 변경합니다.
    // cht_exam1.changeType('mscolumn3d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Multi-series Line 2D'로 변경합니다.
    // cht_exam1.changeType('msline');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Multi-series Bar 2D'로 변경합니다.
    // cht_exam1.changeType('msbar2d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Multi-series Bar 3D'로 변경합니다.
    // cht_exam1.changeType('msbar3d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Overlapped Column 2D'로 변경합니다.
    // cht_exam1.changeType('overlappedcolumn2d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Overlapped Bar 2D'로 변경합니다.
    // cht_exam1.changeType('overlappedbar2d');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Multi-series Area 2D'로 변경합니다.
    // cht_exam1.changeType('msarea');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Marimekko'로 변경합니다.
    // cht_exam1.changeType('marimekko');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Zoom Line'으로 변경합니다.
    // cht_exam1.changeType('zoomline');

    // Fusionchart 'cht_exam1'의 차트 타입을 'Zoom Line DY'로 변경합니다.
    // cht_exam1.changeType('zoomlinedy');

};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Fusionchart의 \'Multi Series\' 타입을 확인할 수 있는 예제입니다.<br/>화면에 구성된 항목를 선택하여 차트의 타입을 변경할 수 있습니다.<br/>동일한 시리즈의 차트 타입은 함수 \'changeType\'으로 변경할 수 있습니다..',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제의 Fusion Chart 버전은 3.19입니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'FusionChart의 타입 목록 : <a href="https://www.fusioncharts.com/dev/chart-guide/list-of-charts/" target="_blank">https://www.fusioncharts.com/dev/chart-guide/list-of-charts/</a>',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Multi Series Charts',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:select1',A:{id:'rad_chartType1',selectedIndex:'0',appearance:'full',style:'min-height: 26px;',rows:'',ref:'','ev:onviewchange':'scwin.rad_chartType1_onviewchange',renderType:'radiogroup',class:'w_per_100',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_chartType'},E:[{T:1,N:'xf:label',A:{ref:'chart_name'}},{T:1,N:'xf:value',A:{ref:'chart_value'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom'},E:[{T:1,N:'w2:fusionchart',A:{chartType:'MSColumn2D',drawType:'javascript',id:'cht_exam1',labelNode:'quarter',ref:'data:dlt_chartData_1',seriesColumns:'[[\'type1\',\'type2\',\'type3\']]',style:'height: 300px;min-width:200px;',version:'3.19'}}]}]}]}]}]}]}]}]})