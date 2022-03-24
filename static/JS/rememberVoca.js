

// Make the DIV element draggable:
let isDrawing = false;
let x = 0; 
let y = 0;
let firstX = 0;
let firstY=0;
var hideCardDiv;

function setHideCardDiv(i){
  hideCardDiv = document.getElementById("hideCard" + i);
  const defaultHideCardHeight = hideCardDiv.clientHeight;

  console.log("기본 hideCard 길이: " + defaultHideCardHeight)
  console.log("기본 hideCard 높이: " + hideCardDiv.clientTop)

  hideCardDiv.addEventListener('click', e => {
    console.log("clicked")
   })
   
   hideCardDiv.addEventListener('pointerdown', e=> {
     firstY = e.clientY;
   
     console.log("firstY: " + firstY);
     isDrawing = true;
   })
   
   hideCardDiv.addEventListener('pointermove', e => {
     if (isDrawing == true){
       x = e.clientX;
       y = e.clientY;
   
       //console.log("x: " + x + "y: " + y)
       
       deltaY = firstY-y;
       //style 현황 가져오기
       var hideCardDivStyle = hideCardDiv.currentStyle || window.getComputedStyle(hideCardDiv);
       hideCardDiv.style.marginTop = -deltaY*2 + "px";
       
       //console.log("deltaY: ", deltaY);
       //console.log("hideCardDiv.style.marginTop: " +  hideCardDivStyle.clientMarginTop);
       //console.log("hideCardDiv.clientHeight: " + hideCardDivStyle.marginTop);
       if(deltaY < -defaultHideCardHeight + 30) unvisibleHideCard();
     }
   })
   
   window.addEventListener('pointerup', e => {
     isDrawing = false;
     
     hideCardDiv.style.height = defaultHideCardHeight+"px";
     hideCardDiv.style.marginTop = 0;
   })
   
   //스페이스바 누르면 visibility 바꾸기
   document.body.onkeyup = function(e){
     //스페이스바는 32번 키
     if(e.keyCode == 32){
       unvisibleHideCard()
     }
   }
   
   function unvisibleHideCard(){
     hideCardDiv.style.visibility = 'hidden';
   }
  }








