/*amd /edu/training1_gridView.xml 19352 232daa035926920ce8df3af63f6491ba3c8299a760b83daf0f5a30202e09e322 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dc_code02',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'GRP_CD',name:'GRP_CD'}},{T:1,N:'w2:column',A:{dataType:'text',id:'CODE_CD',name:'CODE_CD'}},{T:1,N:'w2:column',A:{dataType:'text',id:'CODE_NM',name:'CODE_NM'}}]},{T:1,N:'w2:data',A:{xmlns:''}}]},{T:1,N:'w2:dataList',A:{id:'dc_code101',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'GRP_CD',name:'GRP_CD'}},{T:1,N:'w2:column',A:{dataType:'text',id:'CODE_CD',name:'CODE_CD'}},{T:1,N:'w2:column',A:{dataType:'text',id:'CODE_NM',name:'CODE_NM'}}]},{T:1,N:'w2:data',A:{xmlns:''}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dc_userInfoList',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'EMP_CD',name:'사번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'EMP_NM',name:'이름'}},{T:1,N:'w2:column',A:{dataType:'text',id:'GENDER_CD',name:'성별'}},{T:1,N:'w2:column',A:{dataType:'text',id:'JOIN_DATE',name:'입사일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'POSITION_CD',name:'직급'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ROLE_CD',name:'역할'}},{T:1,N:'w2:column',A:{dataType:'text',id:'EMAIL',name:'이메일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ZIP_CD',name:'우편번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ADDRESS1',name:'주소1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ADDRESS2',name:'주소2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'CREATED_DATE',name:'생성일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'UPDATED_DATE',name:'수정일'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_searchParam',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'key5',name:'성별'}},{T:1,N:'w2:key',A:{dataType:'text',id:'POSITION_CD',name:'직급'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_reqCode',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'GRP_CD',name:'name1'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_code',ref:'data:json,dc_reqCode',target:'data:json,["dc_code02","dc_code101"]',action:'/edu/data/codeList.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',ref:'data:json,dc_searchParam',target:'data:json,dc_userInfoList',action:'/edu/data/userInfoList.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중입니다.','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',ref:'data:json,{"action":"modified","id":"dc_userInfoList"}',target:'',action:'',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() { 
    $p.executeSubmission( "sbm_code" );

};
 
// 조회 하기 
scwin.btn_select_onclick = function(e) {
    $p.executeSubmission("sbm_search");
};

// 입력, 수정, 삭제 data만 request 정보로 전송하기
scwin.btnSave_onclick = function(e) {
    $p.executeSubmission("sbm_save"); 
};

scwin.onClick_onclick = function(e) {
    ui_memberList.advancedExcelDownload([]);
};

scwin.btnInsert_onclick = function(e) {
    var rowidx = ui_memberList.getFocusedRowIndex();
    dc_userInfoList.insertRow(rowidx);
};

scwin.btnDelete_onclick = function(e) {
    var rowidx = ui_memberList.getFocusedRowIndex();
    dc_userInfoList.deleteRow(rowidx);
};

scwin.btnRemove_onclick = function(e) {
    var rowidx = ui_memberList.getFocusedRowIndex();
    var rmobj = dc_userInfoList.removeRow(rowidx)

    console.log(rmobj);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_fav',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'[시연] DataCollection 과 GridView 연동 & GridView의 다양한 기능',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',id:'',label:'해당화면은 GridView 구현은 안된 시연용 화면',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'디버깅하기',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'1. 브라우저에서 [Ctrl+마우스 오른쪽 버튼을 클릭]하면 컨텍스트 메뉴 팝업 제공 <br/>2. 주요 디버깅 메뉴<br/>2-1.로그보기 : Script 오류 확인 및 Script에서 출력 로그 확인<br/>2-2.dataCollection보기 : 데이터 객체의 현재 값 확인 <br/>2-3.소스보기 WebSquare화면 소스 &nbsp;확인 <br/>2-4. 현재 화면 디버그 실행 : &nbsp;Submission을 이용한 통신의 Input, Output, Header정보 확인 <br/>3. 브라우저 실행 후 [F12] &nbsp;개발자 도구 실행 기존 디버깅 수행 가능 <br/><br/>',style:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 다양한 속성',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'1. GridView 에서 많이 쓰는 속성 <br/> 1-1. rowNumVisible : 연동된 DataList의 데이터를 기준으로 행 번호 표시 여부. [default:false, true]<br/> 1-2. rowStatusVisible : 각 행의 상태(추가/수정/삭제)를 별도의 컬럼에 아이콘으로 표시. [default: false, true]<br/> 1-3. autoFit : GridView의 모든 컬럼 폭을 균등하게 배분하여 전체 화면 폭을 채우는 기능<br/> 1-4. sortable : gridView의 헤더 클릭을 통한 데이터 정렬 지원 여부<br/> 1-5. useFilterList : 필터링 대상 값을 목록으로 표시.<br/>2.GridView의 컬럼에서 많이 쓰는 속성 <br/> 2-1. inputType : GridView 의 컬럼에 여러가지 타입을 지정해서 쓸수 있다. <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;( 성별 : select , 가입일: calendar , 직급 : select 적용 )<br/> 2-2. useFilter : 필터 사용 여부. [default:false, true] &nbsp; 필터링을 수행할 각 컬럼 별로 설정<br/> 2-3. displayFormatter : 셀의 데이터 값을 포맷할 사용자 정의 함수. &nbsp;함수를 직접 정의해야 함<br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(scwin.fnDis :우편번호에 적용)<br/> 2-4. customFormatte : data, formattedData, rowIndex, colIndex 인자를 받는 조건부 서식 formatter 함수명.<br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (scwin.fnCus을 생성하고 성별값에 적용 : 성별 따라 이름색변경)<br/>',style:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView에 관련된 주요 API',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'1. 추가 : dc_userInfoList.insertRow(rowidx); <br/>2. 삭제 : dc_userInfoList.deleteRow(rowidx); (상태값 :D 처리)<br/>3. 삭제 : dc_userInfoList.removeRow(rowidx);<br/>4. 다중삭제 : dc_userInfoList.deleteRows( chkArr ); &nbsp;(상태값 :D 처리)<br/>5. 다중삭제 : dc_userInfoList.removeRows( chkArr );<br/>6. 초기화 : dc_userInfoList.removeAll();<br/>7. 엑셀다운로드 : ui_memberList.advancedExcelDownload( options );<br/>8. 엑셀업로드 : ui_memberList.advancedExcelUpload( options );<br/>',style:''}}]}]},{T:1,N:'xf:group',A:{class:'schbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'schbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tbl ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'성별',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'ui_search_gender',optionOrder:'false',ref:'data:dc_searchParam.GENDER_CD',selectedData:'true',style:'width: 148px;height: 23px;',submenuSize:'auto',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dc_code101'},E:[{T:1,N:'xf:label',A:{ref:'CODE_NM'}},{T:1,N:'xf:value',A:{ref:'CODE_CD'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직급',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'GENDER_CD',optionOrder:'false',ref:'data:dc_searchParam.GENDER_CD',selectedData:'true',style:'width: 148px;height: 23px;',submenuSize:'auto',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dc_code02'},E:[{T:1,N:'xf:label',A:{ref:'CODE_NM'}},{T:1,N:'xf:value',A:{ref:'CODE_CD'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_schbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_select',style:'',type:'button',tooltip:'데이터를 조회합니다.','ev:onclick':'scwin.btn_select_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm  row_add',id:'btnInsert_onClick',style:'',type:'button','ev:onclick':'scwin.btnInsert_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm  row_del',id:'btnDelete',style:'',type:'button','ev:onclick':'scwin.btnDelete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행삭제(delete)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm  row_del',id:'btnRemove',style:'',type:'button','ev:onclick':'scwin.btnRemove_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행삭제(remove)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm  row_del',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다중삭제(deleteRows)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm  row_del',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다중삭제(removeRows)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'onClick',style:'',type:'button','ev:onclick':'scwin.onClick_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다운로드'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm  upload',id:'',style:'margin-right: 10px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업로드'}]}]},{T:1,N:'w2:span',A:{dataType:'number',displayFormat:'#,##0건',displayFormatter:'',id:'span1',label:'0',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'gvw',dataList:'data:dc_userInfoList',defaultCellHeight:'26',focusMode:'row',id:'ui_memberList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 150px;margin-bottom: 10px;',autoFit:'allColumn',autoFitMinWidth:'1000',rowNumVisible:'true',rowNumHeaderValue:'NO',rowNumWidth:'30',sortable:'true',sortEvent:'ondblclick',useFilterList:'true',fixedColumn:'4',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header3'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column32',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'이름',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'성별',displayMode:'label',useFilter:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'입사일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column26',value:'이메일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'직급',displayMode:'label',useFilter:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'역할',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'우편번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'주소1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'주소2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody3'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'EMP_CD',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'EMP_NM',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'GENDER_CD',value:'',displayMode:'label',allOption:'true',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dc_code101'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',style:'',id:'JOIN_DATE',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'EMAIL',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'POSITION_CD',value:'',displayMode:'label',allOption:'true',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dc_code02'},E:[{T:1,N:'w2:label',A:{ref:'CODE_NM'}},{T:1,N:'w2:value',A:{ref:'CODE_CD'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ROLE_CD',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ZIP_CD',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ADDRESS1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ADDRESS2',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',class:'w2tb tbl',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이름',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'',initValue:'',ref:'data:dc_userInfoList.EMP_NM',style:'width: 144px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'성별',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'',ref:'data:dc_userInfoList.GENDER_CD',rows:'1',selectedIndex:'-1',style:'width: 150px;height: 21px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dc_code101'},E:[{T:1,N:'xf:label',A:{ref:'CODE_NM'}},{T:1,N:'xf:value',A:{ref:'CODE_CD'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가입일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'false',id:'',ref:'data:dc_userInfoList.JOIN_DATE',renderDiv:'true',renderType:'component',rightAlign:'false',style:'width: 150px;height: 24px;',weekStartsOn:'0'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직급',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'',ref:'data:dc_userInfoList.POSITION_CD',style:'width: 148px;height: 21px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dc_code02'},E:[{T:1,N:'xf:label',A:{ref:'CODE_NM'}},{T:1,N:'xf:value',A:{ref:'CODE_CD'}}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'bar_btndiv',id:'',label:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btnSave',style:'',type:'button',tooltip:'데이터를 추가,수정,삭제합니다.','ev:onclick':'scwin.btnSave_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]})