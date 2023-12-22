/*amd /page/P00304.xml 9910 1f3eb6215cb1e3e6e8845fc9e0201f174b2413f69d5e96c5a4772362ad724ce2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:'',nextTabID:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'입력 컴포넌트에서 "Tab"키를 눌렀을 때 Focus 이동을 제어하는 예제입니다.<br/>해당 예제는 nextTabId를 이용한 방식입니다.<br/>- nextTabId: 입력 컴포넌트를 선택한 상태에서 "Tab"키를 눌렀을 때 Focus를 이동할 컴포넌트의 ID',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Tab 순차 이동',style:'',nextTabID:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'컴포넌트를 선택하고 "Tab"키를 눌렀을 때 번호 순서대로 이동하는 것을 확인합니다.<br/>단, nextTabId가 설정된 컴포넌트가 readOnly나 disabled 옵션이 true로 설정된 경우 생략하고 다음 컴포넌트로 이동합니다.',style:''}},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:125px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'SelectBox'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'slt',ref:'',renderType:'',style:'width:65%;',submenuSize:'auto',nextTabID:'ipt1',chooseOptionLabel:'- 선택 -'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Select 1'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Select 2'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'w2:span',A:{id:'',label:'(1)',style:'color: red;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:3,text:'\n										InputBox\n										'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:''}},{T:1,N:'xf:group',A:{id:''}},{T:1,N:'xf:group',A:{id:''}},{T:1,N:'xf:input',A:{class:'',id:'ipt1',placeholder:'',style:'width:65%;',nextTabID:'ica'}},{T:1,N:'w2:span',A:{id:'',label:'(2)',style:'color: red;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:3,text:'\n										InputCalendar\n										'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{footerDiv:'true',rightAlign:'false',focusOnDateSelect:'false',style:'width:65%;',id:'ica',renderType:'',renderDiv:'true',calendarValueType:'yearMonthDate',nextTabID:'ipt2'}},{T:1,N:'w2:span',A:{id:'',label:'(3)',style:'color: red;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:3,text:'\n										InputBox&nbsp;-&nbsp;readOnly\n										'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{nextTabID:'acb',style:'width:65%;',id:'ipt2',placeholder:'',class:'',readOnly:'true'}},{T:1,N:'w2:span',A:{id:'',label:'(4)',style:'color: red;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:3,text:'AutoComplete'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb',style:'width:65%;',submenuSize:'auto',search:'start',nextTabID:'rad',allOption:'',chooseOption:'true',ref:'',autoFocus:'true',chooseOptionLabel:'- 선택 -'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'01'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'02'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'03'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]},{T:1,N:'w2:span',A:{id:'',label:'(5)',style:'color: red;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:3,text:'Radio'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'rad',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'1',style:'width:65%;',nextTabID:'btn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'A'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'B'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'w2:span',A:{style:'color: red;',id:'',label:'(6)'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:3,text:'Button'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{style:'width:65%;',id:'btn',type:'button',class:'btn_cm',nextTabID:'ipt3'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인라인버튼'}]}]},{T:1,N:'w2:span',A:{id:'',label:'(7)',style:'color: red;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:3,text:'InputBox&nbsp;-&nbsp;disabled'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ipt3',placeholder:'',style:'width:65%;',disabled:'true',nextTabID:'slt'}},{T:1,N:'w2:span',A:{id:'',label:'(8) -> (1)',style:'color: red;'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'maxLength를 활용한 Focus 이동',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'maxLength 옵션을 설정하면 입력한 자릿수 이상 입력했을 때 nextTabId로 설정된 컴포넌트로 이동합니다.<br/>입력 컴포넌트에 숫자를 입력합니다.<br/>각각 4, 6, 8자리가 입력된 이후에 입력을 하면 다음 컴퍼넌트로 포커스가 이동합니다.',style:''}},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:125px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:3,text:'maxLength&nbsp;4'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{autoFocus:'true',class:'',id:'ipt_max1',maxlength:'4',nextTabID:'ipt_max2',placeholder:'',style:'width:65%;',dataType:'number'}},{T:1,N:'w2:span',A:{id:'',label:'(1)',style:'color: red;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:3,text:'maxLength&nbsp;6'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{autoFocus:'true',class:'',dataType:'number',id:'ipt_max2',maxlength:'6',nextTabID:'ipt_max3',placeholder:'',style:'width:65%;'}},{T:1,N:'w2:span',A:{id:'',label:'(2)',style:'color: red;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:3,text:'maxLength&nbsp;8'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{autoFocus:'true',class:'',id:'ipt_max3',maxlength:'8',nextTabID:'ipt_max1',placeholder:'',style:'width:65%;',dataType:'number'}},{T:1,N:'w2:span',A:{id:'',label:'(3) -> (1)',style:'color: red;'}}]}]}]}]}]}]}]}]}]}]}]})