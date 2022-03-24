const sampleUserInfo = {
    "clientId": "jjh63360",
    "clientName": "전준휘",
    //"type": "teacher"
    "type": "student"
}

const studentName = document.getElementById("name");
const userType = document.getElementById("studentOrTeacher");

console.log(studentName);

studentName.innerHTML = sampleUserInfo.clientName;
if (sampleUserInfo.type == "student") userType.innerHTML = "학생"

/**
 * 클래스 목록 출력하기
 * 좌측에 위치!
 * 이것은 클래스의 갯수에 따라 동적으로 div수가 달라지니까!
 * 잘 보세여
 */
const samepleClassInfo = {
    "teacherId": "jjh63360@naver.com",
    "classInfo": [
        { "classCode": "1111", "className": "DA_English_A반" },
        { "classCode": "2222", "className": "testClass01" },
        { "classCode": "3333", "className": "testClass02" }
    ]
}
var classInfoArray = samepleClassInfo.classInfo;

for (idx in classInfoArray) {
    $(".leftConsoleDiv #getClasses").append("<div id=\"leftDivisions\">" + classInfoArray[idx].className + "</div>")
}

/**
 * 나의 폴더 목록 출력하기
 * 좌측에 위치!
 */
const sampleFolderInfo = {
    "teacherId": "jjh63360@naver.com",
    "folderInfo": [
        { "folderName": "이용한 세트" },
        { "folderName": "만든 세트" },
        { "folderName": "구독중인 폴더" }
    ]
}
var folderInfoArray = sampleFolderInfo.folderInfo;

for (idx in folderInfoArray) {
    $(".leftConsoleDiv #getFolders").append("<div id=\"leftDivisions\">📁 " + folderInfoArray[idx].folderName + "</div>");
}

/**
 * 동적 테이블 생성하기
 */
const sampleVoca = {
    "setCode": 1234,
    "setName": "DA_ENGLISH_A반 Sample Set",
    "voca": [
        { "vocaindex": 1, "englishVoca": "tree", "koreanMean": "나무" },
        { "vocaindex": 2, "englishVoca": "airpod", "koreanMean": "에어팟" },
        { "vocaindex": 3, "englishVoca": "camera", "koreanMean": "카메라" },
        { "vocaindex": 4, "englishVoca": "arduino", "koreanMean": "아두이노" },
        { "vocaindex": 5, "englishVoca": "banana", "koreanMean": "바나나" },
        { "vocaindex": 6, "englishVoca": "bread", "koreanMean": "빵" },
        { "vocaindex": 7, "englishVoca": "bowl", "koreanMean": "공기/밥그릇" },
        { "vocaindex": 8, "englishVoca": "butter", "koreanMean": "버터" },
        { "vocaindex": 9, "englishVoca": "cake", "koreanMean": "케잌" },
        { "vocaindex": 10, "englishVoca": "chicken", "koreanMean": "닭" },
        { "vocaindex": 11, "englishVoca": "actually", "koreanMean": "사실은" },
        { "vocaindex": 12, "englishVoca": "again", "koreanMean": "다시" },
        { "vocaindex": 13, "englishVoca": "already", "koreanMean": "벌써" },
        { "vocaindex": 14, "englishVoca": "alright", "koreanMean": "괜찮다" },
        { "vocaindex": 15, "englishVoca": "also", "koreanMean": "또한" },
        { "vocaindex": 16, "englishVoca": "always", "koreanMean": "항상" },
        { "vocaindex": 17, "englishVoca": "and", "koreanMean": "그리고" },
        { "vocaindex": 18, "englishVoca": "angry", "koreanMean": "화가 나다" },
        { "vocaindex": 19, "englishVoca": "animal", "koreanMean": "동물" },
        { "vocaindex": 20, "englishVoca": "another", "koreanMean": "또 하나/다른" }
    ]
}

const sampleStudentInfo = {
    "studentId": "jjh63360",
    "studentName": "전준휘",
    "email": "jjh63360@naver.com",
    "vocaRange": 10
}

var html = '<div style=\"display: flex; flex-direction: row;\" class=\"lineVoca\">';
var cnt = 0;
for (var i in sampleVoca.voca) {
    // 단어 카드 한 장씩 추가
    html += '<div class=\"container\">'
    html += '<div class=\"front card\">'
    html += sampleVoca.voca[i].englishVoca
    html += '</div><div class=\"back card\">'
    html += sampleVoca.voca[i].koreanMean
    html += '</div></div>'


    console.log(sampleVoca.voca.length)
        // 카드 수 10장 -> 구간 분할
    if (((parseInt(i) + 1) % 10 == 0)) {

        //빈 카드 두 장 추가
        html += '<div class=\"container\">'
        html += '<div class=\"front card\" id=\"noneCard\">'
        html += '</div><div class=\"back card\" id=\"noneCard\">'
        html += '</div></div>'

        html += '<div class=\"container\">'
        html += '<div class=\"front card\" id=\"noneCard\">'
        html += '</div><div class=\"back card\" id=\"noneCard\">'
        html += '</div></div>'

        html += '</div>'

        //카드 수 10장 나눈 후 구간 분할 부분 추가
        if (((parseInt(i) + 1) / 10) < (sampleVoca.voca.length) / 10) {

            html += '<div class=\"vocaSection\"><div id=\"sectionNum\">'
            html += ((parseInt(i) + 1) / 10) + 1
            html += '구간</div><div id=\"vocaSectionButton\"><button class=\"button is-rounded\" id=\"vocaSectionButtons\" onclick=\"clickRememberVoca()\">'
            html += '암기학습</button><button class=\"button is-rounded\" id=\"vocaSectionButtons\">리콜학습</button>'
            html += '<button class=\"button is-rounded\" id=\"vocaSectionButtons\" style=\"margin-right: 20px;\">스펠학습</button>'
            html += '</div></div>'
        }

        $("#vocaCard").append(html);
        html = '<div style=\"display: flex; flex-direction: row;\" class=\"lineVoca\">';

    }
    //한 줄에 카드 4개 추가 & 구간 분할 전후 구분 
    else if (((parseInt(i) + 1) % 10) % 4 == 0) {
        html += '</div>'
        $("#vocaCard").append(html);
        html = '<div style=\"display: flex; flex-direction: row;\" class=\"lineVoca\">';
    }
    //마지막 카드 구분
    else if (i == sampleVoca.voca.length - 1) {
        html += '</div>'
        $("#vocaCard").append(html);
    }

}