/*amd /ex/multiExcelDown.xml 5801 d9c9d1579f5e295c747caed690c303d6608b4269f876e740f0da2a528a1dd04f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'d1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'a'}]},{T:1,N:'col2',E:[{T:4,cdata:'a'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'bb'}]},{T:1,N:'col2',E:[{T:4,cdata:'b'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'d2',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'a'}]},{T:1,N:'col2',E:[{T:4,cdata:'a'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'bb'}]},{T:1,N:'col2',E:[{T:4,cdata:'b'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'d3',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'a'}]},{T:1,N:'col2',E:[{T:4,cdata:'a'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'bb'}]},{T:1,N:'col2',E:[{T:4,cdata:'b'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	scwin.trigger1_onclick = function(e) {
    var opt = {
        common:{
            fileName: "grid.xlsx",
            multipleSheet:"true",
            showProcess:false
        },
        excelInfo:[
            {
                gridId : "gv1",
                sheetName: "No. 1",
                removeColumns: "",
                wframeId: ""
            },
            {
                gridId : "gv2",
                sheetName: "No. 2",
                removeColumns: "",
                wframeId: ""
            },
            {
                gridId : "gv3",
                sheetName: "No. 3",
                removeColumns: "",
                wframeId: ""
            },
            {
                gridId : "gv1",
                sheetName: "No. 4",
                removeColumns: "",
                wframeId: "w1"
            }
        ]
    };
    WebSquare.util.multipleExcelDownload(opt);
};
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다중엑셀다운'}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'gv1',style:'width: 500px;height: 150px;',dataList:'data:d1'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'name2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col2',value:'',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'gv2',style:'width: 500px;height: 150px;',dataList:'data:d2'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'name2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col2',value:'',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'gv3',style:'width: 500px;height: 150px;',dataList:'data:d3'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'name2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col2',value:'',displayMode:'label'}}]}]}]},{T:1,N:'w2:wframe',A:{style:'width: 500px;height: 300px;',id:'w1',src:'/ex/datadown.xml'}}]}]}]})