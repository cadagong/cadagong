//////////////////
//GLOBAL VARIABLES
//////////////////

let animalEmojis = ['🐩', '🐈', '🐖', '🐄', '🐎', '🐑', '🦆', '🐥', '🐓', '🦃',
'🦉', '🐀', '🐬', '🦜', '🐒', '🐺', '🦁', '🐸', '🐍', '🦇', '🐝', '🦅',
'🐗', '🦟', '🦗', '🦀', '🐠', '🐊', '🐅', '🐳', '🐪', '🦏', '🐐'
];

let faceEmojis = ['😀', '😁','😬', '😰', '😱', '🥵', '🥶', '😳', '🤪', '😵',
 '😡', '😠', '🤬', '😷', '😴','🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤡',
'🥳', '🥴', '🥺', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👿', '👹', '👺', '💀', 
'👻', '👽', '🤖', '💩', '😺', '😸', '😹','😻', '😼', '😽', '🙀', '😿', '😾'
];

let clothesEmojis = ['🧥', '👚', '👕','👖', '👔', '👗', '👙', '👘', '👠', '👡', 
'👢', '👞', '👟', '🥾', '🥿', '🧦', '🧤', '🧣', '🎩','🧢', '👒', '🎓', '👑', '👝', 
'👛', '👜', '💼', '🎒', '👓', '🕶', '🥽', '🥼', '🌂', '🧵', '🧶'
];

let foodEmojis = ['🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🍍','🥭','🥥',
    '🥝','🍅','🍆','🥑','🥦','🥒','🥬','🌽','🥕','🥔','🍠','🥐','🍞','🥖','🥨','🥯','🧀','🥚',
    '🍳','🥞','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🥪','🥙','🌮','🌯','🥗','🥘','🥫','🍝','🍜',
    '🍲','🍛','🍣','🍱','🥟','🍤','🍙','🍚','🍘','🍥','🥮','🥠','🍢','🍡','🍧','🍨','🍦','🥧','🍰',
    '🎂','🍮','🍭','🍬','🍫','🍿','🧂','🍩','🍪','🌰','🥜','🍯','🥛','🍼','☕️','🍵','🥤','🍶','🍺','🍻',
    '🥂','🍷','🥃','🍸','🍹','🍾','🥄','🍴','🥣','🥡','🥢'
];

let travelEmojis = [ '🚗','🚕','🚙','🚌','🚎','🏎','🚓','🚑','🚒','🚐','🚚','🚛','🚜','🛴','🚲','🛵',
'🏍','🚨','🚔','🚍','🚘','🚖','🚡','🚠','🚟','🚃','🚋','🚞','🚝','🚄','🚅','🚈','🚂','🚆','🚇','🚊',
'🚉','✈️','🛫','🛬','🛩','💺','🚀','🛸','🚁','🛶','⛵️','🚤','🛳','⛴','🚢','⚓️','⛽️','🚧','🚦',
'🚥','🚏','🗿','🗽','🗼','🏰','🏯','🎡','🎢','🎠','⛲️','🏝','🏜','🌋','🗻','🏙','🌃','🌌','🌉','🌁',    
'🏕','⛺️','🏠','🏡','🏚','🏗','🏭','🏢','🏬','🏣','🏤','🏥','🏦','🏨','🏪','🏫','🏩','💒','🏛',
'⛪️','🕌','🕍','🕋','🗾','🎑','🏞','🌅','🌄','🌠','🎇','🎆','🌇','🌆'
];

let emojis = animalEmojis.concat(faceEmojis.concat(clothesEmojis.concat(foodEmojis.concat(travelEmojis))));

let selectedEmojis = emojis;

let progressBar = document.getElementById('progress');
let progressBarProgress = 0;

let numberOfEmojis = 10; //number of emojis displayed on screen at start. increases after every finding of waldo

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

let waldoEmojiElement = document.getElementById('waldo-emoji');
let allElements = document.querySelector('#emoji-class');
let box = document.getElementById("box");

document.body.style.transition = '1s';
box.style.backgroundColor = bgChange();

let remainingTime = 100.01; //in percent

let gameStarted = false;
let gameWin = false;


//global variables needed for setting stress bars stress levels
let i = 0;
let sum  = 1;
let norm = 120;
let output2stress = 1;
///////////////////////////////////////
//Emoji Class to create Emoji instances
///////////////////////////////////////
class Emoji {
    constructor() {
        this.emoji = getRandEmoji();
        this.x = window.innerWidth * (randomNum(70)) * 0.01 + 'px' ;
        this.y = window.innerHeight * (randomNum(64)) * 0.01 + 'px' ;
        this.fontSize = randomNum(5) + 3 + 'vmax';
        this.zIndex = '0';
        this.className = 'emoji-class';
        this.position = 'absolute';
    }

