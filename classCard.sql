drop DATABASE classCardClone;

CREATE DATABASE classCardClone;

Use classCardClone;

CREATE TABLE teacher(
`name` VARCHAR(50) NOT NULL,
`id` VARCHAR(30) UNIQUE NOT NULL,
`password` varchar(200) NOT NULL,
`email` VARCHAR(50) NOT NULL,
`phone` VARCHAR(25) NOT NULL,
`teacherOf` VARCHAR(30) NOT NULL DEFAULT 'institute' COMMENT '학교선생님: school, 학원 선생님: institute',
`isTermAccepted` boolean NOT NULL DEFAULT 0 COMMENT '약관 동의 여부 확인',
`isMarketingTermAccepted` BOOL NOT NULL DEFAULT False COMMENT '마케팅 동의 여부 확인',
`registerAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(`id`)
);

CREATE TABLE teacherToClassConnection(
   `teacherId` VARCHAR(30) NOT NULL,
   `classCode` VARCHAR(30) NOT NULL,
   `className` VARCHAR(40) NOT NULL,
   `mode` VARCHAR(20) DEFAULT 'inviteAll' COMMENT'학생이 직접 선생님의 클래스 코드를 보고 등록하는 방식: inviteAll // 선생님만이 학생을 직접 클래스에 등록할 수 있는 방식: teacherOnly',
   `maximumQuestion` INT DEFAULT 50 COMMENT '최대 문항 수',
   `questionType` VARCHAR(15) DEFAULT 'multiple' COMMENT'문제 유형. 객관식: multiple 주관식: subjective',
   `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY(classCode),
   FOREIGN KEY(teacherId) REFERENCES teacher(ID)
);


select * from student;

# 1월 27일 추가/////////////////////////////////////////

CREATE TABLE studyClass(
`classCode` VARCHAR(50) UNIQUE NOT NULL,
`relatedTeacherId` VARCHAR(30) UNIQUE NOT NULL,
`relatedSetCode` INT NOT NULL,
FOREIGN Key(relatedTeacherId) REFERENCES teacher(id),
PRIMARY KEY(classCode)
);

CREATE TABLE student(
	`name` VARCHAR(20) NOT NULL,
    `ID` VARCHAR(30) UNIQUE NOT NULL,
	`password` VARCHAR(30) NOT NULL,
	`email` VARCHAR(30) NOT NULL,
	`phone` VARCHAR(25) NOT NULL,
	`vocaRange` INT DEFAULT 10 COMMENT '영어단어 구간의 갯수를 선택할 수 있고 이러한 구간은 전체 세트에 적용된다.',
	`isTermAccepted` boolean DEFAULT 0 COMMENT '약관 동의 여부 확인',
	`isMarketingTermAccepted` BOOL DEFAULT False COMMENT '마케팅 동의 여부 확인',
    `registerAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(ID)
);

CREATE TABLE wordSet(
    `setName` VARCHAR(30) UNIQUE NOT NULL,
    `setType` VARCHAR(15) DEFAULT 'word' COMMENT'세트 타입을 저장한다. word: 단어 세트, sentence: 문장세트, drill: 드릴세트',
    `setCode` INT AUTO_INCREMENT,
    `setIndex` INT NOT NULL COMMENT '세트 순서',
    PRIMARY KEY(setCode)
);
alter table wordSet auto_increment = 1000;

CREATE TABLE setToClassConnection(
    `setCode` INT,
    `classCode` VARCHAR(30),
    foreign key (setCode) REFERENCES wordSet(setCode),
    foreign key (classCode) REFERENCES studyClass(classCode)
);

CREATE TABLE word(
    `index`     int AUTO_INCREMENT primary key,
    `setCode` INT NOT NULL,
    `englishWord` VARCHAR(50) NOT NULL,
    `koreanWord` VARCHAR(50) NOT NULL,
     reference   text        not null COMMENT '다음 사전 url',
    `likeWord` boolean DEFAULT false COMMENT '중요카드 여부',
    FOREIGN KEY(setCode) REFERENCES wordSet(setCode)
);

CREATE TABLE studentToWordSetConnection(
	`studentId` VARCHAR(30) UNIQUE NOT NULL,
	`setCode` INT NOT NULL,
	`isUsed` BOOLEAN DEFAULT FALSE,
	`registerAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(setCode) REFERENCES wordSet(setCode),
	FOREIGN KEY (studentId) REFERENCES student(ID)
);



CREATE TABLE studentFolder(
    `studentID` VARCHAR(30) UNIQUE NOT NULL,
    `name` VARCHAR(50) NOT NULL COMMENT '폴더 명',
    `setCode` INT NOT NULL,
    FOREIGN KEY(studentID) REFERENCES student(ID)
);

