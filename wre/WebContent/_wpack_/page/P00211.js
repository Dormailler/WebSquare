/*amd /page/P00211.xml 10234 92e22b74e1479a8d03cba6b566c4b459cb86db4fbdeefdb7e22b51003e106513 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'rad',name:'선택'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_2',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'rad',name:'선택'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_3',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'rad',name:'선택'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_4',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'rad',name:'선택'}},{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.setDataList();
};

/**
 * DataList에 데이터 할당
 */
scwin.setDataList = function () {
    var arrData = [
        { "label": "거의 모든 전쟁의 역사", "categoryLabel": "역사/문화" },
        { "label": "공정하다는 착각", "categoryLabel": "인문" },
        { "label": "내가 틀릴 수도 있습니다", "categoryLabel": "인문" },
        { "label": "선을 넘지 않는 사람이 성공한다", "categoryLabel": "자기계발" },
        { "label": "나로서 충분히 괜찮은 사람", "categoryLabel": "시/에세이" },
        { "label": "나의 문화유산답사기", "categoryLabel": "역사/문화" },
        { "label": "너무 잘하려고 애쓰지 마라", "categoryLabel": "시/에세이" },
        { "label": "마음의 법칙", "categoryLabel": "인문" },
        { "label": "마지막 몰입: 나를 넘어서는 힘", "categoryLabel": "자기계발" },
        { "label": "멘탈을 바꿔야 인생이 바뀐다", "categoryLabel": "자기계발" },
        { "label": "무엇이 옳은가", "categoryLabel": "인문" },
        { "label": "문명의 붕괴(Collapse)", "categoryLabel": "역사/문화" },
        { "label": "미움받을 용기", "categoryLabel": "인문" },
        { "label": "불편한 편의점", "categoryLabel": "소설" },
        { "label": "우리는 여전히 삶을 사랑하는가", "categoryLabel": "인문" },
        { "label": "원씽(The One Thing)", "categoryLabel": "자기계발" },
        { "label": "작별인사", "categoryLabel": "소설" },
        { "label": "잘했고 잘하고 있고 잘 될 것이다", "categoryLabel": "시/에세이" },
        { "label": "저만치 혼자서", "categoryLabel": "소설" },
        { "label": "책들의 부엌", "categoryLabel": "소설" }
    ];

    dlt_books_1.setJSON(arrData);
    dlt_books_2.setJSON(arrData);
    dlt_books_3.setJSON(arrData);
    dlt_books_4.setJSON(arrData);
};


/**
 * 영역 [radio의 label 적용 - 사용자 함수 적용]의 radioLabelFormatter
 */
scwin.grd_exam4_radioLabelFormatter = function (row, col, label) {
    var jsnRow;
    var returnValue;

    jsnRow = dlt_books_4.getRowJSON(row);   //현재 행의 json 데이터 추출

    //데이터 조합
    returnValue = "[" + jsnRow.categoryLabel + "] " + jsnRow.label;

    return returnValue;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 컬럼의 InputType이 radio인 경우 label을 출력하는 예제입니다.<br/>설정에 통해 고정 문자 또는 GridView의 컬럼 데이터를 조합하여 출력할 수 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본설정) label 설정 없음',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'251',class:'gvw',dataList:'data:dlt_books_1',defaultCellHeight:'26',id:'',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'35',inputType:'text',style:'',id:'column4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'분류',width:'56'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'160',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'35',inputType:'radio',style:'',id:'rad',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'56',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'160',value:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'radio의 label - 고정 문자',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'266',class:'gvw',dataList:'data:dlt_books_2',defaultCellHeight:'26',id:'',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',width:'50',value:'선택'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'분류',width:'56'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',sortable:'true',value:'도서명',width:'160'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rad',inputType:'radio',width:'50',radioLabel:'선택',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'56',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'160',value:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'radio의 label 적용 - 컬럼 조합',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'460',class:'gvw',dataList:'data:dlt_books_3',defaultCellHeight:'26',id:'',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',width:'240',value:'분류 - 도서명'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'분류',width:'56'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',sortable:'true',value:'도서명',width:'160'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rad',inputType:'radio',textAlign:'left',width:'240',radioLabelColumn:'categoryLabel,label',radioLabelDelimiter:' - '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'56',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'160'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'radio의 label 적용 - 사용자 함수 적용',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'250',class:'gvw',dataList:'data:dlt_books_4',defaultCellHeight:'26',id:'grd_exam4',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'[분류] 도서명',width:'250'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rad',inputType:'radio',textAlign:'left',width:'250',radioLabelFormatter:'scwin.grd_exam4_radioLabelFormatter'}}]}]}]}]}]}]}]}]}]}]})