    //generate emoji html element
    generate() {
        let emojiElem = document.createElement('div');
        emojiElem.innerHTML = this.emoji;
        emojiElem.className = this.className;
        emojiElem.style.left = this.x;
        emojiElem.style.top = this.y;
        emojiElem.style.fontSize = this.fontSize;
        emojiElem.style.position = this.position;
        emojiElem.style.zIndex = this.zIndex;
        emojiElem.style.transition = '3s';
        emojiElem.style.cursor = 'url(images/magGlassCur.cur), auto)';
        setNonWaldo(emojiElem);        
        box.appendChild(emojiElem);
        return emojiElem;
    }
}


///////////////////
//Utility functions
///////////////////

//random number generator 
function randomNum(number) {
    return Math.floor(Math.random() * number);
}

//get random color
function bgChange() {
    let rndCol = 'rgb(' + randomNum(255) + ',' + randomNum(255) + ',' + randomNum(255) + ')';
    return rndCol;
}

//return random emoji
function getRandEmoji() {
    let emojiCell = randomNum(selectedEmojis.length);
    let emoji = selectedEmojis[emojiCell];
    return emoji;
}

//releases confetti onto user screen
function releaseConfetti() {
    let parent = document.getElementById('box');
    let canvas = document.createElement('canvas');
    canvas.id = 'my-canvas';
    parent.append(canvas);
    
    let gif = document.createElement('img');
    gif.id = 'trumpetGif';
    gif.src = './images/trumpetGif.gif';
    gif.style.zIndex = '500';
    gif.style.width = '40vmin';
    gif.style.top = '32%';
    gif.style.left = '42%';
    gif.style.position = 'absolute';
    parent.append(gif);

    let confettiSettings = {
        target: 'my-canvas',
        max: 1000
    };
    let confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    //remove confetti after 6 seconds
    setTimeout(function() {
        canvas.remove();
        gif.remove();
    }, 6000);    
}

//run when user has won the game
function win() {
    releaseConfetti(); //user has "won", release confetti
    remainingTime = 100;
    let audio = document.getElementById('trumpet');
    audio.play(); //play trumpet win sound
    gameWin = true;
    while (document.getElementsByClassName('emoji-class')[0]) {
        document.getElementsByClassName('emoji-class')[0].remove();
    }    
    setTimeout(function() {
        setToStartScreen();
    }, 6000);    
}

function startTimer() {
    let countdown = setInterval( function(){ 
        setCountDownBar();        
        remainingTime = remainingTime - 2;
        //if timer runs out
        if(remainingTime <= 0) {
            clearInterval(countdown);
            timerRunOut();
        }
        if(gameWin) {
            clearInterval(countdown);
        }
    }, 1000 );
}


function timerRunOut() {        
    let audio = document.getElementById("lose");
    audio.play(); //play "wrong" sound   
    while (document.getElementsByClassName('emoji-class')[0]) {
        document.getElementsByClassName('emoji-class')[0].remove();
    }   
    let parent = document.getElementById('box');
    let gif = document.createElement('img');
    gif.id = 'sadGif';
    gif.src = './images/sadGif.gif';    
    gif.style.width = '100vmin';  
    gif.style.top = '35%';
    gif.style.left = '25%';           
    gif.style.position = 'absolute';
    parent.append(gif);
    setTimeout(function() {
        audio.pause();
        audio.currentTime = 0; 
        gif.remove(); 
        remainingTime = 100.1; 
        setCountDownBar();     
        backgroundColor = bgChange();        
        setToStartScreen();                        
    }, 4000);

}




///////////////////
//Setting up events
///////////////////


//set up events for non-waldo emojis
function setNonWaldo(nonWaldo) {
    //nonWaldo.style.cursor = 'pointer'

    nonWaldo.onclick = function(e) {
        setProgressBar(-10);

        let audio = document.getElementById("audio2");
        audio.play(); //play "wrong" sound
        setTimeout(function() {
            audio.pause();
            audio.currentTime = 0;
        }, 500);
    }
}