CREATE TABLE teacherFolder(
    `teacherId` VARCHAR(30) NOT NULL,
    `name` VARCHAR(50) NOT NULL COMMENT '폴더 명',
    `setCode` INT NOT NULl,
    FOREIGN KEY (teacherId) REFERENCES teacher(id)
);


#일단 메세지 알림은 isRead로 확인하면 될듯
CREATE TABLE message(
	`sender` VARCHAR(30) NOT NULL,
	`receiver` VARCHAR(30) NOT NULL,
	`contents` TEXT NOT NULL,
	`isRead` BOOLEAN DEFAULT FALSE COMMENT '메시지를 읽었는지 여부를 확인한다. 기본은 0',
	`writeTime` TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP
);


#---------------------------
CREATE TABLE studentToClassConnection(
	`studentId` VARCHAR(30) UNIQUE NOT NULL,
	`classCode` VARCHAR(30) NOT NULL,
	`registerAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(classCode) REFERENCES teacherToClassConnection(classCode),
	FOREIGN KEY (studentId) REFERENCES student(ID)
);

CREATE TABLE report(
`studentId` VARCHAR(30) NOT NULL,
`setCode` INT NOT NULL,
`shadowCardCnt` INT COMMENT '학습한 카드 수 세기',
`memorizeCardCnt` INT COMMENT '암기한 카드 수 세기',
`recallCardCnt` INT COMMENT '리콜한 카드 수 세기',
`spellCardCnt` INT COMMENT '스펠링한 카드 수 세기',
`speaking` INT,
FOREIGN KEY (setCode) REFERENCES wordSet(setCode),
FOREIGN KEY (studentId) REFERENCES studentToClassConnection(studentId)
);
#drop table Report;

CREATE TABLE gameResult(
`setCode` INT NOT NULL,
`studentId` VARCHAR(50) UNIQUE NOT NULL,
`score` INT,
`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(setCode),
FOREIGN KEY(setCode) REFERENCES report(setCode)
);


CREATE TABLE wordTestRule(
    `classCode` VARCHAR(50) not null ,
    `testWordCnt` int not null ,
    `wordMultiple` int ,
    `wordSubjective` int,
    `meanMultiple` int,
    `meanSubjective` int,
    `pronounceMultiple` int,
    `pronounceSubjective` int,
    `exampleMultiple` int,
    `exampleSubjective` int,
    `multipleChoice` int comment '다지선다형 선택',
    `inputTime` int comment '단안 입력시간 제한',
    `targetScore` int comment '목표점수 제시',
    `chance` int comment '응시제한 횟수',
    `retry` boolean default false comment '일정시간 재응시 금지',
    `letter` boolean default false comment '대소문자 구분',
    `lackRate` boolean default false comment '필수 학습진도 제한',
    foreign key (classCode) REFERENCES studyClass(classCode)
);

CREATE TABLE answerTestRule(
    `classCode` VARCHAR(50) not null ,
    `isRecentErrorQuest` boolean default true COMMENT '직전 오답만 출제하기. 기본은 true',
    `targetScore` int comment '목표점수 제시',
    `chance` int comment '응시제한 횟수',
    `studentScores` boolean default true COMMENT '학생이 주관식 채점. 기본은 True',
    `teacherScores` boolean default false COMMENT '선생님이 주관식 채점. 기본은 false',
    `letter` boolean not null default false comment '대소문자 구분',
    foreign key (classCode) REFERENCES studyClass(classCode)
);

CREATE TABLE termTestRule(
    `classCode` VARCHAR(50) not null ,
    `testWordCnt` int not null ,
    `wordMultiple` int ,
    `wordSubjective` int,
    `meanMultiple` int,
    `meanSubjective` int,
    `multipleChoice` int comment '다지선다형 선택',
    `inputTime` int comment '단안 입력시간 제한',
    `targetScore` int comment '목표점수 제시',
    `chance` int comment '응시제한 횟수',
    `retry` boolean not null default false comment '일정시간 재응시 금지',
    `letter` boolean not null default false comment '대소문자 구분',
    `lackRate` boolean not null default false comment '필수 학습진도 제한',
    foreign key (classCode) REFERENCES studyClass(classCode)
);

