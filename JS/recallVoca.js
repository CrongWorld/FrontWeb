// Make the DIV element draggable:
let isDrawing = false;
let x = 0; 
let y = 0;
let firstX = 0;
let firstY=0;
var hideCardDiv;

// function setHideCardDiv(i){
//   hideCardDiv = document.getElementById("hideCard" + i);
//   const defaultHideCardHeight = hideCardDiv.clientHeight;

//   // console.log("기본 hideCard 길이: " + defaultHideCardHeight)
//   // console.log("기본 hideCard 높이: " + hideCardDiv.clientTop)
   
//    hideCardDiv.addEventListener('pointermove', e => {
//      if (isDrawing == true){
//        x = e.clientX;
//        y = e.clientY;
   
//        //console.log("x: " + x + "y: " + y)
       
//        deltaY = firstY-y;
//        //style 현황 가져오기
//        var hideCardDivStyle = hideCardDiv.currentStyle || window.getComputedStyle(hideCardDiv);
//        hideCardDiv.style.marginTop = -deltaY*2 + "px";
       
//        //console.log("deltaY: ", deltaY);
//        //console.log("hideCardDiv.style.marginTop: " +  hideCardDivStyle.clientMarginTop);
//        //console.log("hideCardDiv.clientHeight: " + hideCardDivStyle.marginTop);
//        if(deltaY < -defaultHideCardHeight + 30) unvisibleHideCard();
//      }
//    })
   
//    //스페이스바 누르면 visibility 바꾸기
//    document.body.onkeyup = function(e){
//      //스페이스바는 32번 키
//      if(e.keyCode == 32){
//        unvisibleHideCard()
//      }
//    }
   
   /**
    * 카드 숨기기
    */
   function unvisibleHideCard(){
     hideCardDiv.style.visibility = 'hidden';
   }

//   /**
//    * 슬라이드 index받아오기
//    * @param {int} index 
//    */
//   function slideIndexCount(index){
//     alert(index+'번째 slide입니다.');
//   }

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