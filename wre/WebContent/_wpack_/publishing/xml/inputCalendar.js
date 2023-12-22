/*amd /publishing/xml/inputCalendar.xml 31347 6b510ee1f2e43b3dc0ecd896cbc95a0f52367b0d9edcae1879b95e76bd5cb214 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'Publishing Template - InputCalendar',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'InputCalendar는 Calendar 컴포넌트와 Input 컴포넌트를 그룹화시킨 복합 컴포넌트로서, 달력에서 선택한 날짜가 Input 컴포넌트에 출력됩니다.<br/>사용자가 Calendar에서 날짜를 선택하여 Input에 출력시키거나 Input에 직접 날짜를 입력할 수도 있습니다.<br/>또한 validCheck 속성을 이용하여 사용자가 입력한 값이 유효한 날짜인지를 체크하거나 minYear, maxYear 속성을 이용하여 최소/최대 연도를 지정할 수 있는 기능을 제공합니다.<br/>본 컴포넌트는 최상위 div Tag로, 하위에는 복합 Tag로 구현되어있습니다.',class:''}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit_h2 sample',id:'',label:'01. Sample',style:''}},{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',name:'',style:'',href:'/ws/download/inputCalendar.zip',id:'',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Download'}]}]}]}]},{T:1,N:'xf:group',A:{class:'msgbox',id:'',style:'border:1px dashed #ccc;'},E:[{T:1,N:'w2:inputCalendar',A:{calendarClass:'',calendarImage:'',calendarImageOver:'',calendarValueType:'yearMonthDate',class:'',focusOnDateSelect:'false',footerDiv:'false',id:'',renderDiv:'true',renderType:'component',style:'width:130px;margin-right:30px;',useAnchor:'',useCalendarTabIndex:'',weekStartsOn:'0'}},{T:1,N:'w2:inputCalendar',A:{calendarClass:'',calendarValueType:'yearMonthDate',class:'',focusOnDateSelect:'false',footerDiv:'false',id:'',readOnly:'true',renderDiv:'true',renderType:'component',style:'width:130px;',useAnchor:'',useCalendarTabIndex:'',weekStartsOn:'0'}}]},{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'02. Property',class:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tbl'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:20%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Property'}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Description'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'alt'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'이미지로 구성된 달력아이콘의 HTML alt 속성에 들어갈 문자열로 웹 접근성 작업 시 필수 입력해야합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\n						autoFocus\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\n						[default:false,&nbsp;true]nextTabID가&nbsp;지정되어&nbsp;있는&nbsp;경우,&nbsp;maxByteLength&nbsp;지정값과&nbsp;일치할&nbsp;경우&nbsp;자동으로&nbsp;focus를&nbsp;이동시킬지&nbsp;유무\n						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\n						buttonTitle\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\n						inputCalendar의&nbsp;달력이미지에&nbsp;title속성값을&nbsp;준다.&nbsp;&nbsp;&nbsp;명시된&nbsp;값을&nbsp;브라우저에서&nbsp;달력이미지에&nbsp;마우스&nbsp;over시&nbsp;툴팁형태로&nbsp;표현한다.&nbsp;일반적으로&nbsp;웹접근성&nbsp;작업&nbsp;시&nbsp;설정한다.\n						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'calendarClass'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						웹스퀘어에서 제공하는 5가지 skin\n						'},{T:1,N:'br'},{T:3,text:'\n						[default:class1, class2, class3, class4, class5]Calendr의 스킨을 정의합니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'calendarImage'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						캘린더 아이콘 이미지 변경\n						'},{T:1,N:'br'},{T:3,text:'\n						InputCalendar Component 의 calendarImage 속성에 대한 설명입니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'calendarImageOver'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						캘린더 아이콘 마우스 오버 이미지 변경\n						'},{T:1,N:'br'},{T:3,text:'\n						컴포넌트의 오른쪽에 위치한 달력버튼에 마우스가 올라갔을 때의 이미지 파일 경로.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'calendarValueType'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						캘린더의 뷰타입 설정가능, 예:) 년,월,일 > 년,월\n						'},{T:1,N:'br'},{T:3,text:'\n						[default:yearMonthDate, yearMonth, yearMonthDateHour, yearMonthDateTime, yearMonthDateTimeSec]calendar의 표현 방법을\n						정의합니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'cancelButtonShow'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						[default:false, true]calendar의 X모양의 버튼 표시 여부로 버튼은 우측 하단에 표현됩니다. 해당 버튼을 click하면 calendar가 닫힙니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'caption'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						calendar의 HTML caption Tag의 값을 설정합니다.(calendar는 table Tag를 이용하여 구성되어있습니다) 일반적으로 웹 접근성 작업 시 입력합니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'class'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						HTML의 class속성과 동일한 기능을 제공하며 css파일 또는 style블럭에 정의한 class를 1개 또는 공백(space)를 이용하여 다중 적용이 가능합니다. 기본적으로 엔진 내부에서 각 컴포넌트\n						마다의 class를 적용하고 있으며 해당 class를 이용하여 컴포넌트의 css를 공통으로 적용할 수 있습니다. 본 컴포넌트는 복합 구조를 가지고 있어 본 속성만으로는 css를 조절하기 어렵기 때문에 하위\n						Tag에 적용된 class를 이용해야합니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'dateValidCheck'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'들어온 문자열이 date로서 valid한지 체크. 길이/년월일 등 체크'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'defaultDate'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						input에 값이 없을 경우 사용하는 기본 날짜. defalutDate 미설정시 default값은 빈 스트링이며, 현재 시스템 날짜가 Calendar에 표시됩니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'displayFormat'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						input에 표현될 년월일에 대한 format으로 delimiter속성은 무시됩니다. ex) yyyy/MM/dd , yyyy/MM/dd (EEE) 만약 사용자가 입력하는 년월일의 순서가 yyyyMMdd와\n						다르다면 ioFormat 속성을 함께 적용합니다. ex)dd/MM/yyyy\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'displaymessage'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						[default:false, true]validate API를 호출 하였을 때 검증 실패에 대한 결과 메세지를 표시 할지의 여부. 기본적으로 엔진에서 정의 된 메세지가 표현되며 별도의 메세지를 정의하고자 할\n						때는 invalidMessageFunc속성을 이용합니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\n						disableDateValidSet\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\n						[default:&nbsp;false,&nbsp;true]&nbsp;disableBeforeDate&nbsp;또는&nbsp;disableAfterDate&nbsp;속성이&nbsp;사용된&nbsp;경우,&nbsp;입력창에&nbsp;비활성화된&nbsp;&nbsp;&nbsp;날짜&nbsp;값을&nbsp;입력한&nbsp;후&nbsp;blur되었을&nbsp;?,&nbsp;이전에&nbsp;입력했던&nbsp;정상적인&nbsp;값으로&nbsp;입력창에&nbsp;나타나는&nbsp;기능을&nbsp;설정함.&nbsp;&nbsp;&nbsp;true:&nbsp;비활성화된&nbsp;날짜&nbsp;값을&nbsp;입력창에&nbsp;입력&nbsp;시,&nbsp;이전에&nbsp;입력했던&nbsp;유효한(활성화된&nbsp;날짜)&nbsp;값으로&nbsp;변경되서&nbsp;입력창에&nbsp;나타남.&nbsp;&nbsp;&nbsp;false:&nbsp;기본&nbsp;값.&nbsp;비활성화된&nbsp;날짜&nbsp;값을&nbsp;입력창에&nbsp;입력&nbsp;시,&nbsp;입력&nbsp;가능함.\n						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'fixedDate'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						[today]calendar의 하단에 표현되는 날짜를 사용자가 선택한 날짜가 아닌 현재일로 고정하여 표현 할지의 속성.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'focusOnDateSelect'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'[default:false, true]모바일에서 달력의 날짜 선택시 input에 focus를 줄지 여부'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'footerDiv'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						[default:false, true]calednar의 선택 된 날짜등이 있는 하위 영역을 table Tag가 아닌 div Tag로 표현할지 여부\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'handleIconClick'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'달력 아이콘 클릭시 처리하는 콜백 함수'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'id'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'컴포넌트의 ID로 전역객체로 할당되며 script에서 본 id로 컴포넌트에 접근이 가능합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'inputReadOnly'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'[default:false, true]input의 readOnly 여부'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'invalidMessageFunc'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						validate API를 호출 하였을 때 검증 실패에 대한 결과 메세지를 별도로 정의 한 Function에서 동적으로 표현 할 수 있는 기능으로 정의 된 function의 이름을 명시합니다.\n						'},{T:1,N:'br'},{T:3,text:'\n						displaymessage속성이 true로 되어있어야 하며 invalidMessage와 동시 적용이 불가합니다. 사용자 Function(아래 예시 참조)에서는 this.getType()을 통해 검증 실패\n						type(아래 type 참조)과 this.getValue()를 value값을 가져와 메세지를 동적으로 생성하여 return 합니다.\n						'},{T:1,N:'br'},{T:3,text:'\n						type)mandatory, allowChar, ignoreChar, minLength, maxLength, minByteLength, maxByteLength] 예시)function fn_msg(){ var\n						tmpType = this.getType(); var tmpValue = this.getValue(); if(tmpType == "mandatory"){ return "필수 검증\n						항목입니다."; } }\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'ioFormat'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						[defulat:yyyyMMdd]사용자가 data를 입력하는 순서와 format 매칭시켜주는 기능입니다.(\'y\',\'M\',\'d\',\'H\',\'m\' 문자만 허용합니다.)\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\n						keepFixedDate\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\n						fixedDate&nbsp;=&nbsp;"today"로&nbsp;설정&nbsp;시,&nbsp;하단에&nbsp;표현되는&nbsp;날짜를&nbsp;오늘&nbsp;날짜로&nbsp;고정&nbsp;시키는&nbsp;기능을&nbsp;설정&nbsp;&nbsp;true&nbsp;:&nbsp;fixedDate&nbsp;=&nbsp;"today"&nbsp;설정&nbsp;시,&nbsp;하단에&nbsp;표현되는&nbsp;날짜가&nbsp;오늘&nbsp;날짜로&nbsp;고정됨.&nbsp;&nbsp;&nbsp;false&nbsp;:&nbsp;fixedDate&nbsp;=&nbsp;"today"&nbsp;설정&nbsp;시,&nbsp;하단에&nbsp;표현되는&nbsp;날짜가&nbsp;사용자가&nbsp;달력에서&nbsp;선택한&nbsp;날짜에&nbsp;따라&nbsp;변경됨.\n						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'mandatory'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'[default:false, true]validate API를 호출 시 필수입력을 체크 할지의 여부.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'maxYear'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						calendar에 표시되는 최대연도로 config.xml의 calendar하위의 maxYear의 value 속성값이 기본값으로 설정됩니다. ex)<inputCalendar><minYear\n						value="1978" /><maxYear value="2030" /></inputCalendar>\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'minYear'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						calendar에 표시되는 최소연도로 config.xml의 calendar하위의 minYear의 value 속성값이 기본값으로 설정됩니다. ex)<inputCalendar><minYear\n						value="1978" /><maxYear value="2030" /></inputCalendar>\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'monthNames'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						calendar의 월에 해당하는 selectbox에 display값을 설정하는 기능으로 1월부터 12월의 display값을 ,(comma)로 구분하여 정의합니다. ex)\n						Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\n						monthNamesForYearMonthType\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\n						calendarvaluetype이&nbsp;yearMonth일&nbsp;경우,&nbsp;calendar의&nbsp;월에&nbsp;해당하는&nbsp;selectbox에&nbsp;display값을&nbsp;설정하는&nbsp;기능으로&nbsp;1월부터&nbsp;12월의&nbsp;display값을&nbsp;,(comma)로&nbsp;구분하여&nbsp;정의한다.&nbsp;&nbsp;&nbsp;ex)&nbsp;Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec\n						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\n						nextTabID\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\n						tab으로&nbsp;이동시&nbsp;이동할&nbsp;컴포넌트&nbsp;ID\n						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'outsideClickEvent'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						calendar 컴퍼넌트 calendarValueTYpe = "yearMonth" 시 년/월 변경영역 밖에 클릭시 이벤트 발생 여부\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\n						placeholder\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\n						HTML5의&nbsp;placeholder&nbsp;기능으로&nbsp;사용자에게&nbsp;알려줘야&nbsp;할&nbsp;문구(hint)등을&nbsp;명시한다.&nbsp;&nbsp;&nbsp;브라우저마다의&nbsp;동작&nbsp;방식이&nbsp;상이할&nbsp;수&nbsp;있다.(예를&nbsp;들어&nbsp;IE는&nbsp;focus시&nbsp;hint가&nbsp;사라지지만&nbsp;Chrome의&nbsp;경우&nbsp;text가&nbsp;입력&nbsp;되어야&nbsp;사라진다.)\n						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'readOnly'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						[default:false, true]readonly의 여부로 HTML의 readonly속성과 동일한 기능을 제공합니다. 달력 아이콘과 input 모두 readonly로 적용되며 input만 readonly\n						시킬 때는 inputReadOnly 속성을 설정합니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'renderDiv'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						html로 랜더링 시 div 태그로 구성할지 여부 체크(default:table)\n						'},{T:1,N:'br'},{T:3,text:'\n						[default:false, true]calednar를 div로 구성할지의 여부로 기본적으로 table로 구성되어있습니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'renderType'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						(native)접근성관련 프로젝트 시 이용, renderDiv 속성을 true 변경이랑 동일함.\n						'},{T:1,N:'br'},{T:3,text:'\n						[default:component, native]컴포넌트의 레이아웃 구조를 설정합니다. component : 내부적으로 div 및 table을 이용하여 달력을 표현합니다. 웹 접근성을 위해서는 사용을 지양해야\n						합니다. native : 주로 웹 접근성을 위해 사용되는 속성으로 달력 내부의 selectbox를 html의 select태그를 사용하여 렌더링하며, 달력의 숫자 및 버튼들을 html의 button태그로\n						렌더링합니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'rightAlign'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'calendar를 오른쪽으로 정렬하여 표시함.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'setCurrentDate'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'날짜 input 현재일 출력 유무'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'style'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'InputCalendar의 style 속성'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'summary'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						HTML의 table Tag의 summary 속성과 동일한 기능을 제공합니다. 일반적으로 웹접근성 화면 구현시 사용됩니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\n						showPlaceHolderOnReadOnly\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\n						읽기전용&nbsp;모드(readOnly="true"에서도&nbsp;placeholder&nbsp;속성으로&nbsp;지정된&nbsp;값을&nbsp;표시.&nbsp;&nbsp;true:&nbsp;표시.&nbsp;&nbsp;&nbsp;false&nbsp;(기본&nbsp;값):&nbsp;표시하지&nbsp;않음.&nbsp;&nbsp;&nbsp;관련&nbsp;속성:&nbsp;readOnly,&nbsp;placeholder\n						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'tabIndex'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'Tab Key를 이용 한 컴포넌트의 포커스 순서로 HTML의 tabindex속성과 동일한 기능을 제공합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'title'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						HTML의 title속성과 동일한 기능으로 명시 된 값을 브라우저에서 마우스 over시 툴팁형태로 표현한다. 일반적으로 웹접근성 작업 시 설정합니다. 일반적으로 웹접근성 작업 시 설정합니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'toolTip'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'웹스퀘어에서 만든 toolTip으로 컴포넌트의 추가정보를 명시합니다. 마우스 over시 표현됩니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'setCurrentDate'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						앵커를 이용해 책갈피로 이동시킬것인지 여부. renderDiv옵션이 false인 경우만 동작하며(inputCalendar가 table로 그려졌던 하위 버전의 옵션) 센스리더 사용자에겐 달력 열기 버튼을 사용할\n						수 없도록 하기 위해서 useAnchor=false를 줌.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'useCalendarTabIndex'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'useAnchor = false인 경우에도 달력에 tab키로 포커스 이동을 가능하게 할지에 대한 여부.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'validCheck'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						[default:false, true]input에 입력된 값이 유효한 날짜인지를 check하여 alert을 띄울지의 여부.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\n						visibleHourList\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\n						[default:1,2,...,23,24]&nbsp;시간이&nbsp;표시되는&nbsp;달력에서&nbsp;시간&nbsp;항목을&nbsp;설정하는&nbsp;속성.&nbsp;[,]를&nbsp;구분자로&nbsp;사용한다.&nbsp;&nbsp;&nbsp;(ex)&nbsp;calendarValueType="yearMonthDateTime",&nbsp;visibleHourList="5,10,15,20"&nbsp;인&nbsp;경우,&nbsp;시간&nbsp;목록&nbsp;선택&nbsp;시&nbsp;[5,10,15,20]&nbsp;목록만&nbsp;나타난다.&nbsp;&nbsp;(ex)&nbsp;https://inswave.com/jira/browse/SKT-691&nbsp;참조\n						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\n						visibleMinList\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\n						[default:1,2,...,59,60]&nbsp;분이&nbsp;표시되는&nbsp;달력에서&nbsp;분&nbsp;항목을&nbsp;설정하는&nbsp;속성.&nbsp;[,]를&nbsp;구분자로&nbsp;사용한다.&nbsp;&nbsp;&nbsp;(ex)&nbsp;calendarValueType="yearMonthDateTime",&nbsp;visibleMinList="0,5,10,15,20,25,30,35,40,45,50,55"&nbsp;인&nbsp;경우,&nbsp;분&nbsp;목록&nbsp;선택&nbsp;시&nbsp;5의&nbsp;배수&nbsp;목록만&nbsp;나타난다.&nbsp;&nbsp;(ex)&nbsp;https://inswave.com/jira/browse/SKT-691&nbsp;참조\n						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\n						visibleSecList\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\n						[default:1,2,...,59,60]&nbsp;초가&nbsp;표시되는&nbsp;달력에서&nbsp;초&nbsp;항목을&nbsp;설정하는&nbsp;속성.&nbsp;[,]를&nbsp;구분자로&nbsp;사용한다.&nbsp;&nbsp;&nbsp;(ex)&nbsp;calendarValueType="yearMonthDateTime",&nbsp;visibleSecList="0,5,10,15,20,25,30,35,40,45,50,55"&nbsp;인&nbsp;경우,&nbsp;초&nbsp;목록&nbsp;선택&nbsp;시&nbsp;5의&nbsp;배수&nbsp;목록만&nbsp;나타난다.&nbsp;&nbsp;(ex)&nbsp;https://inswave.com/jira/browse/SKT-691&nbsp;참조\n						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'weekStartsOn'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						[default:0, 1, 2, 3, 4, 5, 6]calendar의 시작 요일을 설정합니다(0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토)\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'wmode'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						[default:false, true] wmode 사용 여부로 항목이 object(activeX 또는 flash)에 가려 질 경우 해당 속성을 사용합니다. wmode가 true이면 object 태그보다 상위에\n						보이도록 하는 설정으로 본 컴포넌트에 wmode를 설정하는 것이 아닌 object(activeX, flash 등)태그의 wmode를 사용하는 것을 권장합니다.\n					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'yearSuffix'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						연도 selectbox의 display되는 값의 숫자(연도) 뒤에 들어갈 문자열. 연도만 display 시킬 때는 $blank로 정의합니다.\n					'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'03. CSS Overriding',class:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tbl'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:20%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Class'}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Description'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'w2inputCalendar_div'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\n						w2inputCalendar_div 는 웹스퀘어 엔진에서 정의된 클래스입니다, 기본적으로 html 로 떨구는 시점에서 자동으로 부여됩니다\n					'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'msgbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Tip',class:'',tagname:'h3'}}]},{T:1,N:'w2:textbox',A:{class:'txt_info',id:'',label:'Property의 calendarClass는 팝업으로 뜨는 캘린더에 대한 class 입니다.<br/>Property에서 ‘customClass’를 입력했을 경우, DOM 상에서는 클래스가 .w2calendar_customClass로 들어가므로 해당 css 파일에서는 클래스명을 .w2calendar_customClass로 선언하여 수정해야 합니다.',style:''}}]}]}]}]}]})