/*amd /publishing/forms/datePicker.xml 11685 598cd2d4b25a72d09741b31b616bb4e43d66c8841b0defe7d50c268e70b94845 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents pub',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'Publishing Template - DatePicker',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'모바일 전용 컴포넌트로 Calendar 컴포넌트와 InputCalendar 컴포넌트의 대체로 사용합니다. 터치나 드래그 이벤트를 통해 날짜 값을 선택할 수 있습니다.',class:''}}]},{T:1,N:'xf:group',A:{class:'samplebox',id:'',style:''},E:[{T:1,N:'w2:datePicker',A:{id:'',style:'position: relative;width: 300px;height: 200px;',calendarValueType:'',ampm:'',class:'',dateSuffix:'',ref:'',monthNames:'',title:''}}]},{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Property',class:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'badge default',id:'',label:'Defualt option',style:''}},{T:1,N:'w2:span',A:{class:'badge',id:'',label:'option',style:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tbl'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:20%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'속성',style:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th tac'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'설명',style:'',tagname:'p'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'ampm',style:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'calendarValueType속성이 yearMonthDateTime인 경우 오전, 오후에 해당하는 문자열을 ,로 구분하여 작성한다.<br/>ex)AM,PM<br/>',style:'',tagname:'p'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'calendarValueType',style:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{id:'',label:'[default:yearMonthDate, yearMonth, yearMonthDateTime, hourMinute]UI 표시 형식',style:'',tagname:'p'}},{T:1,N:'xf:group',A:{class:'grp_option',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'badge default',id:'',label:'yearMonthDate',style:''}},{T:1,N:'w2:span',A:{class:'badge',id:'',label:'yearMonth',style:''}},{T:1,N:'w2:span',A:{class:'badge',id:'',label:'yearMonthDateTime',style:''}},{T:1,N:'w2:span',A:{class:'badge',id:'',label:'hourMinute',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'class<br/>',style:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{id:'',label:'HTML의 class 속성과 동일한 기능을 제공. CSS 파일이나 style 블럭에 정의한 여러 개의 class를 공백으로 구분하여 적용 가능.<br/>Engine 내부에서 각 컴포넌트 별로 지정된 class를 적용하나, class 속성을 이용하여 컴포넌트의 CSS를 제어 가능.',style:'',tagname:'p'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'dateSuffix',style:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{id:'',label:'[default:일]일(date)에 해당하는 숫자 뒤에 설정할 문자열로 빈값을 넣을 경우 $blank를 사용한다.',style:'',tagname:'p'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'id',style:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{id:'',label:'컴포넌트 ID.<br/>컴포넌트 ID는 전역 객체로 할당됨. 각 컴포넌트 ID를 통해 Script에서 해당 컴포넌트에 접근 가능.',style:'',tagname:'p'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'monthNames',style:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{id:'',label:'월에 해당하는 숫자를 대체할 문자열로 ,로 구분하여 작성한다.<br/>ex) Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec',style:'',tagname:'p'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'tabIndex',style:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{id:'',label:'Tab 키를 이용하여 포커스를 변경할 경우, 해당 컴포넌트에 포커스를 주는 순서.<br/>HTML의 tabindex 속성과 동일.',style:'',tagname:'p'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'title',style:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{id:'',label:'HTML의 title 속성과 동일. 마우스 오버 시, title로 저장한 값이 툴팁으로 표시됨. 일반적으로 웹접근성 지원용으로 설정.',style:'',tagname:'p'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'yearSuffix',style:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{id:'',label:'[default:년]연도(year)에 해당하는 숫자 뒤에 설정할 문자열로 빈값을 넣을 경우 $blank를 사용한다.',style:'',tagname:'p'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'03. CSS Overriding',class:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tbl'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:300px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Class'}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Description'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'w2datePicker, w2spinPicker w'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						w2datePicker, w2spinPicker 는 웹스퀘어 엔진에서 정의된 클래스입니다, 기본적으로 html 로 떨구는 시점에서 자동으로 부여됩니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'w2spinPicker_topGradient'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						w2spinPicker_topGradient는 웹스퀘어 엔진에서 정의된 클래스입니다, 기본적으로 html 로 떨구는 시점에서 자동으로 부여됩니다.\n						'},{T:1,N:'br'},{T:3,text:'\n						DatePicker의 상단 그라디언트 배경의 공간입니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'w2spinPicker_bottomGradient'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						w2spinPicker_bottomGradient는 웹스퀘어 엔진에서 정의된 클래스입니다, 기본적으로 html 로 떨구는 시점에서 자동으로 부여됩니다.\n						'},{T:1,N:'br'},{T:3,text:'\n						DatePicker의 하단 그라디언트 배경의 공간입니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'w2spinPicker_selectedRowBar'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						w2spinPicker_selectedRowBar는 웹스퀘어 엔진에서 정의된 클래스입니다, 기본적으로 html 로 떨구는 시점에서 자동으로 부여됩니다.\n						'},{T:1,N:'br'},{T:3,text:'\n						DatePicker의 선택된 부분의 배경색 공간입니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'w2scrollView, yearMonthDate_year'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						w2scrollView, yearMonthDate_year는 웹스퀘어 엔진에서 정의된 클래스입니다, 기본적으로 html 로 떨구는 시점에서 자동으로 부여됩니다.\n						'},{T:1,N:'br'},{T:3,text:'\n						DatePicker의 년도 부분의 세로줄 공간입니\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'w2scrollView, yearMonthDate_month'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						w2scrollView, yearMonthDate_month는 웹스퀘어 엔진에서 정의된 클래스입니다, 기본적으로 html 로 떨구는 시점에서 자동으로 부여됩니다.\n						'},{T:1,N:'br'},{T:3,text:'\n						DatePicker의 월 부분의 세로줄 공간입니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'w2scrollView, yearMonthDate_date'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						w2scrollView, yearMonthDate_date는 웹스퀘어 엔진에서 정의된 클래스입니다, 기본적으로 html 로 떨구는 시점에서 자동으로 부여됩니다.\n						'},{T:1,N:'br'},{T:3,text:'\n						DatePicker의 일 부분의 세로줄 공간입니다.\n					'}]}]}]}]}]}]}]}]})