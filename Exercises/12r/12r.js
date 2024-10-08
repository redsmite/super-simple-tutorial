let score =  JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScoreElement();

// if(!score){
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   }
// }

console.log(JSON.parse(localStorage.getItem('score')));

let isAutoPlaying = false;
let intervalId ;

// const autoPlay = () => {

// }

const autoPlayButton = 
document.querySelector('.auto-play-button');

autoPlayButton.addEventListener('click',()=>{
  autoPlay();
})

function autoPlay(){
  if(!isAutoPlaying){
    autoPlayButton.innerHTML = 'Stop Playing';
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    autoPlayButton.innerHTML = 'Auto Play';
    isAutoPlaying = false;
  }
}


document.querySelector('.js-rock-button').addEventListener('click', () =>{
  playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click', ()=>{
  playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', ()=>{
  playGame('scissors');
});

function playGame(playerMove){ 
  const computerMove = pickComputerMove();

  let result = '';


  document.body.addEventListener('keydown',(event) =>{
    if(event.key === 'r'){
      playGame('rock');
    } else if(event.key === 'p'){
      playGame('paper');
    } else if (event.key === 's'){
      playGame('scissors');
    } else if (event.key === 'a'){
      autoPlay();
    } else if (event.key === 'Backspace'){
      showWarningMessage();
    }
  });

  if(playerMove === 'scissors'){
    if (computerMove === 'rock'){
      result = 'You lose.'
    } else if (computerMove === 'paper'){
      result = 'You win.'
    } else if (computerMove ==='scissors'){
      result = 'Tie.';
    }


  } else if (playerMove === 'rock'){
    if (computerMove === 'rock'){
      result = 'Tie.'
    } else if (computerMove === 'paper'){
      result = 'You lose.'
    } else if (computerMove ==='scissors'){
      result = 'You win.';
    }


  } else if (playerMove ==='paper'){
    if (computerMove === 'rock'){
      result = 'You win.'
    } else if (computerMove === 'paper'){
      result = 'Tie.'
    } else if (computerMove ==='scissors'){
      result = 'You lose.';
    }
  }
  if(result === 'You win.'){
    score.wins ++;
  } else if(result === 'You lose.'){
    score.losses ++;
  } else if(result === 'Tie.'){
    score.ties ++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML=result;
  document.querySelector('.js-moves').innerHTML=`You 
<img class="move-icon" src="${playerMove}-emoji.png">
<img class="move-icon" src="${computerMove}-emoji.png">
Computer`;
}


function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses:${score.losses} Ties:${score.ties}`;
}

function pickComputerMove(){
  const randomNumber = Math.random();
  
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1 / 3){
    computerMove = 'rock';

  } else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  }else if (randomNumber < 1){
    computerMove = 'scissors';
  }

  return computerMove;
}


document.querySelector('.reset-score-button').addEventListener('click',()=>{
  showWarningMessage();
})

const modal = document.querySelector('.reset-warning-message');

function showWarningMessage(){
  modal.style.display = 'block';

  document.querySelector('.js-warning-yes').addEventListener('click',()=>{
    resetScore();
  })
  document.querySelector('.js-warning-no').addEventListener('click',()=>{
    modal.style.display = 'none';
  })
}

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
  modal.style.display = 'none';
}