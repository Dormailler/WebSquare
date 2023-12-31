/*amd /page/P00047.xml 9833 5c860ba71eff3a34af478d30580e58dca9f1f9c02917c1b5856dea53619c9e8e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_calendar',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'from',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'to',name:'종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'title',name:'일정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'validYN',name:'유효여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errorMessage',name:'오류 메시지',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:linkedDataList',A:{bind:'dlt_calendar',id:'ldt_view_schedualCalendar'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'validYN==\'Y\''}]},{T:1,N:'w2:condition',A:{type:'sort'}}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

    //화면 로딩 시 데이터 할당.
    scwin.setInitData();
};

/**
 * 현재일 기준 스케줄 등록
 */
scwin.setInitData = function () {
    var strCurDate;

    strCurDate = $p.getCurrentServerDate("yyyyMMdd");

    //초기 스케줄 등록
    dlt_calendar.setJSON([
        {
            "from": strCurDate,
            "to": strCurDate,
            "title": "오늘은 칼퇴",
            "validYN": "Y",
            "errorMessage": "",
        }, {
            "from": $p.dateAdd(strCurDate, 4),
            "to": $p.dateAdd(strCurDate, 8),
            "title": "여행",
            "validYN": "Y",
            "errorMessage": "",
        },
    ]);
};

scwin.btn_add_onclick = function (e) {
    var numIdx;
    numIdx = dlt_calendar.insertRow();

    grd_schedule.setFocusedCell(numIdx, "title", true);

};

scwin.btn_del_onclick = function (e) {
    var _focusIdx = grd_schedule.getFocusedRowIndex();
    dlt_calendar.removeRow(_focusIdx);
};

/**
 * grd_schedule의 oncellclick 이벤트 핸들러
 */
scwin.grd_schedule_oncellclick = function (row, col, colId) {
    switch (colId) {
        case "btn_del":
            //삭제 버튼 클릭 시 데이터를 제거합니다.
            dlt_calendar.removeRow(row);
            break;
        case "validYN": //등록 여부
            let jsnRowData = dlt_calendar.getRowJSON(row);
            if (jsnRowData.validYN === "N") {
                alert((jsnRowData.errorMessage || "오류 메시지가 없습니다.").replace(new RegExp("<br/>", "g"), "\n"));
            }
            break;
        default:
            break;
    }
};

/**
 * grd_schedule의 onafteredit 이벤트 핸들러
 * 입력값의 유효성을 체크합니다.
 */
scwin.grd_schedule_onafteredit = function (row, col, value) {
    var jsnData;
    var strMsg;
    var strValidYN;

    //수정이 일어난 행의 json 데이터 추출
    jsnData = dlt_calendar.getRowJSON(row);

    //유효성 체크 - 초기값 Y
    strValidYN = "Y";
    //오류 시 메시지 처리
    strMsg = "";

    //일정명 확인
    if (!jsnData.title) {
        strMsg += "- 일정명이 누락되었습니다." + "<br/>";
        strValidYN = "N";
    }

    //시작일과 종료일 유효성 체크
    let arrColInfo = [
        { col: "from", label: "시작일" },
        { col: "to", label: "종료일" },
    ];
    let i_max = arrColInfo.length;
    let isDateError = false;
    for (let i = 0; i < i_max; i++) {
        let item = arrColInfo[i];

        let strDate = (jsnData[item.col]).replaceAll("-", "");

        if (!strDate) {
            strMsg += "- " + item.label + "이 누락되었습니다." + "<br/>";
            strValidYN = "N";
            isDateError = true;
        } else {
            if (strDate.length != 8) {
                strMsg += "- " + item.label + "은 yyyyMMdd 형식으로 입력되어야 합니다. ex)19450815" + "<br/>";
                strValidYN = "N";
                isDateError = true;
            }
        }

        jsnData[item.col] = strDate;
    }

    if (!isDateError) {
        let numDateDiff = $p.dateDiff(jsnData.from, jsnData.to);
        if (numDateDiff < 0) {
            strMsg += "- 종료일이 시작일보다 빠릅니다." + "<br/>";
            strValidYN = "N";
        }
    }

    jsnData.validYN = strValidYN;
    jsnData.errorMessage = strMsg;
    delete jsnData.rowStatus;

    dlt_calendar.setRowJSON(row, jsnData, true);
};

