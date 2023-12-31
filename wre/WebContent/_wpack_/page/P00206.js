/*amd /page/P00206.xml 6208 b58ef0d1dade258e9b1cc90b47ce41aa6e0327a9ed6e8639e00f5ac42d1bd743 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'price',name:'정가'}},{T:1,N:'w2:column',A:{id:'published_date',name:'출간일',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'사람일까 상황일까'}]},{T:1,N:'price',E:[{T:4,cdata:'28000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20190826'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'내가 틀릴 수도 있습니다'}]},{T:1,N:'price',E:[{T:4,cdata:'16000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20220418'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'무엇이 옳은가'}]},{T:1,N:'price',E:[{T:4,cdata:'17800'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20220419'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'공정하다는 착각'}]},{T:1,N:'price',E:[{T:4,cdata:'18000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20201201'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'책들의 부엌'}]},{T:1,N:'price',E:[{T:4,cdata:'14500'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20220512'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'불편한 편의점'}]},{T:1,N:'price',E:[{T:4,cdata:'14000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20210420'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [2번째 행을 숨김 지정하기] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    //GridView 'grd_exam1'의 2번째 행을 숨김 지정하기
    grd_exam1.setRowVisible(1, false);
};

/**
 * 버튼 [2번째 행을 표시하기] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    //GridView 'grd_exam1'의 2번째 행을 표시하기
    grd_exam1.setRowVisible(1, true);
};

/**
 * 버튼 [1번째, 3번째 행을 숨기기] 클릭 시
 */
scwin.btn_ex3_onclick = function (e) {
    //GridView 'grd_exam1'의 1번째, 3번째 행을 숨기기
    grd_exam1.setRowVisible(0, false);
    grd_exam1.setRowVisible(2, false);
};

/**
 * 버튼 [숨긴 행 모두 취소하기] 클릭 시
 */
scwin.btn_ex4_onclick = function (e) {
    //GridView 'grd_exam1'의 숨긴 행 모두 취소하기
    grd_exam1.clearRowVisible();
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 특정 행의 숨김 여부을 지정하는 예제입니다.<br/>이 기능은 아래의 함수를 호출하여 사용할 수 있습니다.<br/>- setRowVisible : 특정 행의 숨김 여부 설정<br/>- clearRowVisible : 숨김 처리한 행을 모두 표시',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'특정 행의 숨김 여부 지정하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2번째 행을 숨김 지정하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false',id:'btn_ex2',style:'',type:'button','ev:onclick':'scwin.btn_ex2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2번째 행을 표시하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1번째, 3번째 행을 숨기기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex4_onclick',id:'btn_ex4',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'숨긴 행 모두 취소하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'240',class:'gvw',dataList:'data:dlt_books',defaultCellHeight:'26',id:'grd_exam1',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true',rowNumVisible:'true',rowNumWidth:'26',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'178'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'정가',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'출간일',width:'83'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',width:'178'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'price',inputType:'text',textAlign:'right',width:'63'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'published_date',inputType:'text',width:'83'}}]}]}]}]}]}]}]}]}]}]})