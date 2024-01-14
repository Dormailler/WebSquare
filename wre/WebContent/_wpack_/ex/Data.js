/*amd /ex/Data.xml 2587 c1b8f82723be05fc3db605bbde0102b85846ef64d4d244a8f2582c5773106cad */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

scwin.trigger1_onclick = function(e) {
    var opt = {
        "id":"data1",
        "type":"dataList",
        "option":{
            "baseNode":"list",
            "repeatNode":"map"
        },
        "columnInfo":[
            {
                "id":"JSON_Code",
                "name":"JSON_Code",
                "dataType":"text"
            },
            {
                "id":"JSON_CodeName",
                "name":"JSON_CodeName",
                "dataType":"text"
            }
        ]
    };
    $p.data.create(opt);
};

scwin.trigger2_onclick = function(e) {
    var arr1 = [];
    for(var i=0; i<5; i++){
        for(var j=0; j<4; j++){
            arr1[i*4+j] = "JSON_" + i+j;
        }
    }
    data1.setData(arr1);
};

scwin.trigger3_onclick = function(e) {
    var scId = "";
    var opt = {
        common:{
            fileNmae:"a.xlsx",
            multipleSheet:"true",
            showProcess:false
        },
        excelInfo:[
            {
                dataListId:"data1",
                sheetName:"JSON",
                removeColumn:"",
                wframeId:scId
            }
        ]
    };
    WebSquare.util.multipleDataListDownload(opt);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'trigger1',style:'position:absolute; top:25px; left:33px; width:123px; height:48px; ','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.data.create'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger2',style:'position:absolute; top:25px; left:183px; width:166px; height:57px; ','ev:onclick':'scwin.trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'data1.setData'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'trigger3',style:'position:absolute; top:33px; left:374px; width:180px; height:41px; ','ev:onclick':'scwin.trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'multiDataListDown'}]}]}]}]}]})