scwin.grd_schedule_validYN_displayFormatter = function (argValue) {
    var returnValue;
    switch (argValue) {
        case "Y":
            returnValue = '<span style="color:blue;">정상</span>';
            break;
        case "N":
            returnValue = '<span style="color:red;">오류(원인 보기)</span>';
            break;
        default:
            returnValue = "";
            break;
    }

    return returnValue;
};

/**
 * grd_schedule의 tooltipFormatter 핸들러
 */
scwin.grd_schedule_tooltipFormatter = function (argRow, argCol, argValue) {
    var returnValue = "";

    //그리드 컬럼 id가 validYN(등록여부) 인 경우만 처리 
    if (grd_schedule.getColumnID(argCol) == "validYN") {
        returnValue = dlt_calendar.getCellData(argRow, "errorMessage");
    }

    return returnValue;

};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView와 ScheduleCalendar 컴포넌트를 활용하여 구성한 화면 입니다.<br/>버튼[일정추가]를 클릭하면 GridView에 일정을 입력합니다.<br/>입력한 일정이 유효하면 ScheduleCalendar에 일정이 출력됩니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 시연용 예제로 예제 가이드 문서가 포함되어 있지 않습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'ofh mb_def',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'','ev:onclick':'scwin.btn_add_onclick',id:'btn_add',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일정 추가'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{tooltipFormatter:'scwin.grd_schedule_tooltipFormatter','ev:oncellclick':'scwin.grd_schedule_oncellclick',editModeEvent:'onclick',scrollByColumnAdaptive:'false',rowNumVisible:'true',keepDefaultColumnWidth:'true',rowNumHeaderValue:'NO',scrollByColumn:'false',defaultCellHeight:'26',tooltipShowAlwaysColumns:'validYN',tooltipDisplay:'true',rowNumWidth:'40',dataList:'data:dlt_calendar',keyMoveEditMode:'true',style:'height: 80px;max-width: 900px;',autoFit:'allColumn','ev:onafteredit':'scwin.grd_schedule_onafteredit',id:'grd_schedule',tooltipDisplayColumn:'validYN',visibleRowNum:'3',class:'gvw',autoFitMinWidth:'540'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:'',id:'column3',value:'일정명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'112',inputType:'text',style:'',id:'column1',value:'시작일',blockSelect:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'112',inputType:'text',style:'',id:'column5',value:'종료일',blockSelect:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'96',inputType:'text',style:'',id:'column6',value:'등록여부',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column8',value:'삭제',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'150',inputType:'text',id:'title',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',viewType:'icon',width:'112',inputType:'calendar',id:'from',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',viewType:'icon',width:'112',inputType:'calendar',id:'to',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.grd_schedule_validYN_displayFormatter',width:'96',inputType:'text',readOnly:'true',id:'validYN',escape:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'button',style:'',id:'btn_del',class:'',value:'삭제',displayMode:'label',fixColumnWidth:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'mb_def'},E:[{T:1,N:'w2:scheduleCalendar',A:{endColumn:'to',defaultDate:'',editable:'false',selectable:'false',headerRightBtn:'true',locale:'',ioFormat:'yyyyMMdd',themeColumn:'',titleColumn:'title',startColumn:'from',dataList:'data:ldt_view_schedualCalendar',style:'min-height: 500px;max-width: 900px;',id:'shc_ex01',lang:'ko',headerLeftBtn:'true',idColumn:'',headerTitle:'true',includeScheduleEnd:'true'}}]}]}]}]}]})