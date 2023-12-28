/*amd /ex/datadown.xml 4855 46a64d0084569698dd7388098f2b7a717bfcc847bc429b5d563144788bd0b6d2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'1'}]},{T:1,N:'col2',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'2'}]},{T:1,N:'col2',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'3'}]},{T:1,N:'col2',E:[{T:4,cdata:'5'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'1'}]},{T:1,N:'col2',E:[{T:4,cdata:'4'}]},{T:1,N:'col3',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col3',E:[{T:4,cdata:'6'}]},{T:1,N:'col2',E:[{T:4,cdata:'7'}]},{T:1,N:'col1',E:[{T:4,cdata:'9'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'7'}]},{T:1,N:'col2',E:[{T:4,cdata:'5'}]},{T:1,N:'col3',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col3',E:[{T:4,cdata:'3'}]},{T:1,N:'col2',E:[{T:4,cdata:'2'}]},{T:1,N:'col1',E:[{T:4,cdata:'4'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.trigger1_onclick = function(e) {
    var opt = {
        common:{
            fileName: "d.xlsx",
            multipleSheet:"true",
            showProcess:false
        },
        excelInfo:[
            {
                dataListId : "dataList1",
                sheetName: "No. 1",
                removeColumns: "",
                wframeId: ""
            },
            {
                dataListId : "dataList2",
                sheetName: "No. 2",
                removeColumns: "",
                wframeId: ""
            }
        ]
    };
    WebSquare.util.multipleDataListDownload(opt);
};


scwin.trigger2_onclick = function(e) {
    var opt = {
        common:{
            fileName: "d.xlsx",
            multipleSheet:"true",
            showProcess:false
        },
        excelInfo:[
            {
                dataListId : "dataList1",
                sheetName: "No. 1",
                removeColumns: "",
                wframeId: ""
            },
            {
                dataListId : "dataList2",
                sheetName: "No. 2",
                removeColumns: "",
                wframeId: ""
            },
            {
                dataListId : "dataList1",
                sheetName: "No. 3",
                removeColumns: "",
                wframeId: "w1"
            }
        ]
    };
    WebSquare.util.multipleDataListDownload(opt);
};



}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메인데이터'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger2',style:'width: 80px;height: 23px;','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'모든데이터'}]}]},{T:1,N:'w2:wframe',A:{style:'width: 500px;height: 300px;margin-bottom:200px;',id:'w1',src:'/ex/GridView1.xml'}},{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'gv1',style:'width: 500px;height: 150px;',dataList:'data:dataList1'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'name2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col2',value:'',displayMode:'label'}}]}]}]}]}]}]})