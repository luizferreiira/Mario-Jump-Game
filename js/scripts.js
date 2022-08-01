const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.game-over');
const gameBoard = document.querySelector('.game-board');
const score = document.querySelector('.score');

let pontuacao = 0;




const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    },500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = '1550px';

        gameOver.innerHTML = "GAME OVER";
        
        gameBoard.classList.remove('game-board');
        gameBoard.classList.add('game-board-dark');

        clearInterval(loop);

    }else if(pipePosition < 0 && marioPosition > 80 ){

        pontuacao += 10;
        score.innerHTML = pontuacao;

    }
    
}, 10)

document.addEventListener('keydown', jump);