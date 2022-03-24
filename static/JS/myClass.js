/**
 * 선생님 이름 출력하기
 * 우상단에 위치!
 * 위에 sampleUserInfo로 바뀌는걸 보여주고 싶어서 일부러 이상하게 썼33
 */
 const sampleUserInfo = 
 {
    "clientId": "jjh63360",
    "clientName": "전준휘",
    "type": "teacher"
    //"type": "student"
}

var teacherName = sampleUserInfo.clientName;
const teacherNameLabel = document.getElementById("UserName");
const studentOrTeacherLabel = document.getElementById("studentOrTeacher");

teacherNameLabel.innerHTML = teacherName;

//선생님인지 학생인지 구분도 삽가능
if(sampleUserInfo.type=="teacher")
{
    studentOrTeacherLabel.innerHTML = "선생님"
}
else if(sampleUserInfo.type=="student")
{
    studentOrTeacherLabel.innerHTML = "학생"
}

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


/**
 * 클래스 정보 출력하기
 * 보라색 바탕 main에 위치함!
 * 미리 정의해놓은 sampleClassInfo와 sampleUserInfo를 사용한다.
 */
//1. 초대코드 출력하기
$("#main-classCode").append("초대코드: " + classInfoArray[0].classCode);
//2. 반 이름 출력하기
$("#main-className").append("👥  " + classInfoArray[0].className);
//3. 선생님 정보 출력하기
$("#main-teacherInfo").append(sampleUserInfo.clientName+" 선생님(" + sampleUserInfo.clientId + ")");


/**
 * 세트 정보 출력하기
 */
const sampleSetInfo=
{
    "classCode": "1111",
    "setInfo":[
        {"setCode": 0001, "setType": "word", "setName": "DA English 1 Sample"},
        {"setCode": 0002, "setType": "word", "setName": "주니어 능률보카 기본 - DAY 01"},
        {"setCode": 0003, "setType": "word", "setName": "(샘플) EBS 초등 5학년 영어단어"}
    ]
}

for(idx in sampleSetInfo.setInfo)
{
    $(".setUnorderedList").append("<li onclick=\"clickStudentVoca()\" class = \"setNameList\"><div id=\"vocaType\"><img src=\"/static/Images/classCardVoca.png\" alt=\"단어\"></div>" + sampleSetInfo.setInfo[idx].setName +"</li>")
}
