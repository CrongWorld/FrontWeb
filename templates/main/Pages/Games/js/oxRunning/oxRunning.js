const sampleVoca =
{
    "setCode": 1234,
    "textBookName": "Sample Set",
    "voca": [
    { "vocaindex": 6, "englishVoca": "walk", "koreanMean": "걷다", "score": 10 },
    { "vocaindex": 1, "englishVoca": "cellphone", "koreanMean": "핸드폰", "score": -15 },
    { "vocaindex": 3, "englishVoca": "camera", "koreanMean": "카메라", "score": -15 },
    { "vocaindex": 2, "englishVoca": "fight", "koreanMean": "싸우다", "score": 10 },
    { "vocaindex": 4, "englishVoca": "pedestrian", "koreanMean": "보행자", "score": -15 },
    { "vocaindex": 16, "englishVoca": "speak", "koreanMean": "말하다", "score": 10 },
    { "vocaindex": 12, "englishVoca": "dance", "koreanMean": "춤추다", "score": 10 },
    { "vocaindex": 5, "englishVoca": "banana", "koreanMean": "바나나", "score": -15 },
    { "vocaindex": 7, "englishVoca": "bowl", "koreanMean": "공기/밥그릇", "score": -15 },
    { "vocaindex": 8, "englishVoca": "butter", "koreanMean": "버터", "score": -15 },
    { "vocaindex": 9, "englishVoca": "cake", "koreanMean": "케잌", "score": -15 },
    { "vocaindex": 10, "englishVoca": "chicken", "koreanMean": "닭", "score": -15 },
    { "vocaindex": 11, "englishVoca": "actually", "koreanMean": "사실은", "score": -15 },
    { "vocaindex": 13, "englishVoca": "already", "koreanMean": "벌써", "score": -15 },
    { "vocaindex": 14, "englishVoca": "see", "koreanMean": "보다", "score": -15 },
    { "vocaindex": 15, "englishVoca": "also", "koreanMean": "또한", "score": -15 }, 
    { "vocaindex": 17, "englishVoca": "and", "koreanMean": "그리고", "score": -15 },
    { "vocaindex": 18, "englishVoca": "angry", "koreanMean": "화가 나다", "score": 10 },
    { "vocaindex": 19, "englishVoca": "animal", "koreanMean": "동물", "score": -15 },
    { "vocaindex": 20, "englishVoca": "another", "koreanMean": "또 하나/다른", "score": -15 }
    ]
}
var player;
var camera;
var cursors;
var gameModeText;
var blockingMonster1, blockingMonster2, blockingMonster3, blockingMonster4;
var speedStar;
var monsterIdx = [];
var isJump = 0;
var gameOver = false;

//효과음 관련
var audioJSON = {
    spritemap: {
        'alien death': {
            start: 1,
            end: 2,
            loop: false
        },
        'boss hit': {
            start: 3,
            end: 3.5,
            loop: false
        },
        'escape': {
            start: 4,
            end: 7.2,
            loop: false
        },
        'meow': {
            start: 8,
            end: 8.5,
            loop: false
        },
        'numkey': {
            start: 9,
            end: 9.1,
            loop: false
        },
        'ping': {
            start: 10,
            end: 11,
            loop: false
        },
        'death': {
            start: 12,
            end: 16.2,
            loop: false
        },
        'shot': {
            start: 17,
            end: 18,
            loop: false
        },
        'squit': {
            start: 19,
            end: 19.3,
            loop: false
        }
    }
};
var isStarHit = false;


//맵 생성 관련
const defaultPlatformX = 1700;
const platformNum = 10;
var platFormXIdx = [];

//캐릭터 이동속도 관련
var currentTime, slowerStartTime;
var characterVelocity = 1000;
//시간 관련
var gameStartTime = 0;
var currentTimeText;

//현재 상황 관련
var currentStatusText;
var stage = 1;
var millis=0;

