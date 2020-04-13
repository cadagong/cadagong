//////////////////
//GLOBAL VARIABLES
//////////////////

let animalEmojis = ['🐩', '🐈', '🐖', '🐄', '🐎', '🐑', '🦆', '🐥', '🐓', '🦃',
'🦉', '🐀', '🐬', '🦜', '🐒', '🐺', '🦁', '🐸', '🐍', '🦇', '🐝', '🦅',
'🐗', '🦟', '🦗', '🦀', '🐠', '🐊', '🐅', '🐳', '🐪', '🦏', '🐐'
];

let faceEmojis = ['😀', '😁','😬', '😰', '😱', '🥵', '🥶', '😳', '🤪', '😵',
 '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤡',
'🥳', '🥴', '🥺', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👿', '👹', '👺', '💀', 
'👻', '👽', '🤖', '💩', '😺', '😸', '😹','😻', '😼', '😽', '🙀', '😿', '😾'
];

let clothesEmojis = ['🧥', '👚', '👕','👖', '👔', '👗', '👙', '👘', '👠', '👡', 
'👢', '👞', '👟', '🥾', '🥿', '🧦', '🧤', '🧣', '🎩','🧢', '👒', '🎓', '⛑', '👑', '👝', 
'👛', '👜', '💼', '🎒', '👓', '🕶', '🥽', '🥼', '🌂', '🧵', '🧶'
];

let foodEmojis = ['🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🍍','🥭','🥥',
    '🥝','🍅','🍆','🥑','🥦','🥒','🥬','🌶','🌽','🥕','🥔','🍠','🥐','🍞','🥖','🥨','🥯','🧀','🥚',
    '🍳','🥞','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🥪','🥙','🌮','🌯','🥗','🥘','🥫','🍝','🍜',
    '🍲','🍛','🍣','🍱','🥟','🍤','🍙','🍚','🍘','🍥','🥮','🥠','🍢','🍡','🍧','🍨','🍦','🥧','🍰',
    '🎂','🍮','🍭','🍬','🍫','🍿','🧂','🍩','🍪','🌰','🥜','🍯','🥛','🍼','☕️','🍵','🥤','🍶','🍺','🍻',
    '🥂','🍷','🥃','🍸','🍹','🍾','🥄','🍴','🍽','🥣','🥡','🥢'
];

