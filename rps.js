//getting all the dom elements
let playerScore=document.querySelector('.pscore');
let computerScore=document.querySelector('.cscore')
let playerArea= document.querySelector('.center');
let computerArea= document.querySelector('.center1');
let roc= document.getElementById('a');
let pap= document.getElementById('b');
let sic= document.getElementById('c');
let message=document.querySelector('.scoreMessage');


//creating random function for cs
function random(){
    let rndm=Math.floor(Math.random()*3);
    switch (rndm) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissor'
    }
}

//logics
let player=0;
let computer=0;
roundwunner='';
function gameLogics(playerSelection,computerSelection){
  if(playerSelection === computerSelection){
    roundwinner='tie';
    player;
    computer;
  }
    if(
        (playerSelection==='rock' && computerSelection==='scissor')
        ||(playerSelection==='paper' && computerSelection==='rock')
     ||(playerSelection==='scissor' && computerSelection==='paper')){
      player++;
       roundwinner='player';
    }
    else if(
      (playerSelection==='scissor' && computerSelection==='rock')
      ||(playerSelection==='rock' && computerSelection==='paper')
   ||(playerSelection==='paper' && computerSelection==='scissor')){
        computer++;
        roundwinner='computer';
      }
      updateMessage(roundwinner,playerSelection,computerSelection);
}

//creating the update function
function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'rock':
        playerArea.textContent = '✊'
        break
      case 'paper':
        playerArea.textContent = '✋'
        break
      case 'scissor':
        playerArea.textContent = '✌'
        break
    }
  
    switch (computerSelection) {
      case 'rock':
        computerArea.textContent = '✊'
        break
      case 'paper':
        computerArea.textContent = '✋'
        break
      case 'scissor':
        computerArea.textContent = '✌'
        break
    }
}
function updatescore() {
  playerScore.innerHTML = `Player: ${player}`;
  computerScore.innerHTML = `Computer: ${computer}`;
}
function updateMessage(roundwinner,playerSelection,computerSelection){
  if(roundwinner==='tie'){
    message.innerHTML= 'it is a tie';
  }
  if(roundwinner==='player'){
    message.innerHTML= playerSelection + ' won';
  }
  if(roundwinner==='computer'){
    message.innerHTML=computerSelection + ' won'
  }
}

//regulating the function
function oyo(playerSelection){
  const computerSelection= random();
    gameLogics(playerSelection,computerSelection);
    updateChoices(playerSelection,computerSelection);
    updatescore();
}
//adding eventlistener
roc.addEventListener('click', () => oyo('rock'));
pap.addEventListener('click', () => oyo('paper'));
sic.addEventListener('click', () => oyo('scissor'));