//create waldo elements and set event tiggers
function setEmojiToFind(waldoEmoji) {
    waldoEmojiElement.textContent = waldoEmoji.emoji;
    //emoji to click on    
    let emojiToFind = new Emoji();
    emojiToFind.emoji = waldoEmoji.emoji;
    emojiToFind.zIndex = '1';
    let elementToFind = emojiToFind.generate();          

    //define onclick event when "waldo" is found
    elementToFind.onclick = function(e) {
    	console.log("clickedon");

        if (stressBarNumber === 1) {
        	norm = sum ; 
        	// fifty = 50;
        	setStressBar(50, ('stress' + stressBarNumber));  
        	// console.log("set to 50", fifty);
    	};   

        setProgressBar(10);
        addStressBar();
        sum = 1; 
        i = 0;      
        remainingTime += 10;
        if(remainingTime >= 100.01) {
            remainingTime = 100.01;
        }
        setCountDownBar();                    
        if (progressBar.style.width == '100%') { win(); return; }       
        //add found "waldo" emoji back into emojis array
        selectedEmojis.push(waldoEmoji.emoji);
        numberOfEmojis += 10; //increase difficulty
        box.style.backgroundColor = bgChange();
        let audio = document.getElementById("audio");
        audio.play(); //play "ding" sounds
        setTimeout(function() {
            audio.pause();
            audio.currentTime = 0;
        }, 1000);
        setTimeout(function() {
            resetPage();
        }, 600);
    }
}



///////////////////////////////////
//Page reset and populate functions
///////////////////////////////////

//resets page after emoji is found
function resetPage() {    
    //document.body.style.backgroundColor = bgChange(); 
       
    while (document.getElementsByClassName('emoji-class')[0]) {
        document.getElementsByClassName('emoji-class')[0].remove();
    }
    
    populatePage(); //repopulate the page with new emojis
}


//populate page with random emojis
function populatePage() {
    //emoji under magnifying glass
    let waldoEmoji = new Emoji();
    setEmojiToFind(waldoEmoji);

    //remove emoji to be found from emojis array
    for (let j = 0; j < selectedEmojis.length; j++) {
        if (waldoEmoji.emoji == selectedEmojis[j]) {
            selectedEmojis.splice(j, 1);
        }
    }
    //generate emojis from remaining emojis 
    //not including the emoji to be
    for (let j = 0; j < numberOfEmojis; j++) {
        let emoji = new Emoji();
        emoji.generate();
    }
}



function setToStartScreen() {  
    //remove existing stress bars
    while (document.getElementsByClassName('stress')[0]) {
        document.getElementsByClassName('stress')[0].remove();
    }
    //start bg change
    let contBgChange = setInterval(function() {
        box.style.transition = '3s'
        box.style.backgroundColor = bgChange();    
    }, 3000);      
    progressBar.style.width = '0%';    
    progressBarProgress = 0;            
    document.getElementById('waldo-emoji').textContent = '';
    gameStarted = false;    
    box.style.cursor = 'auto';
    distanceFromLeft = 0.5; //for stress bars
    stressBarNumber = 1; 
    sum = 0;   

    if(gameWin) { //game was won 
        gameWin = false;
        let parent = document.getElementById('box');   
        let restartBtn = document.createElement("img");
        let nextLvlBtn = document.createElement('img');
        
        //restart button            
        restartBtn.src = './images/restart.png';
        restartBtn.id = 'restartBtn'; 
        restartBtn.style.width = '10vmin';
        restartBtn.style.position = 'absolute';
        restartBtn.style.left = '43%';
        restartBtn.style.top = '35vmin'; 
        restartBtn.style.border = '3px solid darkslategrey';
        restartBtn.style.borderRadius = '10vmin';       
        restartBtn.onclick = (function(event) {
            clearInterval(contBgChange);
            restartBtn.remove();
            nextLvlBtn.remove();
            setToStartScreen();            
        })  
        restartBtn.onmouseover = function(event) {
            restartBtn.style.cursor = 'pointer';
            restartBtn.style.border = '3px solid lightgreen';
        }
        restartBtn.onmouseout = function(event) {
            restartBtn.style.cursor = 'auto';
            restartBtn.style.border = '3px solid darkslategrey';
        }
        parent.append(restartBtn);

        //next level button        
        nextLvlBtn.src = './images/nextLvl.png';
        nextLvlBtn.id = 'nextLvlBtn';
        nextLvlBtn.style.width = '10vmin';
        nextLvlBtn.style.position = 'absolute';
        nextLvlBtn.style.left = '51%';
        nextLvlBtn.style.top = '35vmin';
        nextLvlBtn.style.border = '3px solid darkslategrey';
        nextLvlBtn.style.borderRadius = '10vmin';
        nextLvlBtn.onmouseover = function(event) {
            nextLvlBtn.style.cursor = 'pointer';
            nextLvlBtn.style.border = '3px solid lightgreen';
        }
        nextLvlBtn.onmouseout = function(event) {
            nextLvlBtn.style.cursor = 'auto';
            nextLvlBtn.style.border = '3px solid darkslategrey';
        }
        nextLvlBtn.onclick = function(event) {
            addStressBar();
            clearInterval(contBgChange);
            restartBtn.remove();
            nextLvlBtn.remove();            
            box.style.cursor = 'url(images/magGlassCur.cur), auto';               
            populatePage();
            startTimer();
            gameStarted = true; 
        }
        parent.append(nextLvlBtn);        
    } 
    else { //game was lost
        let parent = document.getElementById('box');       
        let playBtn = document.createElement("img");
        playBtn.src = './images/playBtn.png';
        playBtn.id = 'startBtn';    
        parent.append(playBtn);
        numberOfEmojis = 10;
        $('#startBtn').mouseover(function(event) {
            let btn = document.getElementById('startBtn');
            btn.style.border = '5px solid lightgreen'
        })
        $('#startBtn').mouseout(function(event) {
            let btn = document.getElementById('startBtn');
            btn.style.border = '5px solid darkslategrey'
        })
        $('#startBtn').mouseup(function(event) {
            gameWin = false;
            let btn = document.getElementById('startBtn');    
            btn.remove();
            box.style.transition = '0.5s'
            box.style.cursor = 'url(images/magGlassCur.cur), auto';
            clearInterval(contBgChange);    
            populatePage();
            startTimer();
            addStressBar();
            gameStarted = true;    
        })
    }      
}




