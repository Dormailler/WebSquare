/*amd /ex/GridView1.xml 8241 12f74e339b556231a71286191dce8121e21f99a0a1d1d85dbe177e7749d232ab */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'1'}]},{T:1,N:'col2',E:[{T:4,cdata:'1'}]},{T:1,N:'col3',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col2',E:[{T:4,cdata:'2'}]},{T:1,N:'col1',E:[{T:4,cdata:'2'}]},{T:1,N:'col3',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'3'}]},{T:1,N:'col2',E:[{T:4,cdata:'3'}]},{T:1,N:'col3',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'3'}]},{T:1,N:'col3',E:[{T:4,cdata:'2'}]},{T:1,N:'col2',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'11'}]},{T:1,N:'col2',E:[{T:4,cdata:'11'}]},{T:1,N:'col3',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col3',E:[{T:4,cdata:'3'}]},{T:1,N:'col2',E:[{T:4,cdata:'3'}]},{T:1,N:'col1',E:[{T:4,cdata:'11'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	scwin.trigger1_onclick = function(e) {
    var opt = {
        "headerExist":1,
        "dateFormat":"MM-DD-yyyy"
        };
    opt.removeColumns = "0,1";
    gv1.advancedExcelUpload(opt);
    };

};


scwin.trigger2_onclick = function(e) {
    gv2.mergeByCol();
};

scwin.trigger3_onclick = function(e) {
    gv3.mergeFocusedCell();
};

scwin.trigger4_onclick = function(e) {
    gv3.mergeSplitFocusedCell();
};

scwin.trigger5_onclick = function(e) {
    gv3.mergeByCol();
};

scwin.trigger6_onclick = function(e) {
    gv3.mergeClear();
};

scwin.trigger7_onclick = function(e) {
    gv3.mergeByFree(0,0,2,2);
};

scwin.trigger8_onclick = function(e) {
    gv3.unmergeByFree(0,0); // 시작점
};

scwin.trigger9_onclick = function(e) {
    gv3.mergeCol(2,false); // 2번 열 제외 병합
    gv3.mergeByCol();
};

scwin.trigger10_onclick = function(e) {
    var status = gv3.getMerged(2, 2);
    alert(status);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'gv1',style:'width: 100%;height: 150px;float: left;',dataList:'data:dataList2',useFilterList:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header3'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column16',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'name2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column14',value:'name3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'name4',displayMode:'label',useFilter:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column12',value:'name5',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column11',value:'name6',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column10',value:'name7',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column9',value:'name8',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody3'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col6',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col8',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀업로드'}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'gv3',style:'width: 500px;height: 150px;clear:both;',dataList:'data:dataList1'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'name2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'name3',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col3',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger3',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'포커스 병합'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger4',style:'width: 100px;height: 23px;','ev:onclick':'scwin.trigger4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'포커스 병합 해제'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger5',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger5_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'열 병합'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger6',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger6_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'병합 해제'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger7',style:'width: 100px;height: 23px;','ev:onclick':'scwin.trigger7_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'특정 영역 병합'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger8',style:'width: 100px;height: 23px;','ev:onclick':'scwin.trigger8_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영역 병합 해제'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger9',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger9_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'열 병합(제외)'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger10',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger10_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상태확인'}]}]}]}]}]})