//게임 설정
var config = {
    type: Phaser.CANVAS,
    width: 12000,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 150},
            debug: false
        }
    },
    dom: {
        createContainer: true
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

//효과음
var fx;

var game = new Phaser.Game(config);

function preload()
{
    this.load.image('blueSky', 'js/oxRunning/static/assets/sky4.png');
    this.load.image('orangeSky', 'js/oxRunning/static/assets/sunorbit.png');
    this.load.image('ground', 'js/oxRunning/static/assets/platform.png');
    this.load.image('platForm', 'js/oxRunning/static/assets/halfPlatform.png');
    this.load.image('star', 'js/oxRunning/static/assets/star.png');
    
    this.load.spritesheet('dude', 'js/oxRunning/static/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet('BlockMonster', 'js/oxRunning/static/assets/monster/dudeMonster.png', { frameWidth: 32, frameHeight: 48 })
    
    this.load.audio('boden', ['js/oxRunning/static/assets/bodenstaendig_2000_in_rock_4bit.ogg']);
    this.load.audioSprite('sfx', audioJSON, ['js/oxRunning/static/assets/fx_mixdown.ogg']);
}

function create()
{
    //배경음악
    this.music =  this.sound.add('boden', {
		volume: 0.4,
		loop: true
	})
	this.music.play()
    // A simple background for our game
    var bgImage = this.add.image(600, 400, 'blueSky');
    bgImage.setScale(3)
    bgImage.displayWidth = 100000;
    //점프 효과음
    this.sfx = this.sound.addAudioSprite('sfx');

    //별 추가
    //  add physics to stars 
    speedStar = this.physics.add.group({
        key: 'star',
        repeat: 4,
        setXY: { x: 500, y: 0, stepX: 2500}
    });
    
    speedStar.children.iterate(function (child) {
        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.6, 1));
        
    });

    //this.matter.world.setBounds(0, 0, 3200, 600);
    this.cameras.main.setBounds(0, 0, 3200, 600);
    
    //게임 시작 시간 기록 -> 스코어 기록 위함.
    gameStartTime = Date.now();

    //랜덤하게 몬스터 생성.
    //1이면 그라운드, 2면 플랫폼에 생성됨.
    //일정 길이의 플랫폼 생성
    makePlatForm(defaultPlatformX, 3000);
    //console.log(monsterIdx)
    
    

    // 땅과 플랫폼을 생성한다. 
    var ground = this.physics.add.staticGroup();
    var platform = this.physics.add.staticGroup();

    ground.create(0, 700, 'ground').setDisplaySize(24000, 100).refreshBody();
    for(var i = 0; i < platformNum; i++)
    {
        platform.create(platFormXIdx[i], 400, 'platForm').setDisplaySize(1600, 50).refreshBody();
    }
    
    platform.displayWidth = 1500;

    // player 추가
    player = this.physics.add.sprite(100, 450, 'dude');

    //monster 추가
    blockingMonster1 = this.physics.add.sprite(2400, 450, 'BlockMonster')
    blockingMonster1.setScale(5)
    blockingMonster2 = this.physics.add.sprite(5400, 100, 'BlockMonster')
    blockingMonster2.setScale(5)
    blockingMonster3 = this.physics.add.sprite(8400, 100, 'BlockMonster')
    blockingMonster3.setScale(5)
    blockingMonster4 = this.physics.add.sprite(11400, 450, 'BlockMonster')
    blockingMonster4.setScale(5)

    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    // monster 물리법칙 추가
    blockingMonster1.setBounce(0.2);
    blockingMonster1.setCollideWorldBounds(true);
    blockingMonster2.setBounce(0.2);
    blockingMonster2.setCollideWorldBounds(true);
    blockingMonster3.setBounce(0.2);
    blockingMonster3.setCollideWorldBounds(true);
    blockingMonster4.setBounce(0.2);
    blockingMonster4.setCollideWorldBounds(true);

    // 텍스트 추가
    currentTimeText = this.add.text(100, 16, 'Record: ' + 0, {fontSize: '25px', fill: '#000'});
    gameModeText = this.add.text(1000, 16, '동사 찾기', {fontSize: '32px', fill: '#000'});
    //현상태 텍스트
    currentStatusText = this.add.text(-100, 16, 'SLOWED!', {fontSize: '25px', fill: '#000'});
    if(stage==1)
    {
        //1번쨰 갈림길
        word11 = this.add.text(900, 350, sampleVoca.voca[0].englishVoca, {fontSize: '32px', fill: '#000'});
        word12 = this.add.text(900, 610, sampleVoca.voca[1].englishVoca, {fontSize: '32px', fill: '#000'});
        //2번쨰 갈림길
        word21 = this.add.text(3900, 350, sampleVoca.voca[2].englishVoca, {fontSize: '32px', fill: '#000'});
        word22 = this.add.text(3900, 610, sampleVoca.voca[3].englishVoca, {fontSize: '32px', fill: '#000'});
        //3번쨰 갈림길
        word31 = this.add.text(6900, 350, sampleVoca.voca[4].englishVoca, {fontSize: '32px', fill: '#000'});
        word32 = this.add.text(6900, 610, sampleVoca.voca[5].englishVoca, {fontSize: '32px', fill: '#000'});
        //4번쨰 갈림길
        word31 = this.add.text(9900, 350, sampleVoca.voca[6].englishVoca, {fontSize: '32px', fill: '#000'});
        word32 = this.add.text(9900, 610, sampleVoca.voca[7].englishVoca, {fontSize: '32px', fill: '#000'});
    }
   
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

    this.anims.create({
        key: 'blocking',
        frames: this.anims.generateFrameNumbers('BlockMonster', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'stopBlocking',
        frames: this.anims.generateFrameNumbers('BlockMonster', { start: 3, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    //  Input Event
    cursors = this.input.keyboard.createCursorKeys();

    //  충돌 물리법칙 추가
    this.physics.add.collider(player, ground);
    this.physics.add.collider(player, platform);
    this.physics.add.collider(speedStar, platform);
    this.physics.add.collider(speedStar, ground);
    this.physics.add.collider(blockingMonster1, ground);
    this.physics.add.collider(blockingMonster1, platform);
    this.physics.add.collider(blockingMonster2, ground);
    this.physics.add.collider(blockingMonster2, platform);
    this.physics.add.collider(blockingMonster3, ground);
    this.physics.add.collider(blockingMonster3, platform);
    this.physics.add.collider(blockingMonster4, ground);
    this.physics.add.collider(blockingMonster4, platform);

    //플레이어와 몬스터가 충돌시 이벤트 추가
    this.physics.add.overlap(player, blockingMonster1, hitMonster);
    this.physics.add.overlap(player, blockingMonster2, hitMonster);
    this.physics.add.overlap(player, blockingMonster3, hitMonster);
    this.physics.add.overlap(player, blockingMonster4, hitMonster);
    this.physics.add.overlap(player, speedStar, collectStar)
   
    //camera 
    camera = this.cameras.main;
    //camera.setSize(1200, 800);
    //camera.startFollow(player);
}


function update()
{
    // player 속도 관련
    currentTime = Date.now();
    if(currentTime - slowerStartTime > 3000)
    {
        characterVelocity = 1000;
        currentStatusText.setPosition(-20, 16);
    }
    
    //현재 상태 관련
    if(characterVelocity<500)
    {
        currentStatusText.setPosition(player.x + 500, 16);
    }

    //게임 스코어 관련
    millis = (currentTime - gameStartTime)/1000;
    currentTimeText.setText('Record: '+millis);
    //monster.anims.play('blocking');
    if (cursors.left.isDown)
    {
        player.setVelocityX(characterVelocity*-1);

        blockingMonster1.anims.play('blocking', true);
        blockingMonster2.anims.play('blocking', true);
        blockingMonster3.anims.play('blocking', true);
        blockingMonster4.anims.play('blocking', true);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(characterVelocity);

        blockingMonster1.anims.play('blocking', true);
        blockingMonster2.anims.play('blocking', true);
        blockingMonster3.anims.play('blocking', true);
        blockingMonster4.anims.play('blocking', true);
        player.anims.play('right', true);
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(characterVelocity*0.8);

        blockingMonster1.anims.play('blocking', true);
        blockingMonster2.anims.play('blocking', true);
        blockingMonster3.anims.play('blocking', true);
        blockingMonster4.anims.play('blocking', true);
        player.anims.play('turn');
    }
    else
    {
        player.setVelocityX(0);
        
        blockingMonster1.anims.play('stopBlocking', true);
        blockingMonster2.anims.play('stopBlocking', true);
        blockingMonster3.anims.play('blocking', true);
        blockingMonster4.anims.play('blocking', true);
        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        this.sfx.play('squit'); 
        player.setVelocityY(characterVelocity*-1);
    }

    if (isJump == true && cursors.up.isDown)
    {
        this.sfx.play('squit');
        player.setVelocityY(-400);
        isJump = false;
    }

    if(player.body.touching.down == false)
    {
        isJump = true;
    }

    if(player.x > 11700)
    {
        if(stage==1)
        {
            player.setPosition(100, 450);
            stage++;
            console.log(stage);
        }
        else
        {
            player.setPosition(100, 450);
            currentStatusText.setVisible(false);
            currentTimeText.setVisible(false);
            gameModeText.setVisible(false);
            word11.setVisible(false);
            word12.setVisible(false);
            characterVelocity = 0;
            

            this.add.text(400, 380, 'Your Score: '+millis, {fontSize: '40px', fill: '#000'});
        }
    }

    if(isStarHit)
    {
        this.sfx.play('ping');
        //현상태 텍스트
        currentStatusText = this.add.text(player.x + 500, 16, 'SPEED UP!', {fontSize: '25px', fill: '#000'});
        
        isStarHit = false;
    }
    //monster
    camera.setPosition((player.x * -1)+80, 0);
    currentTimeText.setPosition((player.x - 50), 16)
    gameModeText.setPosition((player.x + 1000), 16);
}

function makePlatForm(defaultX, gap)
{
    for(var i=0; i<platformNum; i++) 
    {
        var value = Phaser.Math.Between(1, 2);
        monsterIdx[i] = value;
    }

    platFormXIdx[0] = defaultPlatformX;
    for(var i = 1; i < platformNum; i++)
    {
        platFormXIdx[i] = platFormXIdx[i-1] + gap;
    }
}

function hitMonster(player, blockingMonster)
{
    console.log("hit!");
    slowerStartTime = Date.now();
    characterVelocity = 400;
}

function collectStar (player, star)
{
    star.disableBody(true, true);

    isStarHit = 1; 

    //  Add and update the score
    millis -= 3000

    characterVelocity += 500;
}
