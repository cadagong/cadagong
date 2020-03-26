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
let progressBarStart = -5; //gets incremented with each time "waldo" is found
let progressBarEnd = 0; //gets incremented with each time "waldo" is found   

let numberOfEmojis = 10; //number of emojis displayed on screen at start. increases after every finding of waldo

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

let waldoEmojiElement = document.getElementById('waldo-emoji');
let allElements = document.querySelector('#emoji-class');
let box = document.getElementById("box");
let scoreFiller = document.getElementById("score-filler");

document.body.style.transition = '1s';
document.body.style.backgroundColor = bgChange();
box.style.backgroundColor = 'lightyellow';


///////////////////////////////////////
//Emoji Class to create Emoji instances
///////////////////////////////////////
class Emoji {
    constructor() {
        this.emoji = getRandEmoji();
        this.x = randomNum(1050) + 'px';
        this.y = randomNum(300) + 'px';
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
        box.appendChild(emojiElem);
        return emojiElem;
    }
}


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


//updates progress bar
function setProgressBar() {
    resetAnimation();
    progressBarStart += 5;
    progressBarEnd += 5;
    progressBar.style.setProperty('--height0', progressBarStart + '%')
    progressBar.style.setProperty('--height100', progressBarEnd + '%')

}


//resets progress bar animation
function resetAnimation() {
    progressBar.style.animation = 'none';
    progressBar.offsetHeight; // trigger reflow 
    progressBar.style.animation = null;
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


//resets page after emoji is found
function resetPage() {
    box.style.backgroundColor = 'lightyellow';
    document.body.style.backgroundColor = bgChange();    
    while (document.getElementsByClassName('emoji-class')[0]) {
        document.getElementsByClassName('emoji-class')[0].remove();
    }
    populatePage(); //repopulate the page with new emojis
}


//run when user has won the game
function win() {
    releaseConfetti(); //user has "won", release confetti
    let audio = document.getElementById('trumpet');
    audio.play(); //play trumpet win sound    
}


//create waldo elements and set event tiggers
function setEmojiToFind(waldoEmoji) {
    waldoEmojiElement.textContent = waldoEmoji.emoji;
    //emoji to click on    
    let emojiToFind = new Emoji();
    emojiToFind.emoji = waldoEmoji.emoji;
    emojiToFind.zIndex = '1';
    elementToFind = emojiToFind.generate();

    //define onmouseover event for "waldo" element
    elementToFind.onmouseover = function(e) {
        elementToFind.style.cursor = 'pointer';
    }

    //define onclick event when "waldo" is found
    elementToFind.onclick = function(e) {
        setProgressBar();
        if (progressBarEnd >= 100) { win(); return; }       
        //add found "waldo" emoji back into emojis array
        selectedEmojis.push(waldoEmoji.emoji);
        numberOfEmojis += 10; //increase difficulty
        box.style.backgroundColor = 'palegreen';
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


//populate page with random emojis
function populatePage() {
    //emoji under magnifying glass
    let waldoEmoji = new Emoji();
    setEmojiToFind(waldoEmoji);

    //remove emoji to be found from emojis array
    for (i = 0; i < selectedEmojis.length; i++) {
        if (waldoEmoji.emoji == selectedEmojis[i]) {
            selectedEmojis.splice(i, 1);
        }
    }
    //generate emojis from remaining emojis 
    //not including the emoji to be
    for (i = 0; i < numberOfEmojis; i++) {
        let emoji = new Emoji();
        emoji.generate();
    }
}


populatePage();




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


// Set the width of the side navigation to 26%
function openNav() {    
    document.getElementById('menu-btn').style.height = '400%';                                        
    document.getElementById('menu-btn').style.borderRadius = '0px 0px 6px 6px'; 
    document.getElementById("arrow").textContent = '⮭';
    document.getElementById("arrow").style.top = '78%';    
    document.getElementById("menu-btn").onclick = closeNav;  
  }
  
  //Set the width of the side navigation to 5%
  function closeNav() {        
    document.getElementById("arrow").textContent = '⮯';
    document.getElementById("arrow").style.top = '20%';    
    document.getElementById('menu-btn').style.height = '100%';  
    document.getElementById('menu-btn').style.borderRadius = '0px 0px 6px 0px';    
    document.getElementById("menu-btn").onclick = openNav;                            
  }
