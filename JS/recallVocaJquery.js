/**
 * JQuery로 html 붙이기
 * 
 */

 const sampleVoca =
 {
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

 for (var i in sampleVoca.voca) {
   var html = '';
   
   html += '<div class=\"swiper-slide\">'
   html += '<div> <div class=\"topVocaCard\"> <p style=\"color: greenyellow;\"> v0 | </p>'
   html += ' <p style=\"color: white;\"> 10 </p> </div> <div class=\"middleVocaCard\">'
   html += '<div id=\"topCard\"> <img src=\"../Images/volume.png\" id=\"topCardImg\">'
   html += '<img src=\"../Images/star.png\" id=\"topCardImg\"> </div> <div class=\"middleCard\" id=\"vocaEnglish\">'
   html += '<p id=\"middleVoca\">'
   html += sampleVoca.voca[i].englishVoca
   html += '</p> </div> <div class=\"middleCard\" id=\"vocaKorean\" style=\"border: none;\">'
   html += '<div class=\"middelCard\ hideCard" id = \"hideCard' + i + '\"></div>'
   //여기서부터
   html += randomKoreanOption(i)
   //여기까지 대체
   html += '</div > </div> </div> </div></div>'
   $(".swiper-wrapper").append(html);
 }

 /**
  * 
  * @param {int} optionNum 
  * @returns 1~5번의 랜덤한 한국말 다지선다형 제공
  */
 function randomKoreanOption(optionNum){
  var html = '';
  var answerOptionNum = getRandomInt(1, 5, []);
  //console.log("answer is: " + answerOptionNum + ' Which is: ' + sampleVoca.voca[optionNum].koreanMean);

  if(answerOptionNum == 1){
    var option2, oprion3, option4
    
    html += '<div class="randomKoreanMean" id="koreanMean1"> <div class="koreanNum">1.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[i].koreanMean
    html += '</div></div>'

    option2 = getRandomInt(1, sampleVoca.voca.length, [i]);
    html += '<div class="randomKoreanMean" id="koreanMean2"> <div class="koreanNum">2.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[option2].koreanMean
    html += '</div></div>'

    option3 = getRandomInt(1, sampleVoca.voca.length, [i, option2]);
    html += '<div class="randomKoreanMean" id="koreanMean3"> <div class="koreanNum">3.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[option3].koreanMean
    html += '</div></div>'

    option4 = getRandomInt(1, sampleVoca.voca.length, [i, option2, option3]);
    html += '<div class="randomKoreanMean" id="koreanMean4"> <div class="koreanNum">4.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[option4].koreanMean
    html += '</div></div>'
  }

  else if(answerOptionNum == 2){
    var option1, option3, option4

    option1 = getRandomInt(1, sampleVoca.voca.length, [i]);
    html += '<div class="randomKoreanMean" id="koreanMean1"> <div class="koreanNum">1.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[option1].koreanMean
    html += '</div></div>'


    html += '<div class="randomKoreanMean" id="koreanMean2"> <div class="koreanNum">2.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[i].koreanMean
    html += '</div></div>'

    option3 = getRandomInt(1, sampleVoca.voca.length, [i, option1]);
    html += '<div class="randomKoreanMean" id="koreanMean3"> <div class="koreanNum">3.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[option3].koreanMean
    html += '</div></div>'

    option4 = getRandomInt(1, sampleVoca.voca.length, [i, option1, option3]);
    html += '<div class="randomKoreanMean" id="koreanMean4"> <div class="koreanNum">4.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[option4].koreanMean
    html += '</div></div>'
  }

  else if(answerOptionNum == 3){
    var option1, option2, option4

    option1 = getRandomInt(1, sampleVoca.voca.length, [i]);
    html += '<div class="randomKoreanMean" id="koreanMean1"> <div class="koreanNum">1.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[option1].koreanMean
    html += '</div></div>'

    option2 = getRandomInt(1, sampleVoca.voca.length, [i, option1]);
    html += '<div class="randomKoreanMean" id="koreanMean2"> <div class="koreanNum">2.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[option2].koreanMean
    html += '</div></div>'

    
    html += '<div class="randomKoreanMean" id="koreanMean3"> <div class="koreanNum">3.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[i].koreanMean
    html += '</div></div>'

    option4 = getRandomInt(1, sampleVoca.voca.length, [i, option1, option2]);
    html += '<div class="randomKoreanMean" id="koreanMean4"> <div class="koreanNum">4.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[option4].koreanMean
    html += '</div></div>'
  }

  else if(answerOptionNum == 4){
    var option1, option2, option3

    option1 = getRandomInt(1, sampleVoca.voca.length, [i]);
    html += '<div class="randomKoreanMean" id="koreanMean1"> <div class="koreanNum">1.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[option1].koreanMean
    html += '</div></div>'

    option2 = getRandomInt(1, sampleVoca.voca.length, [i, option1]);
    html += '<div class="randomKoreanMean" id="koreanMean2"> <div class="koreanNum">2.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[option2].koreanMean
    html += '</div></div>'

    option3 = getRandomInt(1, sampleVoca.voca.length, [i, option1, option2]);
    html += '<div class="randomKoreanMean" id="koreanMean3"> <div class="koreanNum">3.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[option3].koreanMean
    html += '</div></div>'

    
    html += '<div class="randomKoreanMean" id="koreanMean4"> <div class="koreanNum">4.</div> <div class="pRadnKoreanMean" id="randKoreanMean1">'
    html += sampleVoca.voca[i].koreanMean
    html += '</div></div>'
  }

  

  return html
}

/**
 * 
 * @param {int} min 
 * @param {int[]} max 
 * @param {int} except
 * @returns 1~5사이의 정수형 integer
 */
function getRandomInt(min, max, except) {
  min = Math.ceil(min);
  max = Math.floor(max);

  while(1)
  {
    var randVal = Math.floor(Math.random() * (max - min)) + min;
    var is_duplicated = false;
    for(let i of except)
    {
      if(i == randVal){
        is_duplicated = true;
        break;
      }
    }
    if(is_duplicated) continue;
    else return randVal;
  }
}
  
  