/*amd /page/P00243.xml 7773 2896f7fc365b57b43b3df66c9481bd36b34ee91d97f710bd0a5d361854f4ebf5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'category1',name:'대분류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'title',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_1',name:'상반기'}},{T:1,N:'w2:column',A:{dataType:'text',id:'row3_2',name:'하반기'}}]},{T:1,N:'w2:data',A:{use:'true',xmlns:''},E:[{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'소설'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'200'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'300'}]},{T:1,N:'title',E:[{T:4,cdata:'칼의 노래'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'소설'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'300'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'200'}]},{T:1,N:'title',E:[{T:4,cdata:'태백산맥'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'소설'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'400'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'200'}]},{T:1,N:'title',E:[{T:4,cdata:'달과 6펜스'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'역사/문화'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'600'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'300'}]},{T:1,N:'title',E:[{T:4,cdata:'조선왕조실록'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'category1',E:[{T:4,cdata:'역사/문화'}]},{T:1,N:'row3_1',E:[{T:4,cdata:'1200'}]},{T:1,N:'row3_2',E:[{T:4,cdata:'900'}]},{T:1,N:'title',E:[{T:4,cdata:'난중일기'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {

};

/**
 * 버튼 [엑셀 다운로드 - 기본] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00243_TYPE1.xlsx", //엑셀의 파일명
        useSubTotal: "true" //subTotal 표시
    };

    grd_exam1.advancedExcelDownload(jsnOptions);
};

/**
 * 버튼 [엑셀 다운로드 - 공통 스타일 적용] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00243_TYPE2.xlsx", //엑셀의 파일명
        useSubTotal: "true", //필수 지정 - subTotal 표시
        rowHeight: "30", //Excel 파일로 다운로드 할 때 엑셀의 셀 높이. (단위: pixel)
        displayGridlines: "false" //Excel 파일 전체 셀의 눈금선 제거 유무
    };

    //GridView "grd_exam1"의 엑셀 다운로드 실행
    grd_exam1.advancedExcelDownload(jsnOptions);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc'},E:[{T:1,N:'w2:textbox',A:{class:'',escape:'false',label:'GridView의 엑셀 다운로드(함수 \'advancedExcelDownload\') 옵션 중 공통으로 스타일을 적용할 수 있는 옵션 설정의 예제입니다.<br/>스타일을 지정할 수 있는 옵션은 아래와 같습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'- rowHeight : [default: 없음] Excel 파일로 다운로드 할 때 엑셀의 셀 높이. (단위: pixel)<br/>- displayGridlines : [default: true, false] Excel 파일 전체 셀의 눈금선 제거 유무',style:'margin-bottom: 6px;'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',label:'다운로드된 엑셀 파일의 행 높이, 눈금선 유무를 비교합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드 - 기본'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',localeRef:'',style:'min-width:30px;height:26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드 - 공통 스타일 적용'}]}]}]},{T:1,N:'w2:gridView',A:{autoFitMinWidth:'266',baseNode:'',class:'gvw',dataList:'data:dlt_books',defaultCellHeight:'26',focusMode:'row',id:'grd_exam1',readOnly:'true',style:'height:200px;',visibleRowNum:'all',autoFit:'allColumn'},E:[{T:1,N:'w2:header',A:{id:'header5',style:''},E:[{T:1,N:'w2:row',A:{id:'row35',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'false',id:'column572',inputType:'text',value:'분류',width:'68'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column575',inputType:'text',value:'도서명',width:'90'}},{T:1,N:'w2:column',A:{id:'column468',inputType:'text',value:'상반기',width:'54'}},{T:1,N:'w2:column',A:{id:'column467',inputType:'text',value:'하반기',width:'54'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody5',style:''},E:[{T:1,N:'w2:row',A:{id:'row37',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',colMerge:'true',displayMode:'label',hidden:'false',id:'category1',inputType:'text',width:'68'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'title',inputType:'text',textAlign:'left',width:'90'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',id:'row3_1',inputType:'text',textAlign:'right',width:'54'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',id:'row3_2',inputType:'text',textAlign:'right',width:'54'}}]}]},{T:1,N:'w2:subTotal',A:{id:'subTotal1',style:'',targetColumnID:'category1'},E:[{T:1,N:'w2:row',A:{id:'row42',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column577',inputType:'text',style:'height:30px;',value:'소계',width:'68'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',expression:'targetColValue() + \' - \' +count(\'row_total\') + \'건\'',id:'column596',inputType:'expression',style:'height:30px;',textAlign:'left',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'#,###',displayMode:'label',expression:'sum(\'row3_1\')',id:'sub_col_1',inputType:'expression',style:'height:30px;',textAlign:'right',width:'54'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'#,###',displayMode:'label',expression:'sum(\'row3_2\')',id:'sub_col_2',inputType:'expression',style:'height:30px;',textAlign:'right',width:'54'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row41',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column580',inputType:'text',style:'height:40px;',value:'합계',width:'68'}},{T:1,N:'w2:column',A:{expression:'\'총 합계 - \'+count(\'row_total\') +\'건\'',id:'column597',inputType:'expression',style:'height:40px;',textAlign:'left',width:'90'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',expression:'sum(\'row3_1\')',id:'column526',inputType:'expression',style:'height:40px;',textAlign:'right',width:'54'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'#,###',displayMode:'label',expression:'sum(\'row3_2\')',id:'column584',inputType:'expression',style:'height:40px;',textAlign:'right',width:'54'}}]}]}]}]}]}]}]}]})