let input = document.querySelector('#input');
let letters = document.querySelectorAll('.letter');

input.addEventListener('keydown', onKeyPress)
input.addEventListener('keyup', onKeyPress)

function onKeyPress(e){
    letters.forEach((letter) => {
        if(letter.dataset.letter === e.key) {
            letter.classList.toggle('active');
        }
    });
input.value = "";
}
