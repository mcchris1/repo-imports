//For level 1, implement a single event listener to the .js-dot element. 
//When the user clicks on the dot, it should increment their score by 10 points. 
//When the user reaches 100 points, they've beat the level and can move on!


// vars:
let currentScore = 0; 
const godot = document.querySelector(".js-dot");
const scoreBoard = document.querySelector(".js-score");
let okGoOn = document.querySelector(".level-winner");

godot.addEventListener('click', tension);

function tension() {
    currentScore += 10;
    scoreBoard.innerText = currentScore
}

/*
function tension () {
    if (currentScore < 100) {
        currentScore += 10;
    } else (...)
}

ternary: {currentScore < 100) ? currentScore +=10 : elsewise result

*/

scoreBoard.innerText = "00" + currentScore;

//clumsy, should probably intialize currentScore as string "0000", parse, then attach "00" for each subsequent iteration...

if (currentScore >= 100) {
    document.body.classList.add("game-over");
  }

