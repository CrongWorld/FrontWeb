const sampleUserInfo = 
 {
    "clientId": "jjh63360",
    "clientName": "전준휘",
    //"type": "teacher"
    "type": "student"
}

const studentName = document.getElementById("name");
const userType = document.getElementById("studentOrTeacher");

studentName.innerHTML = sampleUserInfo.clientName;
if(sampleUserInfo.type=="student") userType.innerHTML = "학생"

/**
 * 클래스 목록 출력하기
 * 좌측에 위치!
 * 이것은 클래스의 갯수에 따라 동적으로 div수가 달라지니까!
 * 잘 보세여
 */
 const samepleClassInfo = 
 {
     "teacherId":"jjh63360@naver.com",
     "classInfo":[
         {"classCode":"1111", "className":"DA_English_A반"},
         {"classCode":"2222", "className":"testClass01"},
         {"classCode":"3333", "className":"testClass02"}
     ]
 }
 var classInfoArray = samepleClassInfo.classInfo;
 
 for(idx in classInfoArray)
 {
     console.log(classInfoArray[idx].className)
     //일케 하면 
     /*
     *DA_English_A반
     testClass01
     testClass02
     */
    //위의 것이 출력돼요.
    $(".leftConsoleDiv #getClasses").append("<div id=\"leftDivisions\">"+ classInfoArray[idx].className +"</div>")
 }
 
 /**
  * 나의 폴더 목록 출력하기
  * 좌측에 위치!
  */
 const sampleFolderInfo =
 {
     "teacherId": "jjh63360@naver.com",
     "folderInfo":[
         {"folderName" : "이용한 세트"},
         {"folderName" : "만든 세트"},
         {"folderName" : "구독중인 폴더"}
     ]
 }
 var folderInfoArray = sampleFolderInfo.folderInfo;
 
 for(idx in folderInfoArray)
 {
     $(".leftConsoleDiv #getFolders").append("<div id=\"leftDivisions\">📁 " + folderInfoArray[idx].folderName + "</div>");
 }
 