////////////////////////////////
//functions that set emoji types
////////////////////////////////

function unselectButton() {
    $("#mystery, #travel, #food, #clothes, #faces, #animals").css("border-left", "1vmin solid black");
    $("#mystery, #travel, #food, #clothes, #faces, #animals").css("border-bottom", "1vmin solid black");
    $("#mystery, #travel, #food, #clothes, #faces, #animals").css("border-top", "0");
    $("#mystery, #travel, #food, #clothes, #faces, #animals").css("border-right", "0");
}
function selectButton(type) {
    $("#" + type).css("border-top", "1vmin solid black");
    $("#" + type).css("border-right", "1vmin solid black");
    $("#" + type).css("border-bottom", "0");
    $("#" + type).css("border-left", "0");
}

function setToAnimalEmojis() {
    selectedEmojis = animalEmojis;
    unselectButton();
    selectButton("animals");
    if(gameStarted) {
        resetPage();
    }
}
function setToFaceEmojis() {
    selectedEmojis = faceEmojis;
    unselectButton();
    selectButton("faces");
    if(gameStarted) {
        resetPage();
    }
}
function setToClothesEmojis() {
    selectedEmojis = clothesEmojis;
    unselectButton();
    selectButton("clothes");
    if(gameStarted) {
        resetPage();
    }
}
function setToFoodEmojis() {
    selectedEmojis = foodEmojis;
    unselectButton();
    selectButton("food");
    if(gameStarted) {
        resetPage();
    }
}
function setToTravelEmojis() {
    selectedEmojis = travelEmojis;
    unselectButton();
    selectButton("travel");
    if(gameStarted) {
        resetPage();
    }
}
function setToAllEmojis() {
    selectedEmojis = emojis;
    unselectButton();
    selectButton("mystery");
    if(gameStarted) {
        resetPage();
    }
}


////////////////
//Pull-Down Menu
////////////////

// // Set the width of the side navigation to 26%
// function openNav() {    
//     document.getElementById('menu-btn').style.height = '400%';                                        
//     document.getElementById('menu-btn').style.borderRadius = '0px 0px 6px 6px'; 
//     document.getElementById("arrow").textContent = '⮭';
//     document.getElementById("arrow").style.top = '78%';    
//     document.getElementById("menu-btn").onclick = closeNav;  
// }
  
// //Set the width of the side navigation to 5%
// function closeNav() {        
//     document.getElementById("arrow").textContent = '⮯';
//     document.getElementById("arrow").style.top = '20%';    
//     document.getElementById('menu-btn').style.height = '100%';  
//     document.getElementById('menu-btn').style.borderRadius = '0px 0px 6px 0px';    
//     document.getElementById("menu-btn").onclick = openNav;                            
// }



