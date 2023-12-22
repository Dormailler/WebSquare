/*amd /page/P00033.xml 6077 ce75f9ded87d053cedeb116004d929324f3198a2c10ab5aee7d7ab545745439d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_request'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'name',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addr',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'name',E:[{T:4,cdata:'WebSquare'}]},{T:1,N:'addr',E:[{T:4,cdata:'Seoul'}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dc_resUserListData',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'name',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'birthday',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'height',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weight',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gender',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_example1',ref:'data:json,dma_request',target:'data:json,dc_resUserListData',action:'/data/sampleData/sampleData_json_dc_list.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_example1_submitdone','ev:submiterror':'scwin.sbm_example1_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * [실행1] 클릭 시
 * $p.getSubmission( submissionID );
 * ex) $p.getSubmission("sbm_example1");
 */
scwin.btn_ex1_onclick = function (e) {
    var tmpRet;
    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex1_onclick 실행 **", txa_log, false);
    $c.frame.printExampleLog('$p.getSubmission("sbm_example1");', txa_log, false);
    $c.frame.printExampleLog('"sbm_example1" ID를 가진 submission객체가 반환됩니다. 브라우저 개발자 도구의 콘솔을 확인하세요.', txa_log, false);

    //submisison 객체 반환 - "sbm_example1" ID를 가진 submission을 반환합니다.
    //반환 받은 객체의 속성을 재정의하여 사용할 수 있습니다.
    tmpRet = $p.getSubmission("sbm_example1");

    console.log('$p.getSubmission("sbm_example1"); 반환값 : ', tmpRet);

    //반환값 예시 - 주요 속성으로만 구성
    /*
    {
        action: "/data/sampleData/sampleData_json_dc_list.json"
        id: "wq_uuid_1483_udc_wfm_example_sbm_example1"
        mediatype: "application/json"
        method: "post"
        mode: "asynchronous"
        ref: "data:json,dma_request"
        singleMode: false
        submitDoneHandler: "scwin.sbm_example1_submitdone"
        submitErrorHandler: "scwin.sbm_example1_submiterror"
        target: "data:json,dc_resUserListData"
        timeout: ""
    }
    */
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb mb_def'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:'text-align: left;'},E:[{T:3,text:'Submission&nbsp;객체&nbsp;반환받기\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행1'}]}]},{T:1,N:'w2:textbox',A:{class:'mr_def',escape:'false',id:'',label:'$p.getSubmission( submissionID );',style:'',tagname:'samp'}},{T:1,N:'w2:textbox',A:{class:'mr_def com_example_inline_code',escape:'false',id:'',label:'//[scwin.btn_ex1_onclick] 함수를 참고하세요',style:'',tagname:'code'}}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb mb_def',id:'grp_form',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb mb_def',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n						로그&nbsp;출력\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false',id:'btn_clearLog',style:'',type:'button','ev:onclick':'scwin.btn_clearLog_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 200px;'}}]}]}]}]}]}]}]})