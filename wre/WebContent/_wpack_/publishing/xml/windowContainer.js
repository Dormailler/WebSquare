/*amd /publishing/xml/windowContainer.xml 25185 450e5d7cbd9e151b225678beee2ad259ac59dd3190c673aa1531a0e74d2409a3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	wc1.createWindow( "contaner1" ,  null, "/ws/xml/component/anchor.xml" , "contaner1");
    wc1.createWindow( "contaner2" ,  null, "/ws/xml/component/article.xml" , "contaner2");
    wc1.createWindow( "contaner3" ,  null, "/ws/xml/component/autoComplete.xml" , "contaner3");
	
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'Publishing Template - WindowContainer',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'여러 개의 화면을 화면을 제어하는 툴바와 함께 관리하기 위한 컴포넌트입니다.<br/>',class:'txt_guide'}}]},{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'01. Sample',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{id:'',class:'rt'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',name:'',style:'',href:'/ws/download/windowContainer.zip',id:'',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Download'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'msgbox'},E:[{T:1,N:'w2:windowContainer',A:{class:'wq_winc',defaultHeight:'300',defaultWidth:'300',fixArrangeFullScreen:'true',hideTitleOnMaximize:'true',horizontalArrangeNum:'2',id:'wc1',sequentialArrangeColNum:'2',sequentialArrangeRowNum:'2',spaInitCount:'2',style:'height:300px;position:relative;',toolbarPosition:'top',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'true',useControlIconTitle:'false',useFixButton:'true',useStatusMsg:'true',verticalArrangeNum:'2',windowAutoResize:'false',windowMaxNum:'5',windowMaximizeAll:'false',windowTooltipDisplay:'true',useNameContainer:'true',controlIconPosition:'allright',frameMode:'wframe'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:nameLayer'},{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:selectedNameLayer'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'02. Property',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'wq_tb w2tb tbl'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:20%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Property'}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Description'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'class'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'사용자가 임의의 class를 정의할때 사용합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'confirmFalseAction'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'같은 경로의 화면을 중복해서 열었을 경우 중복 확인 메세지에서 아니오를 선택했을때의 동작을 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'confirmMessage'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'같은 경로의 화면을 중복해서 열었을 경우 나오는 중복 확인 메세지를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'confirmTrueAction'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'같은 경로의 화면을 중복해서 열었을 경우 중복 확인 메세지에서 예를 선택했을때의 동작을 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						controlIconPosition\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						[default:left]&nbsp;windowContainer&nbsp;제어&nbsp;아이콘의&nbsp;위치.&nbsp;단,&nbsp;useNameContainer&nbsp;속성이&nbsp;true일&nbsp;경우&nbsp;작동한다.\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'defaultHeight'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'윈도우 기본 높이를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'defaultWidth'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'윈도우 기본 너비를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'fixArrangeFullScreen'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'현재 윈도우수가 arrangeNum보다 작을때 화면을 전부 사용할지 여부를 설정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'hideTitleOnMaximize'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\r\n    						윈도우의 타이틀 부분을 최대화시 숨길지 여부를 설정합니다.(숨겨진 경우는 maximize 또는 restore는 controlIcon에서 할 수 있습니다.)\r\n    					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'horizontalArrangeNum'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'고정 버튼을 사용할 경우, 수평 정렬시 정렬시킬 화면개수를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'id'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'사용자가 임의의 id를 정의할때 사용합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'lineBreakNum'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'수평,수직 정렬시 현재 윈도우의 개수가 해당 값 이상일때 개행 시킬지 설정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'minimumHeight'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'윈도우 최소 높이를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'minimumWidth'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'윈도우 최소 너비를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						nameLayerMoveGap\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						[default:&nbsp;110]&nbsp;useNameContainer&nbsp;옵션&nbsp;사용시&nbsp;좌우&nbsp;이동버튼으로&nbsp;nameLayer를&nbsp;이동시킬&nbsp;거리&nbsp;(단위:px)\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						restoreWinSize\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						[default:false,&nbsp;true]&nbsp;초기&nbsp;window생성시&nbsp;defaultHeight,&nbsp;defaultWidth로&nbsp;설정했던&nbsp;가로/세로&nbsp;크기로&nbsp;나타남.&nbsp;&nbsp;&nbsp;관련&nbsp;API&nbsp;:&nbsp;restoreWindowSize\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'sequentialArrangeColNum'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'고정 버튼을 사용할 경우, 바둑판 정렬시 정렬시킬 화면 col의 값입니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'sequentialArrangeRowNum'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'고정 버튼을 사용할 경우, 바둑판 정렬시 정렬시킬 화면 row의 값입니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'spaInitCount'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\r\n    						windowContainer생성 시 spa용 iframe을 미리 생성해 둘 개수를 지정합니다. iframe을 미리 생성하여 createWindow 속도를 향상킬수 있습니다. 0보다 큰 값일 경우\r\n    						spa모드로 동작하며 0이 아닌경우 일반적으로 windowMaxNum과 같은 값을 설정합니다.\r\n    					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'statusMsg'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'window 기본 상태 메세지를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						spaAuto\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						[default:false,&nbsp;true]&nbsp;spa&nbsp;모드&nbsp;사용&nbsp;시&nbsp;빈iframe을&nbsp;createWindow가&nbsp;일어난&nbsp;후에&nbsp;1개씩만&nbsp;생성하도록&nbsp;하는&nbsp;속성.&nbsp;&nbsp;이&nbsp;속성은&nbsp;spaInitCount보다&nbsp;우선순위가&nbsp;높다.&nbsp;즉&nbsp;이&nbsp;속성이&nbsp;true이면&nbsp;spaInitCount&nbsp;설정은&nbsp;무시된다.&nbsp;&nbsp;창이&nbsp;최대로&nbsp;생성된&nbsp;경우에는&nbsp;빈&nbsp;iframe을&nbsp;생성하지&nbsp;않는다.&nbsp;&nbsp;&nbsp;(버전&nbsp;정보:&nbsp;5.0_2.2777B.20170904.121217&nbsp;버전에서&nbsp;추가)\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						spaAutoDelay\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						[default:false,&nbsp;true]&nbsp;spaAuto&nbsp;속성&nbsp;사용&nbsp;시&nbsp;createWindow를&nbsp;수행한&nbsp;후&nbsp;몇&nbsp;ms&nbsp;지난&nbsp;후에&nbsp;빈&nbsp;iframe을&nbsp;생성할지를&nbsp;지정하는&nbsp;속성.&nbsp;&nbsp;이&nbsp;속성값보다&nbsp;적은&nbsp;간격으로&nbsp;createWindow가&nbsp;연속적으로&nbsp;호출된&nbsp;경우,&nbsp;마지막&nbsp;createWindow가&nbsp;호출된&nbsp;후에&nbsp;빈&nbsp;iframe을&nbsp;1개&nbsp;생성한다.&nbsp;&nbsp;&nbsp;기본값은&nbsp;3000ms.&nbsp;즉&nbsp;createWindow가&nbsp;호출되고&nbsp;3초&nbsp;뒤에&nbsp;빈&nbsp;iframe을&nbsp;생성한다.&nbsp;&nbsp;&nbsp;(버전&nbsp;정보:&nbsp;5.0_2.2777B.20170904.121217&nbsp;버전에서&nbsp;추가)\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						spaReplaceHistory\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						SPA&nbsp;사용&nbsp;시&nbsp;Window&nbsp;영역(IFrame&nbsp;내부)의&nbsp;history(앞으로&nbsp;가기&nbsp;및&nbsp;뒤로&nbsp;가기)&nbsp;동작을&nbsp;금지.&nbsp;&nbsp;&nbsp;&nbsp;IFrame&nbsp;내부&nbsp;페이지의&nbsp;뒤로&nbsp;가기&nbsp;동작을&nbsp;막아서&nbsp;blank&nbsp;페이지로&nbsp;이동하지&nbsp;않는&nbsp;효과.&nbsp;이&nbsp;경우,&nbsp;뒤로&nbsp;가기를&nbsp;수행&nbsp;할&nbsp;경우&nbsp;브라우저&nbsp;전체가&nbsp;뒤로&nbsp;이동.&nbsp;&nbsp;&nbsp;true:&nbsp;뒤로&nbsp;가기&nbsp;및&nbsp;앞으로&nbsp;가기&nbsp;동작을&nbsp;금지.&nbsp;&nbsp;&nbsp;false&nbsp;(기본&nbsp;값):&nbsp;동작을&nbsp;허용.\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						spaReplaceHistory\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						SPA&nbsp;사용&nbsp;시&nbsp;Window&nbsp;영역(IFrame&nbsp;내부)의&nbsp;history(앞으로&nbsp;가기&nbsp;및&nbsp;뒤로&nbsp;가기)&nbsp;동작을&nbsp;금지.&nbsp;&nbsp;&nbsp;&nbsp;IFrame&nbsp;내부&nbsp;페이지의&nbsp;뒤로&nbsp;가기&nbsp;동작을&nbsp;막아서&nbsp;blank&nbsp;페이지로&nbsp;이동하지&nbsp;않는&nbsp;효과.&nbsp;이&nbsp;경우,&nbsp;뒤로&nbsp;가기를&nbsp;수행&nbsp;할&nbsp;경우&nbsp;브라우저&nbsp;전체가&nbsp;뒤로&nbsp;이동.&nbsp;&nbsp;&nbsp;true:&nbsp;뒤로&nbsp;가기&nbsp;및&nbsp;앞으로&nbsp;가기&nbsp;동작을&nbsp;금지.&nbsp;&nbsp;&nbsp;false&nbsp;(기본&nbsp;값):&nbsp;동작을&nbsp;허용.\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						stopMinimizeOnNameLayer\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						선택된&nbsp;윈도우의&nbsp;네임레이어&nbsp;클릭시&nbsp;최소화하지&nbsp;않고&nbsp;윈도우의&nbsp;크기&nbsp;유지할지&nbsp;여부\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'toolbarPosition'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'툴바의 위치를 지정합니다. 위와 아래중 하나를 선택할수 있습니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'tooltipDisplay'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'네임레이어(툴바라인에 나오는 각 윈도우의 이름창)에 나오는 툴팁을 사용할지를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'tooltipGroupClass'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'툴팁에 w2group 클래스 사용여부를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						tabIndex\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						Tab&nbsp;Key를&nbsp;이용&nbsp;한&nbsp;컴포넌트의&nbsp;포커스&nbsp;순서로&nbsp;HTML의&nbsp;tabindex속성과&nbsp;동일한&nbsp;기능을&nbsp;제공한다.\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'useCloseButton'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'네임레이어(툴바라인에 나오는 각 윈도우의 이름창)에 닫기버튼 사용여부를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'useConfirmMessage'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'중복 윈도우 생성시 확인메세지 사용여부를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'useControlIconTitle'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\r\n    						controlIcon (수평,수직,계단,바둑판,닫기버튼)에 title을 넣을 것인지를 결정하는 옵션입니다.\r\n    					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'useFixButton'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'네임레이어(툴바라인에 나오는 각 윈도우의 이름창)의 고정버튼 사용여부를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'useStatusMsg'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'Window 상태 메시지 사용 유무를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\r\n    						useNameContainer\r\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{style:'',id:'',label:'SP2',class:'txt_info'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:3,text:'\r\n    						[default:false]&nbsp;툴바에&nbsp;생성되는&nbsp;네임레이어를&nbsp;div로&nbsp;감쌀지를&nbsp;결정하는&nbsp;속성.\r\n    						'},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'verticalArrangeNum'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'고정 버튼을 사용할 경우, 수직 정렬시 정렬시킬 화면개수를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'windowAutoResize'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'setSize()시 하위 윈도우들의 위치 및 크기의 재정렬 여부를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'windowMaximizeAll'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'윈도우의 사이즈 최대화 동시 변경 사용여부를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'windowMaxNum'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'최대 윈도우 갯수를 지정합니다.'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'windowTooltipDisplay'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'창의 헤더에 툴팁 사용여부를 지정합니다.'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'03. CSS Overriding',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'wq_tb w2tb tbl'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:300px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Class'}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'Description'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'w2windowContainer'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\r\n    						w2windowContainer는 웹스퀘어 엔진에서 정의된 클래스입니다, 기본적으로 html 로 떨구는 시점에서 자동으로 부여됩니다. windowContainer 전체를 감싼 태그 입니다.\r\n    					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'w2windowContainer_window'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\r\n    						w2windowContainer_windoww2windowContainer는 웹스퀘어 엔진에서 정의된 클래스입니다, 기본적으로 html 로 떨구는 시점에서 자동으로 부여됩니다.\r\n    						windowContainer의 메뉴바를 제외한 전체 화면창입니다.\r\n    					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'w2windowContainer_windowToolbar'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\r\n    						w2windowContainer_windowToolbar는 웹스퀘어 엔진에서 정의된 클래스입니다, 기본적으로 html 로 떨구는 시점에서 자동으로 부여됩니다. windowContainer의 메뉴바\r\n    						영역입니다.\r\n    					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\r\n    						w2windowContainer_controlIconLayer,<br/> w2windowContainer_controlIconLayer_extend\r\n    					'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\r\n    						w2windowContainer_controlIconLayer w2windowContainer_controlIconLayer_extend는 웹스퀘어 엔진에서 정의된 클래스입니다, 기본적으로 html 로\r\n    						떨구는 시점에서 자동으로 부여됩니다. windowContainer의 메뉴버튼 영역입니다.\r\n    					'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'w2windowContainer_name'}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:3,text:'\r\n    						w2windowContainer_name는 웹스퀘어 엔진에서 정의된 클래스입니다, 기본적으로 html 로 떨구는 시점에서 자동으로 부여됩니다. windowContainer의 임레이어들의 영역입니다.\r\n    					'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'msgbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h4',style:'',id:'',label:'Tip',class:''}}]},{T:1,N:'w2:textbox',A:{class:'txt_info',id:'',label:'보통 레이아웃용으로 쓰입니다.<br/>WindowContainer를 사용하기 위해서는 position 이 relative 혹은 absolute여야 합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'txt_info',id:'',label:'상단 컨트롤 버튼박스 오른쪽으로 이동 시키려고 할때 소스창에 아래 속성 추가<br/>useNameContainer="true"<br/>controlIconPosition="right" (Icon은 I대문자)',style:''}},{T:1,N:'w2:textbox',A:{class:'txt_info',id:'',label:'window를 생성(open)하는 API<br/>windowContaninerID.createWindow( title , iconUrl , src , windowTitle , windowId , openAction , closeAction , windowTooltip ) <br/>예) wc1.createWindow( "contaner1" , &nbsp;null, "xml/component/anchor.xml" , "contaner1");',style:''}}]}]}]}]}]})