///////////////////////////
//Progress/Stress/etc. Bars 
///////////////////////////

//resets progress animation
function resetAnimation(subject) {
    subject.style.animation = 'none';
    subject.offsetHeight; // trigger reflow 
    subject.style.animation = null;
}


//updates progress bar
function setProgressBar(num) {    
    progressBarProgress += num; 
    if(progressBarProgress < 0) {
        progressBarProgress = 0;
    }
    progressBar.style.setProperty('width', progressBarProgress + '%');  

}


//updates stress bar
let stressBarNumber = 0;
function setStressBar(stress, barId) { 
    let stressBar = document.getElementById(barId);      
    stressBar.style.setProperty('height', (stress) +"%");    
    // prevStress += stress;        
}


let distanceFromLeft = 0.5;
//adds a new stress bar
function addStressBar() {

    stressBarNumber += 1;   

    let parent = document.getElementById("stressMeters");
    //new stress meter
    let newBar = document.createElement("div");
    parent.append(newBar);
    newBar.id = 'meter21';
    newBar.className = 'stressMeters';
    newBar.style.left = (2.5 + distanceFromLeft) + 'vmin';
    distanceFromLeft += 2.5;    

    //set stress level element
    parent = newBar;
    let newStressLevel = document.createElement("span");
    newStressLevel.id = 'stress' + stressBarNumber;
    console.log("stressbar#", stressBarNumber, output2stress);
    newStressLevel.className = 'stress';
    newStressLevel.style.backgroundColor = bgChange();
    parent.append(newStressLevel);    
}


function setCountDownBar() {     
    let countdownBar = document.getElementById('countdown');     
    resetAnimation(countdownBar);
    countdownBar.style.setProperty('height', (remainingTime) + '%');    
    //countdownBar.style.setProperty('animation-duration',  countdownTime + 's' );                  
}




////////////////
//Mouse Tracking
////////////////

let x1 = 1;
let y1 = 1;
let x2 = 1;
let y2 = 1;
let stress = 1;
$('html').mousemove(function (event) {                   
    var x2 = event.clientX;
    var y2 = event.clientY;   
    
    if (x2 === undefined) {
    	x2 = x1;
    	y2 = x2;
    }
    
    sum += Math.pow ( Math.pow ( x2 - x1 , 2 ) + Math.pow ( y2 - y1 , 2 ) , 0.5 );   
    // output2stress = 100 * ( sum / norm );
    output2stress = 50 + ( ( sum - norm ) / norm ) * 50;
    if (stressBarNumber === 1 || output2stress === 0 ) {
    	output2stress = 100 * ( Math.pow( sum , 0.5) / norm );
    	console.log("scientific answer");
    }

    //console.log(sum, output2stress);
    if(gameStarted) {
        console.log("stress updated bar#", stressBarNumber, output2stress);
        setStressBar(output2stress, ('stress' + stressBarNumber)); 
               
    }
    x1 = x2;
    y1 = y2;             
});


/*
sum += stress
sum the distances, restart no new stage
example: (variable - first sum normalized - 1/100)
first sum = 9000
stress level  = 90 -> onclick. normalize to 50 (new factor = 1/180)
second sum = 5000
ratio = n(sum)/(n1)(sum) = 5000/9000 = 5/9 -> 5/9*50 ||| (5/9)^3 / ((5/9)^2 -1)
third sum = 11200
ratio = 112/90 -> 112/90 * 50
normaliz first to 50% -> output normalization factor
normalizefor every step
*/

//when page is first loaded, background will continuously change color
let contBgChange = setInterval(function() {
    box.style.transition = '3s'
    box.style.backgroundColor = bgChange();    
}, 3000);





/////////////////////
//Start Button Events
/////////////////////


$('#startBtn').mouseover(function(event) {
    let btn = document.getElementById('startBtn');
    btn.style.border = '5px solid lightgreen'
})
$('#startBtn').mouseout(function(event) {
    let btn = document.getElementById('startBtn');
    btn.style.border = '5px solid darkslategrey'
})


$('#startBtn').mouseup(function(event) {
    let btn = document.getElementById('startBtn');    
    btn.remove();
    box.style.transition = '0.5s'
    box.style.cursor = 'url(images/magGlassCur.cur), auto';
    clearInterval(contBgChange);    
    populatePage();
    startTimer();
    gameStarted = true;  
    addStressBar();  
})


