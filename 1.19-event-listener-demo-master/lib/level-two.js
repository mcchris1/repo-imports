//Same deal but write single event listener for three dots.

let currentScore = 0; 
let godots = document.querySelectorAll(".js-dot"); //All
let scoreBoard = document.querySelector(".js-score");
let okGoOn = document.querySelector(".level-winner");

godots.forEach(addEventListener('click', tension));
function tension() {
    currentScore += 10;
    scoreBoard.innerText = currentScore;
    if (currentScore >= 100) {
        okGoOn.querySelector
    }
}