/*amd /page/P00265.xml 6392 f55dc49d2d63a72e59c98f5f7139b81bf83c1718c23c9258e64417e12833c643 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'country',name:'country',dataType:'text'}},{T:1,N:'w2:column',A:{id:'city',name:'city',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'country',E:[{T:4,cdata:'Korea'}]},{T:1,N:'city',E:[{T:4,cdata:'Seoul'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'country',E:[{T:4,cdata:'China'}]},{T:1,N:'city',E:[{T:4,cdata:'Beijing'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'country',E:[{T:4,cdata:'Vietnam'}]},{T:1,N:'city',E:[{T:4,cdata:'Hanoi'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'country',E:[{T:4,cdata:'Russian'}]},{T:1,N:'city',E:[{T:4,cdata:'Vladivostok'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'country',E:[{T:4,cdata:'The Netherlands'}]},{T:1,N:'city',E:[{T:4,cdata:'Amsterdam'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'country',E:[{T:4,cdata:'Indonesia'}]},{T:1,N:'city',E:[{T:4,cdata:'Jakarta'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'style',E:[{T:3,text:'\n			table {\n			table-layout:fixed;\n			}\n\n			table td {\n			overflow: hidden;\n			text-overflow: ellipsis;\n			}\n		'}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * tooltipFormatter속성에 설정할 사용자 정의 함수
 */
scwin.tooltip = function (label, index) {
    let data = dataList1.getDataRow(index);
    let value = data.country;

    // 커서가 오버되어 있는 항목에 라벨 + 나라명으로 툴팁을 표시합니다.
    return label + ", " + value;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'CheckBox컴포넌트의 각 선택 항목에 label 값 혹은 사용자 지정값을 툴팁으로 표시하는 방법을 설정하는 예제입니다.<br/><br/>이 기능은 아래의 속성으로 사용할 수 있습니다.<br/>- tooltipDisplay : (속성)사용자가 선택한 값에 대한 툴팁 표시 여부.<br/>- tooltipShowAlways: (속성)텍스트 길이에 상관 없이 마우스 오버시 툴팁을 항상 표시할 것인지의 여부.<br/>- tooltipFormatter: (속성)tooltipDisplay="true"인 경우, 툴팁 내용을 변경할 사용자 함수명.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'툴팁 속성 미적용',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',displayFormat:'',escape:'false',id:'',label:'각 선택 항목에 마우스 오버 시 툴팁이 표시되지 않는 것을 확인합니다.',style:''}},{T:1,N:'xf:select',A:{appearance:'full',cols:'',id:'cbx_exam1',ref:'',rows:'',selectedindex:'-1',style:'width:130px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'city'}},{T:1,N:'xf:value',A:{ref:'country'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'라벨이 짤려있는 선택 항목 툴팁 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',displayFormat:'',escape:'false',id:'',label:'각 선택 항목에 라벨이 짤려있는 경우, 마우스 오버 시 툴팁이 표시되는 것을 확인합니다.',style:''}},{T:1,N:'xf:select',A:{appearance:'full',cols:'2',id:'cbx_exam2',ref:'',rows:'',selectedindex:'-1',style:'width:150px;text-overflow:ellipsis;white-space:nowrap;',tooltipDisplay:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'city'}},{T:1,N:'xf:value',A:{ref:'country'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'모든 선택 항목 툴팁 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',displayFormat:'',escape:'false',id:'',label:'모든 선택 항목에서 툴팁이 표시되는 것을 확인합니다.',style:''}},{T:1,N:'xf:select',A:{appearance:'full',cols:'',id:'cbx_exam3',ref:'',rows:'',selectedindex:'-1',style:'width: 170px;min-width: 80px;min-height: 21px;',tooltipDisplay:'true',tooltipShowAlways:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'city'}},{T:1,N:'xf:value',A:{ref:'country'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'사용자 함수를 사용하여 툴팁 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',displayFormat:'',escape:'false',id:'',label:'사용자 함수에 정의한 반환 값이 툴팁으로 표시되는 것을 확인합니다.',style:''}},{T:1,N:'xf:select',A:{appearance:'full',cols:'',id:'cbx_exam4',ref:'',rows:'',selectedindex:'-1',style:'width:130px;',tooltipDisplay:'true',tooltipShowAlways:'true',tooltipFormatter:'scwin.tooltip',tooltipItemLabel:'tooltip'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dataList1'},E:[{T:1,N:'xf:label',A:{ref:'city'}},{T:1,N:'xf:value',A:{ref:'country'}}]}]}]}]}]}]}]}]}]}]}]})