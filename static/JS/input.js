var isAllAgreeClicked = false;
var isServiceAgreementClicked = document.getElementById("serviceAgreement");
var isPersonalAgreementClicked = document.getElementById("personalAgreement")
var isAgeAgreementClicked = document.getElementById("ageAgreement");
var isMarketingAgreementClicked = document.getElementById("marketingAgreement");

function loginInput () {
  var idInput = document.getElementById("inputid").value;
  var pwInput = document.getElementById("inputpw").value;
  var login = new Object();
  login.clientID = idInput;
  login.clientPW = pwInput;

  console.log(JSON.stringify(login));
}

function classCodeInput () {
  var classCode = document.getElementById("inputClassCode").value;
  
  var inputClassCode = new Object();
  inputClassCode.classCode = classCode;

  console.log(JSON.stringify(inputClassCode));
}

function userInfoInput () {
  var userId = document.getElementById('inputUserId').value;
  var userName = document.getElementById('inputUserName').value;
  var userPw = document.getElementById('inputUserPw').value;
  var userPw2 = document.getElementById('inputUserPw2').value;
  var userEmail = document.getElementById('inputUserEmail').value;
  var userPhone = document.getElementById('inputUserPhone').value;

  var inputUser = new Object();

  inputUser.userId = userId;
  inputUser.userName = userName;
  inputUser.userPw = userPw;
  inputUser.userPw2 = userPw2;
  inputUser.userEmail = userEmail;
  inputUser.userPhone = userPhone;

  alert(JSON.stringify(inputUser));
}

function allAgreeClicked()
{
  if(isAllAgreeClicked == false)
  {
    isServiceAgreementClicked.checked = true;
    isPersonalAgreementClicked.checked = true;
    isAgeAgreementClicked.checked = true;
    isMarketingAgreementClicked.checked = true;

    isAllAgreeClicked = true;
  }

  else
  {
    isServiceAgreementClicked.checked = false;
    isPersonalAgreementClicked.checked = false;
    isAgeAgreementClicked.checked = false;
    isMarketingAgreementClicked.checked = false;

    isAllAgreeClicked = false;
  }
}

function signupBtnClicked()
{
  if(isServiceAgreementClicked.checked&& isPersonalAgreementClicked.checked)
  {
    console.log(1212)
    userInfoInput()
    clickMainPageStudent()
  }
  else
  {
    alert("필수약관에 동의해주세요.")
  }
}

function teacherSignupBtnClicked()
{
  if(isServiceAgreementClicked.checked&& isPersonalAgreementClicked.checked)
  {
    userInfoInput()
    clickMainPageTeacher()
  }
  else
  {
    alert("필수약관에 동의해주세요.")
  }
}
