/*amd /page/P00190.xml 14349 5ab974e59319460a470382d02898daa7ff5b04562a87faf7327f387c4106fc5b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'price',name:'정가'}},{T:1,N:'w2:column',A:{id:'published_date',name:'출간일',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'사람일까 상황일까'}]},{T:1,N:'price',E:[{T:4,cdata:'28000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20190826'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'내가 틀릴 수도 있습니다'}]},{T:1,N:'price',E:[{T:4,cdata:'16000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20220418'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'공정하다는 착각'}]},{T:1,N:'price',E:[{T:4,cdata:'18000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20201201'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'정글만리'}]},{T:1,N:'price',E:[{T:4,cdata:'16500'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20130701'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'불편한 편의점'}]},{T:1,N:'price',E:[{T:4,cdata:'14000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20210420'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};


/**
 * 버튼 [GridVeiw 비활성화 하기] 클릭 시
 */
scwin.btn_ex1_1_onclick = function (e) {
    //GridView 비활성화
    grd_exam1.setDisabled("grid", true);
};

/**
 * 버튼 [GridVeiw 활성화 하기] 클릭 시
 */
scwin.btn_ex1_2_onclick = function (e) {
    //GridView 비활성화
    grd_exam1.setDisabled("grid", false);
};

/**
 * 버튼 [컬럼 '도서명'의 2번째 행의 셀을 비활성화 하기] 클릭 시
 */
scwin.btn_ex2_1_onclick = function (e) {
    //GridView 'grd_exam2'의 컬럼 '도서명'의 2번째 행의 셀을 비활성화 하기
    grd_exam2.setDisabled("cell", 1, "book_name", true);
};

/**
 * 버튼 [컬럼 '도서명'의 2번째 행의 셀을 활성화 하기] 클릭 시
 */
scwin.btn_ex2_2_onclick = function (e) {
    //GridView 'grd_exam2'의 컬럼 '도서명'의 2번째 행의 셀을 활성화 하기
    grd_exam2.setDisabled("cell", 1, "book_name", false);
};

/**
 * 버튼 [컬럼 '정가'를 비활성화 하기] 클릭 시
 */
scwin.btn_ex3_1_onclick = function (e) {
    //GridView 'grd_exam3'의 컬럼 '정가'를 비활성화 하기
    grd_exam3.setDisabled("column", "price", true);
};

/**
 * 버튼 [컬럼 '정가'를 활성화 하기] 클릭 시
 */
scwin.btn_ex3_2_onclick = function (e) {
    //GridView 'grd_exam3'의 컬럼 '정가'를 활성화 하기
    grd_exam3.setDisabled("column", "price", false);
};

/**
 * 버튼 [1번째 행을 비활성화 하기] 클릭 시
 */
scwin.btn_ex4_1_onclick = function (e) {
    //GridView 'grd_exam4'의 1번째 행을 비활성화 하기
    grd_exam4.setDisabled("row", 0, true);
};

/**
 * 버튼 [1번째 행을 활성화 하기] 클릭 시
 */
scwin.btn_ex4_2_onclick = function (e) {
    //GridView 'grd_exam4'의 1번째 행을 활성화 하기
    grd_exam4.setDisabled("row", 0, false);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 비활성화 여부를 지정하는 예제입니다.<br/>GirdView, Column, Row, Cell 단위로 지정할 수 있습니다.<br/>이 기능은 GridView의 함수 setDisabled 호출하여 사용할 수 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'GridView 비활성화 여부 지정하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 버튼을 클릭하고 GridView 셀의 비활성화 여부를 확인합니다.<br/>비활성화가 적용되면 셀이 수정 모드로 변경되지 않습니다.<br/>이 GridView는 비활성화가 되었을 때 배경색과 글자색이 변경됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_1_onclick',id:'btn_ex1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'GridVeiw 비활성화 하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_2_onclick',id:'btn_ex1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'GridVeiw 활성화 하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'240',class:'gvw',dataList:'data:dlt_books',defaultCellHeight:'26',disabledBackgroundColor:'#eee',disabledFontColor:'#bbb',id:'grd_exam1',rowNumVisible:'true',rowNumWidth:'26',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'174'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'정가',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'출간일',width:'84'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',value:'',width:'174'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'price',inputType:'text',textAlign:'right',width:'63'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'published_date',inputType:'text',value:'',width:'84'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'GridView 셀의 비활성화 여부 지정하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 버튼을 클릭하고 GridView 셀의 비활성화 여부를 확인합니다.<br/>비활성화가 적용되면 셀이 수정 모드로 변경되지 않습니다.<br/>이 GridView는 비활성화가 되었을 때 배경색과 글자색이 변경됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_1_onclick',id:'btn_ex2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'도서명\'의 2번째 행의 셀을 비활성화 하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false',id:'btn_ex2_2',style:'',type:'button','ev:onclick':'scwin.btn_ex2_2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'도서명\'의 2번째 행의 셀을 활성화 하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'240',class:'gvw',dataList:'data:dlt_books',defaultCellHeight:'26',id:'grd_exam2',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true',rowNumVisible:'true',rowNumWidth:'26',disabledBackgroundColor:'#eee',disabledFontColor:'#bbb'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'174'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'정가',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'출간일',width:'84'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',width:'174',value:''}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'price',inputType:'text',textAlign:'right',width:'63'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'published_date',inputType:'text',width:'84',value:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'GridView 컬럼의 비활성화 여부 지정하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 버튼을 클릭하고 GridView 컬럼의 비활성화 여부를 확인합니다.<br/>비활성화가 적용되면 셀이 수정 모드로 변경되지 않습니다.<br/>이 GridView는 비활성화가 되었을 때 배경색과 글자색이 변경됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_1_onclick',id:'btn_ex3_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'정가\'를 비활성화 하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_2_onclick',id:'btn_ex3_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'정가\'를 활성화 하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'240',class:'gvw',dataList:'data:dlt_books',defaultCellHeight:'26',disabledBackgroundColor:'#eee',disabledFontColor:'#bbb',id:'grd_exam3',rowNumVisible:'true',rowNumWidth:'26',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'174'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'정가',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'출간일',width:'84'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',value:'',width:'174'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'price',inputType:'text',textAlign:'right',width:'63'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'published_date',inputType:'text',value:'',width:'84'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'GridView 로우의 비활성화 여부 지정하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 버튼을 클릭하고 GridView 로우의 비활성화 여부를 확인합니다.<br/>비활성화가 적용되면 셀이 수정 모드로 변경되지 않습니다.<br/>이 GridView는 비활성화가 되었을 때 배경색과 글자색이 변경됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex4_1_onclick',id:'btn_ex4_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1번째 행을 비활성화 하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex4_2_onclick',id:'btn_ex4_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1번째 행을 활성화 하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'240',class:'gvw',dataList:'data:dlt_books',defaultCellHeight:'26',disabledBackgroundColor:'#eee',disabledFontColor:'#bbb',id:'grd_exam4',rowNumVisible:'true',rowNumWidth:'26',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'174'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'정가',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'출간일',width:'84'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',value:'',width:'174'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'price',inputType:'text',textAlign:'right',width:'63'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'published_date',inputType:'text',value:'',width:'84'}}]}]}]}]}]}]}]}]}]}]})