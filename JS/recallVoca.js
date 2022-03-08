// Make the DIV element draggable:
let isDrawing = false;
let x = 0; 
let y = 0;
let firstX = 0;
let firstY=0;
var hideCardDiv;
   
/**
* 카드 숨기기
*/
function unvisibleHideCard(){
  hideCardDiv.style.visibility = 'hidden';
}

/**
 * 슬라이드 넘기면 카드 아래로 숨기기
 * @param {int} slideIndex
 */
function slideCardHide(slideIndex){
  var hideCardDiv = document.getElementById("hideCard" + slideIndex);
  console.log(englishAnswerSetObject.vocaAnswerSet[slideIndex].englishVoca)
  speech(englishAnswerSetObject.vocaAnswerSet[slideIndex].englishVoca)

  // alert(slideIndex+'번째 slide입니다.');
  const defaultHideCardHeight = hideCardDiv.clientHeight;

  hideCardDiv.style.transform = "translate("+ 0 +"px," + 400 +"px)";

  hideCardDiv.ontransitionend = () => {
    hideCardDiv.style.opacity = 0;
  };
}

/**
 * index번째 문의 option을 클릭하였을 때 정답 여부를 확인시켜주는 alert를 추가합니다.
 * @param {int} index 
 * @param {int} option 
 */
function studentOptionClicked(index, option){
  //alert(index + "번째 문제의 " + option + "번째 option을 선택!")
  if(englishAnswerSetObject.vocaAnswerSet[index].koreanMeanOptionNum == option){
    alert("정답입니다!");
  }
  else{
    alert("오답입니다!");
  }
}

  
  
var voices = [];
function setVoiceList() {
  voices = window.speechSynthesis.getVoices();
}
setVoiceList();

if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = setVoiceList;
}
function speech(txt) {
    if(!window.speechSynthesis) {
      alert("음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요");
    return;
  }
  var lang = 'ko-KR';
  var utterThis = new SpeechSynthesisUtterance(txt);
    utterThis.onend = function (event) {
    console.log('end');
  };
  utterThis.onerror = function(event) {
    console.log('error', event);
  };
  var voiceFound = false;

  for(var i = 0; i < voices.length ; i++) {
    if(voices[i].lang.indexOf(lang) >= 0 || voices[i].lang.indexOf(lang.replace('-', '_')) >= 0) {
      utterThis.voice = voices[i];
      voiceFound = true;
    }
  }
  
  utterThis.lang = lang;
  utterThis.pitch = 1;
  utterThis.rate = 1; //속도
  window.speechSynthesis.speak(utterThis);
}

  

