/*amd /page/P00255.xml 5813 fe5f79c4b2723c6efcc7ed5b2a7820a19facae9d6e5993a8234c6eb8ccecbca3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'name',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Code',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'name',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'Code',E:[{T:4,cdata:'SE'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'name',E:[{T:4,cdata:'Busan'}]},{T:1,N:'Code',E:[{T:4,cdata:'BU'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'name',E:[{T:4,cdata:'Tokyo'}]},{T:1,N:'Code',E:[{T:4,cdata:'TO'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'name',E:[{T:4,cdata:'Osaka'}]},{T:1,N:'Code',E:[{T:4,cdata:'OS'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'name',E:[{T:4,cdata:'Beijing'}]},{T:1,N:'Code',E:[{T:4,cdata:'BJ'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'name',E:[{T:4,cdata:'Shanghai'}]},{T:1,N:'Code',E:[{T:4,cdata:'SG'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'SelectBox컴포넌트의 선택 항목을 표시하는 방법에 관한 예제입니다.<br/><br/>이 기능은 아래의 속성으로 사용할 수 있습니다.<br/>- displayMode : 선택 항목의 표현 방법.<br/>- delimeter : 선택 항목 목록에 value와 label을 함께 표시할 때 사용하는 구분자.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'label 형태로 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'SelectBox컴포넌트와 바인딩되어 있는 DataList의 label 값으로 항목을 표시합니다.',style:'',displayFormat:''}},{T:1,N:'xf:select1',A:{id:'sbx_exam1',chooseOption:'',style:'width: 148px;height: 21px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'value 형태로 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'SelectBox컴포넌트와 바인딩되어 있는 DataList의 value 값으로 항목을 표시합니다.',style:'',displayFormat:''}},{T:1,N:'xf:select1',A:{id:'sbx_exam2',chooseOption:'',style:'width: 148px;height: 21px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',displayMode:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'label 구분자 value 형태로 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'SelectBox컴포넌트와 바인딩되어 있는 DataList의 label과 value 값을 label (구분자) value 형태로 표시합니다.',style:'',displayFormat:''}},{T:1,N:'xf:select1',A:{id:'sbx_exam3',chooseOption:'',style:'width: 148px;height: 21px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',displayMode:'label delim value',delimiter:' - '},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'value 구분자 label 형태로 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'SelectBox컴포넌트와 바인딩되어 있는 DataList의 label과 value 값을 value (구분자) label 형태로 표시합니다.',style:'',displayFormat:''}},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_exam4',ref:'',style:'width: 148px;height: 21px;',submenuSize:'auto',delimiter:' $$$ ',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''}}]}]}]}]}]})