CREATE TABLE listeningTestRule(
    `classCode` VARCHAR(50) not null ,
    `isShuffle` boolean default false,
    `isRecentErrorQuest` boolean NOT NULL default false COMMENT '직전 오답만 출제하기. 기본은 false',
    `targetScore` int comment '목표점수 제시',
    `chance` int comment '응시제한 횟수',
    `realTimeFeedback` VARCHAR(50) default 'AnswerOK, RelistenOK' COMMENT '정답공개, 다시듣기허용: AnswerOK, RelistenOK// 정답비공개, 다시듣기 허용: AnswerNO, RelistenOK//정답비공개, 다시듣기 필수: AnswerNO, RelistenMUST//피드백 없음: NO FEEDBACK',
    `answerPublic` VARCHAR(50) default  'AnswerOK' COMMENT '정답 공개: AnswerOK//정답 숨김: AnswerNo//응시제한횟수 도달 후 정답 공개: AnswerOK AfterEnd',
    `retry` boolean default false comment '일정시간 재응시 금지',
    foreign key (classCode) REFERENCES studyClass(classCode)
);

#--------------------------------------------------

-- auto-generated definition
create table sentenceTestRule
(
    classCode       VARCHAR(50)          not null primary key,
    testSentenceCnt int                  not null,
    arrangement     int                  null,
    input           int                  null,
    dictation       int                  null,
    shuffle         tinyint(1) default 0 comment '문항순서 셔플',
    testWrongWord   tinyint(1) default 0 comment '직전 오답 제출',
    inputTime       int                  null comment '답안 입력시간 제한',
    targetScore     int                  null comment '목표점수 제시',
    chance          int                  null comment '응시제한 횟수',
    retry           tinyint(1) default 0 not null comment '일정시간 재응시 금지',
    lackRate        tinyint(1) default 0 not null comment '필수 학습진도 제한',
    foreign key (classCode) REFERENCES studyClass(classCode)
);

-- auto-generated definition
create table drillTestRule
(
    classCode     VARCHAR(50)          not null primary key,
    shuffle       tinyint(1) default 0 not null comment '문항순서 셔플',
    testWrongWord tinyint(1) default 0 not null comment '직접 오답 제출',
    targetScore   int                  null comment '목표점수 제시',
    chance        int                  null comment '응시제한 횟수',
    feedback      int        default 1 comment '실시간 피드백',
    openAnswer    int        default 1 comment '시험지 정답 공개',
    retry         tinyint(1) default 0 comment '일정시간 재응시 금지',
    foreign key (classCode) REFERENCES studyClass(classCode)
);

-- auto-generated definition
create table matchingCrash
(
    setCode      int         not null,
    degree       int         null comment '매칭 시도 회차',
    studentId    varchar(50) not null,
    matchingScore int         null,
    matchingDate  DATETIME        null DEFAULT CURRENT_TIMESTAMP,
    crashScore   int         null,
    crashDate    DATETIME        null DEFAULT CURRENT_TIMESTAMP,
    primary key (studentId, setCode),
    foreign key (setCode) references wordSet(setCode),
    foreign key (studentId) references student(id)
);


-- auto-generated definition
create table studentSpeaking
(
    `index`            int         not null comment '단어 인덱스',
    studentId          varchar(50) not null primary key,
    `setCode` INT NOT NULL,
    userPreviewCnt     int         null comment '단어 프리부 횟수',
    userShadowingCnt   int         null comment '단어 쉐도잉 횟수',
    userDeclamationCnt int         null comment '단어 낭독 횟수',
    foreign key (`index`) references word(`index`),
    foreign key (setCode) references wordSet(setCode),
    foreign key (studentId) references student(id)
);

-- auto-generated definition
create table studentStudyRate
(
    `index`      int not null comment '단어 인덱스',
    studentId  varchar(50) not null primary key,
    userMemory tinyint(1) default 0  comment '암기 여부',
    userRecall tinyint(1) default 0  comment '리콜 여부',
    userSpell  tinyint(1) default 0  comment '스펠 여부',
    foreign key (`index`) references word(`index`),
    foreign key (studentId) references student(id)
);

create table manager
(
  `name` varchar(50) ,
  `id` varchar(50) not null primary key,
  `password` varchar(50) not null ,
);

create table managerStudybook
(
  `bookName` varchar(50) not null,
  `bookImg` varchar(100) ,
  `setCode` not null primary key,
);

create table managerSet 
(
  `menu` varchar(50) not null primary key,
  `createSet` boolean not null default false comment '세트생성 주체 제한',
);

create table managerCnt
(
  `classCnt` int not null primary key,
  `folderCnt` int default 5 ,
  `folderSetCnt` int default 5,
  `setCnt` int default 5,
  `studentCnt` int default 5,
  `chatCnt` int date 5
);

create table managerChat
(
  `chatWord` varchar(50) not null primary key comment '비속어, 금지어 채팅 제한'
);