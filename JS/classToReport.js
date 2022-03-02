/**
 * 세트 리포트 정보 출력하기
 */
 const sampleReportInfo=
 {
     "classCode": "1111",
     "setInfo":[
         {"setCode": 0001, "setType": "word", "setName": "DA English 1 Sample"},
         {"setCode": 0002, "setType": "word", "setName": "주니어 능률보카 기본 - DAY 01"},
         {"setCode": 0003, "setType": "word", "setName": "(샘플) EBS 초등 5학년 영어단어"}
     ]
 }
 
 for(idx in sampleReportInfo.setInfo)
 {
     $(".reportUnorderedList").append("<li class = \"reportNameList\"><div id=\"vocaType\"><img src=\"../Images/classCardVoca.png\" alt=\"단어\"></div><p style = \"margin-left : 10px;\">" + sampleReportInfo.setInfo[idx].setName +"</p></li>")
 }
 
//  const reportTable = document.getElementById(reportTable);

//  const newRow = reportTable.insertRow(0);

//  const newCell1 = newRow.insertCell(0);
//  const newCell2 = newRow.insertCell(1);
//  const newCell3 = newRow.insertCell(2);
//  const newCell4 = newRow.insertCell(3);

 const sampleStudentReport = 
 {
   "setCode" : 0001,
   "studentInfo":[
     {"name" : "전준휘" , "id":"jjh63360", "speaking":10, "remember":20, "recall":30, "spell" : 40, "repeat":50, "test":100},
     {"name" : "정세은" , "id":"tpdms0159", "speaking":10, "remember":20, "recall":30, "spell" : 40, "repeat":60, "test":100},
     {"name" : "이도훈" , "id":"bigeyec", "speaking":10, "remember":20, "recall":30, "spell" : 40, "repeat":70, "test":100}
   ]
 }

 
  //  newCell1.innerText = sampleStudentReport[0].studentInfo.name;
  //  newCell2.innerText = sampleStudentReport[0].studentInfo.id;
  //  newCell3.innerText = sampleStudentReport[0].studentInfo.id;
  //  newCell4.innerText = sampleStudentReport[0].studentInfo.id;

  for (idx in sampleStudentReport.studentInfo) {
    $("#reportTable").append("<tr><td v-if=\"studentInfo\" rowspan = \"2\" id =\"reportTd\"><img src = \"../Images/default_photo.png\" style = \"border-radius : 50px; \" id=\"reportImg\"></td><td class = \"studentName\" id = \"student\" style=\"border: solid 1px rgb(230, 230, 230); border-width: 1px 1px 0 0; \">" + sampleStudentReport.studentInfo[idx].name + "</td><td v-if=\"studentInfo\" id=\"reportTd\">" + sampleStudentReport.studentInfo[idx].speaking + "</td><td id=\"reportTd\">" + sampleStudentReport.studentInfo[idx].remember + "</td><td v-if=\"studentInfo\" id=\"reportTd\">" + sampleStudentReport.studentInfo[idx].recall + "</td><td v-if=\"studentInfo\" id=\"reportTd\">" + sampleStudentReport.studentInfo[idx].spell + "</td><td id=\"reportTd\">" + sampleStudentReport.studentInfo[idx].repeat + "</td><td v-if=\"studentInfo\" id=\"reportTd\">"  + sampleStudentReport.studentInfo[idx].test + "</td></tr>");
    $("#reportTable").append("<tr><td v-if=\"studentInfo\" id = \"student\">" + sampleStudentReport.studentInfo[idx].id + "</td><td id=\"reportTd\">N</td><td id=\"reportTd\">N</td><td id=\"reportTd\">N</td><td id=\"reportTd\">N</td><td id=\"reportTd\">N</td><td id=\"reportTd\">N</td></tr>")
  }

