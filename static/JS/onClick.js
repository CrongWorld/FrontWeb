function clickClasscard() { // 클래스카드 홈페이지로 이동
  location.href = "mainPage.html";
}

function clickMyClass() { // 나의 클래스로 이동
  location.href = "myClass.html";
}

function clickLogin() { // 로그인 화면으로 이동
  location.href = "login.html";
}

function clickSignup() { //회원가입 화면으로 이동
  location.href = "sign-up.html";
}

function clickSignupTeacher(){
  location.href = "teacherSignup.html";
}

function clickSignupStudent(){
  location.href = "studentSignup.html";
}

function clickSignupStudentInfo(){
  location.href = "studentSignup_2.html";
}

function clickSearchSet() { // 세트 검색으로 이동
  location.href = "setSearchPageElementary.html";
}

function clickGoogleLogin() { // 구글 로그인 화면으로 이동
  window.open('https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
}

function clickFacebookLogin() { // 페이스북 로그인 화면으로 이동
  window.open('https://ko-kr.facebook.com/');
}

function clickMainPageStudent(){
  location.href = "signedupMainPage-student.html";
}

function clickMainPageTeacher() { // 로그인 시 선생님 메인페이지로 이동
  location.href = "signedUpMainPage-teacher.html";
}

// function clickMainPageStudent() { // 로그인 시 학생 메인페이지로 이동
//   location.href = "../Pages/signedUpMainPage-student.html";
// }

function clickMyClassStudent() {
  location.href = "myClass-student.html";
}

function clickReport() {
  location.href = "classToReport.html";
}

function clickStudentVoca() {
  location.href = "studentVocaMain.html";
}
function clickRememberVoca() {
  location.href = "rememberVoca.html";
}

function clickRecallVoca(){
  location.href = "recallVoca.html";
}

function clickMakeSet(){
  html ="";
  html+='<div class="overlay">'+
        '<div class="up-body">'+
          '<div class="header">'+
            '<a class="x" onclick="closeMakeSet()">X</a>'+
          '</div>'+
          '<div class="body-container">'+
            '<div class="first-line">'+
              '<div class="word-set" onclick="clickWordSet()">'+
                '<div class="font-14">영어 등 외국어의 어휘를 효과적으로 암기'+
                  '<span class="font-24">단어 세트</span>'+
                '</div>'+
              '</div>'+
              '<div class="sentence-set">'+
                '<div class="font-14">교과서, 원서의<br> 영어 문장을 빠르게 암기'+
                  '<span class="font-24">문장 세트</span>'+
                '</div>'+
              '</div>'+
              '<div class="drill-set">'+
                '<div class="font-14">내신 어법 문제를<br> 빠르게 출제하고 자동채점'+
                  '<span class="font-24">드릴 세트</span>'+
                '</div>'+
              '</div>'+
              '<div class="listening-set">'+
                '<div class="font-14">듣기 시험을 실시하고<br> 오답만 다시 풀기'+
                  '<span class="font-24">듣기 세트</span>'+
                '</div>'+
              '</div>'+
          '</div>'+
            '<div class="second-line">'+
              '<div class="term-set">'+
                '<div class="font-14">사회, 과학 등의<br> 용어와 개념을 암기'+
                  '<span class="font-24">용어 세트</span>'+
                '</div>'+
              '</div>'+
              '<div class="answer-set">'+
                '<div class="font-14">종이책, 시험지 문제를<br> 자동채점(OMR)'+
                  '<span class="font-24">정답 세트</span>'+
                '</div>'+
              '</div>'+
              '<div class="text-danger">'+
                '저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하면 관련 법률에 저촉되니 주의해 주세요.'+
                '능률보카, 워드마스터, 뜯어먹는 영단어, 경선식 영단어, 우선순위 영단어, 어휘끝, 마더텅 등 판매되는 교재의 내용을 제작하실 경우 비공개로 설정하여 이용하세요'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        '<div class="bottom-body">'+
          '<div class="font-16">신규 공식제공 세트 소개</div>'+
          '<div class="new-publish-box">'+
            '<img src="/static/Images/Sample1.jpg">'+
            '<img src="/static/Images/Sample1.jpg">'+
            '<img src="/static/Images/Sample1.jpg">'+
            '<img src="/static/Images/Sample1.jpg">'+
            '<img src="/static/Images/Sample1.jpg">'+
            '<div class="w-200 text-center font-18 font-bold">'+
              '공식 제공학습 세트<br>'+
              '<div class="font-16 font-bold .m-t-sm">26,752개</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
      let locationList = location.href.split('/');
      let pageName = locationList[locationList.length-1];
      switch(pageName){
        case('signedUpMainPage-teacher.html'):
        $('.userLoginInfo').after(html);
        break;        
        case('setSearchPageElementary.html'):
        $('.bookBoxTable').after(html);
        break;
        case('myClass.html'):
        $('.main-topInfo').after(html);
        break;
        case('signedupMainPage-student.html'):
        $('.userLoginInfo').after(html);
        break;
      }
}

function closeMakeSet(){
  $('div').remove('.overlay');
}

function clickWordSet(){
  let locationList = location.href.split('/');
  let pageName = locationList[locationList.length-1];
  if (pageName === 'teacherMakeSet.html') {
    $('div').remove( '.overlay' ) ;
  } else{
    location.href= "teacherMakeSet.html";
  }
}

function clickSetLoading(){
  // location.href = "teacher/make-set/loading";
  if ($("div").hasClass("overlay") === true) {
      $( 'div' ).remove( '.left' );
      $( 'div' ).remove( '.right' );
      $( 'div' ).remove( '.input-container' );
      $( 'div' ).remove( '.prev-container' );
      $(".bottom-container").css("justify-content","space-evenly");
      $(".bottom-container").css("height","70%");
      html ='';
      html += '<form name="signform" method="POST" ENCTYPE="multipart/form-data" action="./design_update.htm">';
      html += '<input type="file" id="file" name="file" style="display:none;" onchange="changeValue(this)">';
      html += '</form>';
      html +=   '<div id="loading" class="left" onclick="leftUpload()">'+
          '<p class="first-p">단어, 의미, 예문이 분리된 엑셀/한글 데이터</p>'+
          '<p class="second-p">의미와 예문은 없어도 됩니다.</p>'+
          '<img class="left-img" src="/static/Images/word_excel_img.png">'+
          ' </div>'+
          '<div id="loading" class="right">'+
          '<p>단어, 의미가 연결된 텍스트 데이터</p>'+
          '<img class="right-img" src="/static/Images/word_text_img.png">'+
          '</div>'+
          '</div>';
      $(".bottom-container").append(html);
      nextContainer = '';
      nextContainer +='<div class="next-container">'+
          '<a class="next" onclick="clickSetLeftLoading()" >'+
          '다음 &#62;'+
          '</a>'+
          '</div>'+
          '</div>'+
          '</div>';
      $(".bottom-container").after(nextContainer);

    } else{
      html='';
      html += '<div class="overlay">';
      html += '<div class="loading-container">';
      html +=  '<div id=loading class="header">';
      html +=   '<p class="header-text">엑셀, 한글자료 가져오기</p>';
      html +=    '<button class="header-button" onclick="clickWordSet()"> x </button>';
      html +=   '</div>';
      html +=  '<div id=loading class="bottom-container">';
      html += '<form name="signform" method="POST" ENCTYPE="multipart/form-data" action="./design_update.htm">';
      html += '<input type="file" id="file" name="file" style="display:none;" onchange="changeValue(this)">';
      html += '</form>';
      html +=   '<div id="loading" class="left" onclick="leftUpload()">'+
          '<p class="first-p">단어, 의미, 예문이 분리된 엑셀/한글 데이터</p>'+
          '<p class="second-p">의미와 예문은 없어도 됩니다.</p>'+
          '<img class="left-img" src="/static/Images/word_excel_img.png">'+
          ' </div>'+
          '<div id="loading" class="right">'+
          '<p>단어, 의미가 연결된 텍스트 데이터</p>'+
          '<img class="right-img" src="/static/Images/word_text_img.png">'+
          '</div>'+
          '</div>'+
          '<div class="next-container">'+
          '<a class="next" onclick="clickSetLeftLoading()" >'+
          '다음 &#62;'+
          '</a>'+
          '</div>'+
          '</div>'+
          '</div>';
      $(".title-loginContents").append(html);}

}


function leftUpload(){
  $('#file').click();
}
function changeValue(obj){
  document.signform.submit();
  alert(document.getElementById('file').value);
// 출처: https://bravochoi.tistory.com/94 [즐거운인생] (파일 경로 alert)
// 출처: https://doolyit.tistory.com/204 (이미지 클릭하여 파일 업로드)
// 참고 https://kwonyang.tistory.com/9 (back-end 연동)

}


function clickSetLeftLoading(){
  // location.href = "teacher/make-set/loading/left";
  $( 'div' ).remove( '.left' );
  $( 'div' ).remove( '.right' );
  $( 'div' ).remove( '.next-container' );

  html ='';
  html+='<div id="left-loading" class="left" >'+
    '<p class="first-p">엑셀, 한글 파일에서 <span class="red">단어, 의미, 예문</span>부분을 복사하여'+
      '아래에 붙여 넣으세요.</p>'+
    '<p class="second-p">! 의미와 예문은 없어도 됩니다.</p>'+
  '</div>'+
  '<div id="left-loading" class="right" >'+
    '<img src="/static/Images/word_excel_img.png">'+
  '</div>';

  $(".bottom-container").css("justify-content","center");
  $(".bottom-container").css("height","30%");

  $(".bottom-container").append(html);

  inputContainer='';
  inputContainer+='<div class= "input-container">'+
    '<input class="input-text" type="text" placeholder="붙여넣기 (ctrl+V)하세요.">'+
  '</div>';

  $(".bottom-container").after(inputContainer);

  html ='';
  html+=  '<div class="prev-container">'+
  '<a class="prev" onclick="clickSetLoading()" >'+
    '&#60; 이전'+
  '</a>'+
      '</div>';
  $(".input-container").after(html);
}

// function clickSetRightLoading(){
  // location.href = "teacher/make-set/loading/right";
// }

function clickSetExtract(){
  // location.href = "teacher/make-set/extract";
  console.log("gg");
  html ='';
  html+='<div class="overlay">'+
      '<div class="extract-container">'+
        '<div id=extract class="header">'+
          '<p class="header-text">1단계-본문 붙여넣기</p>'+
            '<button class="header-button" onClick="clickWordSet()"> x</button>'+
        '</div>'+
        '<div id=extract class="bottom-container">'+
          '<div id=extract class="left">'+
            '<p class="first-p">단어를 추출할 본문의 텍스트를</p>'+
            '<p class="second-p">복사<span class="bold">(Control-C)</span>하여 아래에 붙여 넣으세요.</p>'+
          '</div>'+
          '<div id=extract class="right">'+
            '<img src="/static/Images/../Images/extractword.png">'+
          '</div>'+
      '</div>'+
        '<div id=extract class="input-container">'+
          '<input class="input-text" type="text" placeholder="본문 텍스트를 붙여 넣으세요 (Control V)">'+
        '</div>'+
        '<div id=extract class="button-container">'+
          '<button>단어 추출하기</button>'+
        '</div>'+
  '</div>'+
'</div>';
      $(".title-loginContents").append(html);
}

function clickSetAlign(){
  // location.href = "teacher/make-set/align";
  html ='';
  html+='<div class="overlay">'+
    '<div class="align-container">'+
      '<div id=align class="header">'+
        '<p class="header-text">카드 정렬</p>'+
        '<button class="header-button" onClick="clickWordSet()"> x</button>'+
      '</div>'+

      '<div class="shuffle">'+
        '<input type="radio">'+
          '<p>카드를 무작위로 섞음</p>'+
      '</div>'+
      '<div class="align">'+
        '<input type="radio">'+
          '<p>가나다, 알파벳 순으로 정렬</p>'+
      '</div>'+
      '<div class="is-division">'+
        '<input type="checkbox">'+
          '<p class="cap">대소문자 구분</p>'+
      '</div>'+
      '<div id=align class="button-container">'+
        '<button onClick="clickWordSet()">확인</button>'+
      '</div>'+
    '</div>'+
  '</div>';
  $(".title-loginContents").append(html);
}

function clickSetOverlap(){
  // location.href = "teacher/make-set/overlap";
  html ='';
  html+='<div class="overlay">'+
    '<div class="overlap-container">'+
      '<div id=overlap class="header-container">'+
        '<a class="header" onClick="clickWordSet()"> x </a>'+
      '</div>'+
      '<div id=overlap class="p-container">'+
        '<p>중복 단어가 있습니다. 중복 단어는 학습에'+
          '혼동을 줄 수 있으니 수정하는 것이 좋습니다.'+
        '</p>'+
      '</div>'+
      '<div id=overlap class="button-container">'+
        '<button class="left-button" onClick="clickWordSet()">수정</button>'+
        '<button class="right-button" onClick="clickSetDeleteOverlap()">모든 중복카드 제거</button>'+
      '</div>'+
    '</div>'+
  '</div>';
  $(".title-loginContents").append(html);
}

function clickSetDeleteOverlap(){
  // location.href = "teacher/make-set/overlap/delete";
  $( 'div' ).remove( '.overlap-container' );
  html ='';
  html += '<div class="d-overlap-container">'+
      '<div id=d-overlap class="header-container">'+
                      '<a class="header" onclick="clickWordSet()"> x </a>'+
                    '</div>'+
                    '<div id=d-overlap class="p-container">'+
                      '<p>모든 중복카드를 첫번째 카드만 남기고 일괄'+
                        '삭제할까요?'+
                      '</p>'+
                    '</div>'+
                    '<div id=d-overlap class="button-container">'+
                      '<button class= "left-button" onclick="clickWordSet()">취소</button>'+
                      '<button class= "right-button" onclick="clickWordSet()">일괄삭제</button>'+
                    '</div>'+
                  '</div>'+
                '</div>';
    $(".overlay").append(html);
}

function clickSetSetting(){
  // location.href = "teacher/make-set/setting";
  if ($("div").hasClass("overlay") === true){
    $( 'div' ).remove( '.alert-overlay' );
  } else{ html ='';
  html+='<div class="overlay">'+
    '<div class="setting-container">'+
      '<div id=setting class="header">'+
        '<p class="header-text">세트 권한 설정</p>'+
        '<button class="header-button" onClick="clickWordSet()"> x</button>'+
      '</div>'+

      '<div id=setting class="bottom-container">'+
        '<p class="first-line">세트 공개 여부'+
          '<span class="first-line-span">'+
                          '(<span class="color">만든세트>공개여부 설정</span>'+
                          '에서 일괄 설정 가능)'+
        '</p>'+
        '<div class="open">'+
          '<input type="radio" onClick="clickSetOpenAlert()">'+
            '<p>모든 사용자에게 공개</p>'+
        '</div>'+
        '<div class="close">'+
          '<input type="radio">'+
            '<p>비공개</p>'+
        '</div>'+

        '<p class="second-line">세트 수정 허용</p>'+
        '<div class="allow">'+
          '<input type="radio">'+
            '<p>다른 사용자의 수정을 허용(삭제불가)</p>'+
        '</div>'+
        '<div class="forbid">'+
          '<input type="radio">'+
            '<p>나만 수정</p>'+
        '</div>'+

      '</div>'+
      '<div id=setting class="button-container">'+
        '<button onClick="clickWordSet()">확인</button>'+
      '</div>'+
    '</div>'+
  '</div>';
  $(".title-loginContents").append(html);
  }
}

function clickSetOpenAlert(){
  // location.href = "teacher/make-set/setting/alert";
  html='';
  html+='<div class="alert-overlay">'+

    '<div class="alert-container">'+
      '<div id=alert class="header-container">'+
        '<a class="alert-header" onClick="clickSetSetting()">'+
          'X'+
        '</a>'+
      '</div>'+
      '<div id=alert class="p-container">'+
        '<p>시중 교재 등 저작권이 있는 자료를'+
          '누구나 이용할 수 있도록 공개하면 법률에 저촉될 수 있으니'+
          '주의해 주세요. 또 원작자의 컨텐츠 보호 요청이 오면 삭제 될 수 있습니다.'+
          '공개할까요?'+
        '</p>'+
      '</div>'+
      '<div id=alert class="button-container">'+
        '<button class="left-button" onClick="clickSetSetting()">취소</button>'+
        '<button class="right-button" onClick="clickSetSetting()">공개하기</button>'+
      '</div>'+
    '</div>'+
  '</div>';
    $("#setting.bottom-container").append(html);
}