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
   html += '<div id=\"topCard\"> <img src=\"../../../static/Images/volume.png\" id=\"topCardImg\">'
   html += '<img src=\"../../../static/Images/star.png\" id=\"topCardImg\"> </div> <div class=\"middleCard\" id=\"vocaEnglish\">'
   html += '<p id=\"middleVoca\">'
   html += sampleVoca.voca[i].englishVoca
   html += '</p> </div> <div class=\"middleCard\" id=\"vocaKorean\" style=\"border: none;\">'
   html += '<div class=\"middelCard\ hideCard" id = \"hideCard' + i + '\" onmouseover="setHideCardDiv('+ i +')"></div> <p id=\"middleVoca\">'
   html += sampleVoca.voca[i].koreanMean
   html += '</p></div>'
   html += '</div > <div class=\"bottomVocaCard\"><div id=\"bottomButton\">'
   html += '<button id=\"buttonStyle\" style=\"background-color: rgb(149, 233, 24); color: white;\">이제 알아요</button>'

   html += '<p id = \"keyBoard\"> ENTER</p></div><div id=\"bottomButton\"><button id=\"buttonStyle\">나중에 한번 더</button>'
   html += '<p id=\"keyBoard\">SPACE</p> </div> </div> <div id="blankDivToHide"></div> </div></div>'
   $(".swiper-wrapper").append(html);
 }