let travelEmojis = [ '🚗','🚕','🚙','🚌','🚎','🏎','🚓','🚑','🚒','🚐','🚚','🚛','🚜','🛴','🚲','🛵',
'🏍','🚨','🚔','🚍','🚘','🚖','🚡','🚠','🚟','🚃','🚋','🚞','🚝','🚄','🚅','🚈','🚂','🚆','🚇','🚊',
'🚉','✈️','🛫','🛬','🛩','💺','🛰','🚀','🛸','🚁','🛶','⛵️','🚤','🛥','🛳','⛴','🚢','⚓️','⛽️','🚧','🚦',
'🚥','🚏','🗺','🗿','🗽','🗼','🏰','🏯','🏟','🎡','🎢','🎠','⛲️','⛱','🏖','🏝','🏜','🌋','⛰','🏔','🗻',
'🏕','⛺️','🏠','🏡','🏘','🏚','🏗','🏭','🏢','🏬','🏣','🏤','🏥','🏦','🏨','🏪','🏫','🏩','💒','🏛',
'⛪️','🕌','🕍','🕋','⛩','🛤','🛣','🗾','🎑','🏞','🌅','🌄','🌠','🎇','🎆','🌇','🌆','🏙','🌃','🌌','🌉','🌁'    
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
startTimer();




///////////////////////////////////////
//Emoji Class to create Emoji instances
///////////////////////////////////////
class Emoji {
    constructor() {
        this.emoji = getRandEmoji();
        this.x = window.innerWidth * (randomNum(65)) * 0.01 + 'px' ;
        this.y = window.innerHeight * (randomNum(65)) * 0.01 + 'px' ;
        this.fontSize = randomNum(5) + 2 + 'vmax';
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
    let confettiSettings = {
        target: 'my-canvas',
        max: 1000
    };
    let confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

//run when user has won the game
function win() {
    releaseConfetti(); //user has "won", release confetti
    let audio = document.getElementById('trumpet');
    audio.play(); //play trumpet win sound    
}

function startTimer() {
    let countdown = setInterval( function(){ 
        setCountDownBar();
        remainingTime = remainingTime - 5;
        //if timer runs out
        if(remainingTime <= 0) {  
            clearInterval(countdown);      
            timerRunOut();
        }
    }, 1000 ); 
}


function timerRunOut() {
    progressBar.style.width = '0%';
    //progressBar.style.setProperty('width', progressBarProgress + '%');  
    progressBarProgress = 0;
    numberOfEmojis = 10;    
    let audio = document.getElementById("lose");
    audio.play(); //play "wrong" sound    
    while (document.getElementsByClassName('emoji-class')[0]) {
        document.getElementsByClassName('emoji-class')[0].remove();
    }
    while (document.getElementsByClassName('stress')[0]) {
        document.getElementsByClassName('stress')[0].remove();
    }
    distanceFromLeft = 3;
    stressBarNumber = 0;
    setTimeout(function() {
        audio.pause();
        audio.currentTime = 0;  
        remainingTime = 100.1; 
        setCountDownBar();     
        backgroundColor = bgChange();
        resetPage();
        startTimer();
        addStressBar();
    }, 4000);

}




///////////////////
//Setting up events
///////////////////


//set up events for non-waldo emojis
function setNonWaldo(nonWaldo) {
    nonWaldo.style.cursor = 'pointer'

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
      
    elementToFind.style.cursor = 'pointer';
    //$('html').off('mousemove');    
    

    //define onclick event when "waldo" is found
    elementToFind.onclick = function(e) {
        setProgressBar(10);         
        addStressBar();        
        remainingTime += 10;
        if(remainingTime >= 100.01) {
            remainingTime = 100.01;
        }
        setCountDownBar();            
        //if(countdownTime > 5) {
        //    countdownTime -= 5;        
        //}
        //setCountDownBar();
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
    for (let i = 0; i < selectedEmojis.length; i++) {
        if (waldoEmoji.emoji == selectedEmojis[i]) {
            selectedEmojis.splice(i, 1);
        }
    }
    //generate emojis from remaining emojis 
    //not including the emoji to be
    for (let i = 0; i < numberOfEmojis; i++) {
        let emoji = new Emoji();
        emoji.generate();
    }
}


populatePage();


////////////////////////////////
//functions that set emoji types
////////////////////////////////

function setToAnimalEmojis() {
    selectedEmojis = animalEmojis;
    resetPage();
}
function setToFaceEmojis() {
    selectedEmojis = faceEmojis;
    resetPage();
}
function setToClothesEmojis() {
    selectedEmojis = clothesEmojis;
    resetPage();
}
function setToFoodEmojis() {
    selectedEmojis = foodEmojis;
    resetPage();
}
function setToTravelEmojis() {
    selectedEmojis = travelEmojis;
    resetPage();
}
function setToAllEmojis() {
    selectedEmojis = emojis;
    resetPage();
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
let prevStress;
let stressBarNumber = 1;
function setStressBar(stress, barId) { 
    let stressBar = document.getElementById(barId);      
    stressBar.style.setProperty('height', (stress) +"%");    
    prevStress += stress;        
}


let distanceFromLeft = 3
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
let i = 0;
let sum = 0;
// let stage = 0;
let x1, y1, x2, y2, stress;
let counter = 1;
$('html').mousemove(function (event) {    
    console.log("hello",event);
    console.log( (new Date).getTime());
    var x2 = event.clientX;
    var y2 = event.clientY;   

    if(prevStress == null) {
        prevStress = 0;
    }

    stress = 20*(Math.pow(Math.pow(x2-x1,2) + Math.pow(y2-y1,2),0.17))   ; 

    i = i+1;
    if (i < 10) {
        sum += stress;
    }
    if (i >= 10) {
        i = 0;
        //optional stage - to be able to average the stress over a stage
        output2stress = sum / 10;   
        
        // stress = Math.pow(1.05, stress);
        setStressBar(output2stress, ('stress' + stressBarNumber));  
        sum = 0    
    }
 


           
        
    x1 = x2;
    y1 = y2;  
    counter += 1;        
});


