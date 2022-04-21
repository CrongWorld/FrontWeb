const sampleVoca =
{
    "setCode": 1234,
    "textBookName": "Sample Set",
    "voca": [
    { "vocaindex": 6, "englishVoca": "walk", "koreanMean": "걷다", "score": 10 },
    { "vocaindex": 2, "englishVoca": "fight", "koreanMean": "싸우다", "score": 10 },
    { "vocaindex": 16, "englishVoca": "speak", "koreanMean": "말하다", "score": 10 },
    { "vocaindex": 1, "englishVoca": "cellphone", "koreanMean": "핸드폰", "score": -15 },
    { "vocaindex": 3, "englishVoca": "camera", "koreanMean": "카메라", "score": -15 },
    { "vocaindex": 4, "englishVoca": "pedestrian", "koreanMean": "보행자", "score": -15 },
    { "vocaindex": 5, "englishVoca": "banana", "koreanMean": "바나나", "score": -15 },
    { "vocaindex": 7, "englishVoca": "bowl", "koreanMean": "공기/밥그릇", "score": -15 },
    { "vocaindex": 8, "englishVoca": "butter", "koreanMean": "버터", "score": -15 },
    { "vocaindex": 9, "englishVoca": "cake", "koreanMean": "케잌", "score": -15 },
    { "vocaindex": 10, "englishVoca": "chicken", "koreanMean": "닭", "score": -15 },
    { "vocaindex": 11, "englishVoca": "actually", "koreanMean": "사실은", "score": -15 },
    { "vocaindex": 12, "englishVoca": "dance", "koreanMean": "춤추다", "score": 10 },
    { "vocaindex": 13, "englishVoca": "already", "koreanMean": "벌써", "score": -15 },
    { "vocaindex": 14, "englishVoca": "see", "koreanMean": "보다", "score": -15 },
    { "vocaindex": 15, "englishVoca": "also", "koreanMean": "또한", "score": -15 },
    
    { "vocaindex": 17, "englishVoca": "and", "koreanMean": "그리고", "score": -15 },
    { "vocaindex": 18, "englishVoca": "angry", "koreanMean": "화가 나다", "score": 10 },
    { "vocaindex": 19, "englishVoca": "animal", "koreanMean": "동물", "score": -15 },
    { "vocaindex": 20, "englishVoca": "another", "koreanMean": "또 하나/다른", "score": -15 }
    ]
}
var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300},
            debug: false
        }
    },
    parent: 'phaser-example',
    dom: {
        createContainer: true
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var star1;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var soundfx;
let position ={x: [], y: []}; // 별의 좌표
var playerNickName;
var old_x, old_y;

var element;

var starAppearanceCnt=0;

//움직임 학인
var isPlayerMove = false;
var isYellowStar_1_Move = false;
var isYellowStar_2_Move = false;
var isYellowStar_3_Move = false;
var isPurpleStar_1_Move = false;
var isPurpleStar_2_Move = false;
var isPurpleStar_3_Move = false;

//스테이지 정보 확인
var isNewStage=false;

var old_yellowStarArr = [];
var old_purpleStarArr = [];

//star이름 라벨링
var yellowStarLabel_1;
var yellowStarLabel_2;
var yellowStarLabel_3;

var purpleStarLabel_1;
var purpleStarLabel_2;
var purpleStarLabel_3;

//game stage관련 변수들

var game = new Phaser.Game(config);

// import fs from 'fs';
// var text2png = require('text2png');
// fs.writeFileSync('out.png', text2png('Hello!', {color: 'blue'}));

function preload ()
{
    this.load.image('sky', 'js/starCollecter/static/assets/sky.png');
    this.load.image('ground', 'js/starCollecter/static/assets/platform.png');
    this.load.image('star', 'js/starCollecter/static/assets/star.png');
    this.load.image('bomb', 'js/starCollecter/static/assets/bomb.png');
    this.load.image('purpleStar', 'js/starCollecter/static/assets/purpleStar.png');
    this.load.spritesheet('dude', 'js/starCollecter/static/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.html('nameform', 'js/starCollecter/static/assets/text/loginform.html');
}

function create ()
{
    //  A simple background for our game
    bgImage = this.add.image(600, 400, 'sky');
    bgImage.setScale(3)


    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    platforms.create(400, 720, 'ground').setScale(6).refreshBody();

    //  Now let's create some ledges
    platforms.create(600, 470, 'ground');
    platforms.create(50, 320, 'ground');
    platforms.create(750, 290, 'ground');

    // The player and its settings
    player = this.physics.add.sprite(100, 450, 'dude');

    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    for (var i = 0; i < 7; i++) {
        var x = Phaser.Math.RND.between(100,200);
        var y = 0;
    }

    //  add physics to stars 
    star1 = this.physics.add.group({
        key: 'star',
        repeat: 2,
        setXY: { x: 50, y: 0, stepX: 330}
    });
    
    star1.children.iterate(function (child) {
                
        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        
        // 각각의 별 x좌표, y좌표 position 객체에 저장
        // setTimeout(function(num=0){
        //     num=num+1;
        //     console.log(`별${num} X좌표:`+ child.x);
        //     console.log(`별${num} y좌표:`+ child.y);
        //     position.x.push(child.x);
        //     position.y.push(child.y);
        //     console.log(position.x);
        //     console.log(position.y);
        // }, 5000);
    });

    purpleStar = this.physics.add.group({
        key: 'purpleStar',
        repeat: 2,
        setXY: { x: 200, y: 0, stepX: 400}
    });

    purpleStar.children.iterate(function(child){
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    })
    
    bombs = this.physics.add.group();

    //  The score
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    //  Game mode
    gameModeText = this.add.text(1000, 16, '동사 찾기', {fontSize: '32px', fill: '#000'});
    
    
    

    //   playser NickName
    //playerNickName = this.add.text(70, 620, 'Sels', {fontSize: '18px', fill: '#111'});

    //  Collide the player and the stars with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(star1 , platforms);
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(purpleStar, platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(player, star1, collectStar);
    this.physics.add.overlap(player, purpleStar, badCollectStar);
    this.physics.add.collider(player, bombs, hitBomb, null, this);

    //******************************** dummy datas
    playerNickName = this.add.text(player.x, player.y, 'Sels', {fontSize: '18px', fill: '#111'});

    //ref: phaser3 form input example
    var element = this.add.dom(600, 400).createFromCache('nameform');

    element.setPerspective(800);

    element.addListener('click');
    let physics = this.physics;
    physics.pause();
    element.on('click', function (event) {

        if (event.target.name === 'playButton')
        {
            var inputUsername = this.getChildByName('textBookName');
            var inputPassword = this.getChildByName('nickName');

            //  Have they entered anything?
            if (inputUsername.value !== '' && inputPassword.value !== '')
            {
                //  Turn off the click events
                this.removeListener('click');

                element.setVisible(false);

                physics.resume();
            }
            
        }

    });
 
    this.tweens.add({
        targets: element,
        y: 300,
        duration: 3000,
        ease: 'Power3'
    });
    
    star1.children.iterate(function(child, num){
        //  old star 좌표, score 정의
        var old_yellowStar =[{
            "x": "value",
            "y": "value",
            "score": "value"
        }]

        old_yellowStar.x = 0;
        old_yellowStar.y = 0;
        old_yellowStarArr[num] = old_yellowStar
    });

    purpleStar.children.iterate(function(child, num){
        //  old star 좌표, score 정의
        var old_purpleStar =[{
            "x": "value",
            "y": "value",
            "score": "value"
        }]

        old_purpleStar.x = 0;
        old_purpleStar.y = 0;
        old_purpleStarArr[num] = old_purpleStar;
    });
    
    yellowStarLabel_1 = this.add.text(0, 0, sampleVoca.voca[starAppearanceCnt].englishVoca);
    yellowStarLabel_2 = this.add.text(0, 0, sampleVoca.voca[starAppearanceCnt].englishVoca);
    yellowStarLabel_3 = this.add.text(0, 0, sampleVoca.voca[starAppearanceCnt].englishVoca);

    purpleStarLabel_1 = this.add.text(0, 0, sampleVoca.voca[starAppearanceCnt].englishVoca);
    purpleStarLabel_2 = this.add.text(0, 0, sampleVoca.voca[starAppearanceCnt].englishVoca);
    purpleStarLabel_3 = this.add.text(0, 0, sampleVoca.voca[starAppearanceCnt].englishVoca);
    //******************************** END dummy datas

}

function update ()
{
    // 노란색 별 라벨 붙이기
    star1.children.iterate(function(child, num){
        if(num==0)
        {
            if(child.x != old_yellowStarArr[0].x || (child.y - old_yellowStarArr[0].y)**2 < 10)
            {
                isYellowStar_1_Move=true;
            }
        }
        if(num==1)
        {
            if(child.x != old_yellowStarArr[1].x || (child.y - old_yellowStarArr[1].y)**2<10)
            {
                isYellowStar_2_Move=true;
            }
        }
        if(num==2)
        {
            if(child.x != old_yellowStarArr[2].x || (child.y - old_yellowStarArr[2].y)**2<10)
            {
                isYellowStar_3_Move=true;
            }
        }
    });

    if(isYellowStar_1_Move)
    {
        yellowStarLabel_1.destroy();
        var localVocalIndex = Math.floor(starAppearanceCnt%sampleVoca.voca.length);

        yellowStarLabel_1 = this.add.text(old_yellowStarArr[0].x - 40, old_yellowStarArr[0].y + 20, sampleVoca.voca[localVocalIndex].englishVoca);
    }
    
    if(isYellowStar_2_Move)
    {
        yellowStarLabel_2.destroy();
        var localVocalIndex = Math.floor(starAppearanceCnt%sampleVoca.voca.length)+1;

        yellowStarLabel_2 = this.add.text(old_yellowStarArr[1].x - 40, old_yellowStarArr[1].y + 20, sampleVoca.voca[localVocalIndex].englishVoca);
    }

    if(isYellowStar_3_Move)
    {
        yellowStarLabel_3.destroy();
        var localVocalIndex = Math.floor(starAppearanceCnt%sampleVoca.voca.length)+2;

        yellowStarLabel_3 = this.add.text(old_yellowStarArr[2].x - 40, old_yellowStarArr[2].y + 20, sampleVoca.voca[localVocalIndex].englishVoca);
    }

    // 보라색 별 라벨 붙이기
    purpleStar.children.iterate(function(child, num){
        if(num==0)
        {
            if(child.x != old_purpleStarArr[0].x || (child.y - old_purpleStarArr[0].y)**2 < 10)
            {
                isPurpleStar_1_Move=true;
            }
        }
        if(num==1)
        {
            if(child.x != old_purpleStarArr[1].x || (child.y - old_purpleStarArr[1].y)**2<10)
            {
                isPurpleStar_2_Move=true;
            }
        }
        if(num==2)
        {
            if(child.x != old_purpleStarArr[2].x || (child.y - old_purpleStarArr[2].y)**2<10)
            {
                isPurpleStar_3_Move=true;
            }
        }
    });

    if(isPurpleStar_1_Move)
    {
        purpleStarLabel_1.destroy();
        var localVocalIndex = Math.floor(starAppearanceCnt%sampleVoca.voca.length)+3;

        purpleStarLabel_1 = this.add.text(old_purpleStarArr[0].x - 40, old_purpleStarArr[0].y + 20, sampleVoca.voca[localVocalIndex].englishVoca);
    }
    
    if(isPurpleStar_2_Move)
    {
        purpleStarLabel_2.destroy();
        var localVocalIndex = Math.floor(starAppearanceCnt%sampleVoca.voca.length)+4;

        purpleStarLabel_2 = this.add.text(old_purpleStarArr[1].x - 40, old_purpleStarArr[1].y + 20, sampleVoca.voca[localVocalIndex].englishVoca);
    }

    if(isPurpleStar_3_Move)
    {
        purpleStarLabel_3.destroy();
        var localVocalIndex = Math.floor(starAppearanceCnt%sampleVoca.voca.length)+5;

        purpleStarLabel_3 = this.add.text(old_purpleStarArr[2].x - 40, old_purpleStarArr[2].y + 20, sampleVoca.voca[localVocalIndex].englishVoca);
    }

    //*********** Player
    if(player.x != old_x || player.y != old_y)
    {
        playerNickName.destroy();
        playerNickName = this.add.text(player.x-20, player.y+20, 'Sels', {fontSize: '18px', fill: '#111'});
    }

    else if(player.x == old_x || player.y == old_y)
    {
        isPlayerMove=false;
    }

    if (gameOver)
    {
        return;
    }

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }

    star1.children.iterate(function(child, num){
        //  old star 좌표, score 정의
        var old_yellowStar =[{
            "x": "value",
            "y": "value",
            "score": "value"
        }]

        old_yellowStar.x = child.x;
        old_yellowStar.y = child.y;
        old_yellowStarArr[num] = old_yellowStar;
    })

    purpleStar.children.iterate(function(child, num){
        var old_purpleStar =[{
            "x": "value",
            "y": "value",
            "score": "value"
        }];

        old_purpleStar.x = child.x;
        old_purpleStar.y = child.y;
        old_purpleStarArr[num] = old_purpleStar;
    });

   
    old_x = player.x;
    old_y = player.y;
}

function collectStar (player, star)
{
    star.disableBody(true, true);

    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);

    //console.log("활성 별: " + stars.countActive(true));
    if (star1.countActive(true) == 0)
    {
        //  A new batch of stars to collect
        star1.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        purpleStar.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;
    }
    
}

function badCollectStar(player, purpleStar)
{
    purpleStar.disableBody(true, true);
    score -= 15;
    scoreText.setText('Score: ' + score);
}

function hitBomb (player, bomb)
{
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
}

function makePlayerLabelOnMove(x, y)
{
    playerNickName = this.add.text(x, y, 'Sels', {fontSize: '18px', fill: '#111'});
    playerNickName.destroy();
}

/**
*min, max사이의 정수 값 출력
**/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }
