/*amd /edu/training1_dataMap_c.xml 12906 e6d202a7ac1ffdbbe6c429a3ca9002f485e89ef5ed6fd0ce76e466ef9394c6a7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/css/color.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_reqUserInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'EMP_CD',name:'사용자 코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_userInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'EMP_CD',name:'사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP_NM',name:'성명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'GENDER_CD',name:'성별',dataType:'text'}},{T:1,N:'w2:key',A:{id:'JOIN_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'POSITION_CD',name:'직급',dataType:'text'}},{T:1,N:'w2:key',A:{id:'DUTY_CD',name:'직책',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ROLE_CD',name:'역할',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ASSIGNED_TASK',name:'담당 업무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMAIL',name:'이메일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ADDRESS1',name:'주소1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ADDRESS2',name:'주소2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CREATED_DATE',name:'입력일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'UPDATED_DATE',name:'수정일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dc_code',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE_CD',name:'코드값',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CODE_NM',name:'코드명',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'CODE_CD',E:[{T:4,cdata:'01'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'개발자'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'CODE_CD',E:[{T:4,cdata:'02'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'설계자'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'CODE_CD',E:[{T:4,cdata:'03'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'DBA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'CODE_CD',E:[{T:4,cdata:'04'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'PL'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'CODE_CD',E:[{T:4,cdata:'05'}]},{T:1,N:'CODE_NM',E:[{T:4,cdata:'PM'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sub_select',ref:'data:json,dc_reqUserInfo',target:'data:json,dc_userInfo',action:'/edu/data/userInfo.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중입니다..','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
    
    var strCurDate = $p.getCurrentServerDate("yyyyMMdd");  //오늘 날짜
    ui_join.setValue(strCurDate);

    //성별 항목 script에서 추가하기
    ui_gender.addItem( "M", "남성" );
    ui_gender.addItem( "F", "여성" );	
    ui_gender.setSelectedIndex( 0 );

};
 
scwin.btn_select_onclick = function(e) {
    $p.executeSubmission("sub_select");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_fav',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'[완성] 목록성 컴포넌트 적용 & DataCollection 과 Submission 처리',style:'',tagname:''}}]},{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',id:'',label:'해당화면은 코딩된 완성 화면',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'디버깅하기',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'1. 브라우저에서 [Ctrl+마우스 오른쪽 버튼을 클릭]하면 컨텍스트 메뉴 팝업 제공 <br/>2. 주요 디버깅 메뉴<br/>2-1.로그보기 : Script 오류 확인 및 Script에서 출력 로그 확인<br/>2-2.dataCollection보기 : 데이터 객체의 현재 값 확인 <br/>2-3.소스보기 WebSquare화면 소스 &nbsp;확인 <br/>2-4. 현재 화면 디버그 실행 : &nbsp;Submission을 이용한 통신의 Input, Output, Header정보 확인 <br/>3. 브라우저 실행 후 [F12] &nbsp;개발자 도구 실행 기존 디버깅 수행 가능 <br/><br/>',style:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'컴포넌트 3가지 적용 확인',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'1. 속성 : 정적 제어 처리 <br/> &nbsp;1-1. Property View 속성 Tab <br/> &nbsp;1-2. 성명 InputBox 에 placeholder 속성 적용 <br/>2. 이벤트 : 컴포넌트의 동작 적용후 스크립트로 제어<br/> &nbsp;2-1. Property View 이벤트 Tab <br/> &nbsp;2-2. 조회 Trigger 컴포넌트에 onClick 이벤트 적용<br/>3. API &nbsp;: Script로 동적 제어처리<br/> &nbsp;3-1. Script Tab 영역에서 객체에 API로 제어<br/> &nbsp;3-2. 가입일 InputBox 컴포넌트에 API적용<br/> &nbsp; &nbsp; &nbsp; &nbsp; ui_join.setValue(strCurDate);<br/>',style:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'목록성 컴포넌트 적용 확인',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'1. Hard Coding : 직급항목 적용 &nbsp;<br/>2. Script 처리 : 성별항목 적용 <br/>3. DataCollection 처리 : 역할항목 적용<br/>',style:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'DataCollection 과 Submission 처리 확인',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'1. Request용 & Response 용 &nbsp;DataCollection 생성<br/> &nbsp; 참조 문서 : edu/training1_info.txt<br/> &nbsp; &nbsp;1-1. Outline View에서 dc_reqUserInfo ID로 DataMap type으로 생성<br/> &nbsp; &nbsp;1-1. Outline View에서 dc_userInfo ID로 DataMap type으로 생성<br/>2. Submission 을 만든다.<br/> &nbsp; &nbsp;2-1. Submission 의 ID를 생성 <br/> &nbsp; &nbsp;2-2. 생성한 Request용 & Response 용 &nbsp;DataCollection을 각각 연결 <br/> &nbsp; &nbsp;2-3. URL Action : /edu/data/userInfo.json<br/>3. 생성한 Submission을 조회 버튼에 이벤트 추가<br/> &nbsp; &nbsp; $p.executeSubmission("sub_select");//생성한 Submission ID 기재<br/>4. 통신완료 후 dc_userInfo 의 데이터를 컴포넌트에 표현<br/> &nbsp; 4-1. Outline View 의 Head Tab에서 각 KeyID를 드래그 하여 해당 컴포넌트에 드랍<br/> &nbsp; &nbsp; &nbsp;',style:''}}]}]},{T:1,N:'xf:group',A:{class:'schbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'schbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tbl ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_schbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_select',style:'',type:'button',tooltip:'데이터를 조회합니다.','ev:onclick':'scwin.btn_select_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',class:'w2tb tbl',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이름',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'',initValue:'',placeholder:'성명을 넣어주세요',ref:'data:dc_userInfo.EMP_NM',style:'width: 144px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직급',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'',optionOrder:'false',ref:'data:dc_userInfo.POSITION_CD',renderType:'component',selectedData:'true',style:'width: 148px;height: 21px;',submenuSize:'auto',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부장'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차장'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'과장'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가입일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'false',id:'ui_join',ref:'data:dc_userInfo.JOIN_DATE',renderDiv:'true',renderType:'component',rightAlign:'false',style:'width: 150px;height: 24px;',weekStartsOn:'0'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'성별',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'ui_gender',ref:'data:dc_userInfo.GENDER_CD',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'min-width: 150px;min-height: 12px;'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이메일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'',ref:'data:dc_userInfo.EMAIL',style:'width: 100%;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'역할',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',cols:'',id:'',ref:'data:dc_userInfo.ROLE_CD',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'min-width: 150px;min-height: 12px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dc_code'},E:[{T:1,N:'xf:label',A:{ref:'CODE_NM'}},{T:1,N:'xf:value',A:{ref:'CODE_CD'}}]}]}]}]}]}]}]}]}]}]}]})