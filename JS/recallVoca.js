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

  // alert(slideIndex+'번째 slide입니다.');
  const defaultHideCardHeight = hideCardDiv.clientHeight;

  hideCardDiv.style.transform = "translate("+ 0 +"px," + 400 +"px)";

  hideCardDiv.ontransitionend = () => {
    hideCardDiv.style.opacity = 0;
  };
}

function testCall(index, option){
  alert(index + "번째 문제의 " + option + "번째 option을 선택!")
}