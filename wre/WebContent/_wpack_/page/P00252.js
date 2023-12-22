/*amd /page/P00252.xml 6921 2e73b0de5b83b3d962186c26e7e3a3eaea3f743de0810dc649755e08f5a73a44 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'City',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Code',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'Code',E:[{T:4,cdata:'SE'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Paris'}]},{T:1,N:'Code',E:[{T:4,cdata:'PA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'London'}]},{T:1,N:'Code',E:[{T:4,cdata:'LN'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Beijing'}]},{T:1,N:'Code',E:[{T:4,cdata:'BJ'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Tokyo'}]},{T:1,N:'Code',E:[{T:4,cdata:'TK'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [DataList를 SelectBox컴포넌트에 연결하기] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    // SelectBox 'sbx_exam2'에 DataList 'dlt_dataList1'을 연결합니다.
    sbx_exam2.setNodeSet("data:dlt_dataList1", "City", "Code");
};

/**
 * 버튼 [목록 추가하기] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    // SelectBox 'sbx_exam4'의 표시목록을 추가합니다.
    sbx_exam4.addItem("NY", "NewYork", "5");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'WebSquare 스튜디오에서 DataList 작성법과 SelectBox컴포넌트에 DataList를 연결하여 선택 항목을 설정하는 예제입니다.<br/><br/>이 기능은 아래의 속성과 함수로 사용할 수 있습니다.<br/>- appearance : (속성)선택항목 표현방식<br/>- setNodeSet : (함수)SelectBox컴포넌트에 DataList 바인딩<br/>- addItem : (함수)선택 항목을 추가. index를 지정하지 않으면 하위로 추가됨.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'SelectBox컴포넌트에 DataList 연결하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'SelectBox컴포넌트에 만들어 둔 DataList가 연결된 것을 확인한다.',style:'',displayFormat:''}},{T:1,N:'w2:textbox',A:{class:'txt_info_important',escape:'false',id:'',label:'※ WebSquare툴 내부 조작으로 DataList생성 및 SelectBox컴포넌트와 DataList의 연결하는 법은 가이드를 같이 참고해주시기를 바랍니다.',style:'margin-bottom: 10px;'}},{T:1,N:'xf:select1',A:{id:'sbx_exam1',chooseOption:'',style:'width: 148px;height: 21px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'setNodeSet 함수를 이용한 DataList와 SelectBox컴포넌트 연결하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 버튼을 눌러 준비해둔 DataList를 SelectBox컴포넌트에 연결합니다.',style:'',displayFormat:''}},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DataList를 SelectBox컴포넌트에 연결하기'}]}]}]},{T:1,N:'xf:select1',A:{id:'sbx_exam2',chooseOption:'false',style:'width: 148px;height: 21px;',submenuSize:'auto',allOption:'false',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled'}}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'하드코딩으로 연결하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'소스에 정보를 추가하여 연결할 수 있습니다.',style:'',displayFormat:''}},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'}},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_exam3',style:'width: 148px;height: 21px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'addItem 함수를 이용한 목록 추가하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 버튼을 클릭 시 SelectBox컴포넌트 표시항목에 \'NewYork\'이 추가됩니다.',style:'',displayFormat:''}},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'목록 추가하기'}]}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_exam4',style:'width: 148px;height: 21px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''}}]}]}]}]}]})