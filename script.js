//FUNCTION RETURN RANDOM NUMBER  1 < > 6____________________________________________________RANDOM NUMBER

function randNbr(){
  let nbrDec = (Math.random() * 6) + 1;                
  let nbr_int = Math.trunc(nbrDec);
  return nbr_int;
  }


//_____________________________________________________________________________________VARIABLES

const displayHoldRound0 = document.getElementById('hold_round_0');
displayHoldRound0.style.display = 'none';

const displayWinner = document.getElementById('winner');
displayWinner.style.display = 'none';



const buttonNewGame = document.getElementById('btn_new_game');


const displayModes = document.getElementById('modes')
displayModes.style.display = 'none';
const button1Player = document.getElementById('btn_one_player')
const imageLed1 = document.getElementById('led_1')
const button2Players = document.getElementById('btn_two_players')
const imageLed2 = document.getElementById('led_2')

const buttonRoll = document.getElementById('btn_roll_dice');
const buttonHold = document.getElementById('btn_hold');

const containGlobal1 = document.getElementById('global_1');
const containRound1 = document.getElementById('round_1');

const containGlobal2 = document.getElementById('global_2');
const containRound2 = document.getElementById('round_2');

const numWin = document.getElementById('num_win');





let round1 = 0;
let roundList1 = [0];
let global1 = 0;
let globalList1 = [0];

let round2 = 0;
let roundList2 = [0];
let global2 = 0;
let globalList2 = [0];

let modePlay = "";
let player2 = false;

//________________________________________________________________________FUNCTION NEW GAME

buttonNewGame.addEventListener('click', (clickNewGame) => {
  displayWinner.style.display = 'none';
  displayModes.style.display = 'flex';
  containRound1.textContent = "00";
  containGlobal1.textContent = "00";
  containRound2.textContent = "00";
  containGlobal2.textContent = "00"; 
  roundList1 = [0]; 
  globalList1 = [0];
  roundList2 = [0];
  globalList2 = [0];
})

//_____________________________________________________________________FUNCTION 1 PLAYER

button1Player.addEventListener('click', () => {
  displayModes.style.display = 'none';
  imageLed1.src = 'images/led.png';
  imageLed2.src = 'images/led_transp.png';
  buttonRoll.addEventListener('click', clickRoll);
  modePlay = 1;
})

//____________________________________________________________________FUNCTION 2 PLAYERS

button2Players.addEventListener('click', () => {
  displayModes.style.display = 'none';
  imageLed1.src = 'images/led.png';
  imageLed2.src = 'images/led_transp.png';
  buttonRoll.addEventListener('click', clickRoll);
  modePlay = 2;
})


//__________________________________________________________FUNCTION MAIN 

//_________________________________________________________FUNCTION ROLL DICE

function clickRoll(){
  let dice = randNbr();
  console.log("clic.");
  console.log(dice);  
  const imageDice = document.getElementById('img_dices');
  img_dices.src = 'images/dice_' + dice + '.png';

  if (modePlay == 1){
    round1 = dice + roundList1[0];
    containRound1.textContent = round1;
    roundList1.push(round1);
    console.log(roundList1);
    roundList1.splice(0, 1);
    console.log(roundList1);
    if (dice == 1){
      roundList1 = [0];
      containRound1.textContent = 0;
    }
  }
  else{
    if(player2 == false){
      round1 = dice + roundList1[0];
      containRound1.textContent = round1;
      roundList1.push(round1);
      console.log(roundList1);
      roundList1.splice(0, 1);
      console.log(roundList1);
      if (dice == 1){
        roundList1 = [0];
        containRound1.textContent = 0;
        player2 = true;
        imageLed1.src = 'images/led_transp.png';
        imageLed2.src = 'images/led.png';
      }
    }
    else{
      round2 = dice + roundList2[0];
      containRound2.textContent = round2;
      roundList2.push(round2);
      console.log(roundList2);
      roundList2.splice(0, 1);
      console.log(roundList2);
      if (dice == 1){
        roundList2 = [0];
        containRound2.textContent = 0;
        player2 = false;
        imageLed1.src = 'images/led.png';
        imageLed2.src = 'images/led_transp.png';
      }
    }
  }
} 

//FUNCTION HOLD AND SCORE.____________________________________________________________________

buttonHold.addEventListener('click', (clickHold) => {
  
  if(modePlay == 1){
    if (roundList1[0] == 0){
      displayHoldRound0.style.display = 'flex';
        setTimeout(() => {
          displayHoldRound0.style.display = 'none';
        }, "2000")
    }
    else{
      global1 = roundList1[0] + globalList1[0];
      containGlobal1.textContent = global1;
      globalList1.push(global1);
      console.log(globalList1);
      globalList1.splice(0, 1);
      console.log(globalList1);
      containRound1.textContent = 0;
      roundList1 = [0];
      if (global1 >= 100){
        console.log("player 1 gagne");
        displayWinner.style.display = 'flex';
        numWin.textContent = "1";
        document.getElementById("button_roll").disabled = true;
      }
    }
  }
  else{
    if(player2 == false){
      if (roundList1[0] == 0){
        displayHoldRound0.style.display = 'flex';
        setTimeout(() => {
          displayHoldRound0.style.display = 'none';
        }, "2000")
      }  
      else{
        global1 = roundList1[0] + globalList1[0];
        containGlobal1.textContent = global1;
        globalList1.push(global1);
        console.log(globalList1);
        globalList1.splice(0, 1);
        console.log(globalList1);
        containRound1.textContent = 0;
        roundList1 = [0];
        if (global1 >= 100){
        console.log("player 1 gagne");
        displayWinner.style.display = 'flex';
        numWin.textContent = "1";
        document.getElementById("button_roll").disabled = true;
        }
        player2 = true;
        imageLed1.src = 'images/led_transp.png';
        imageLed2.src = 'images/led.png';
      }
    }
    else{
      if (roundList2[0] == 0){
        displayHoldRound0.style.display = 'flex';
        setTimeout(() => {
          displayHoldRound0.style.display = 'none';
        }, "2000")
      }
      else{
        global2 = roundList2[0] + globalList2[0];
        containGlobal2.textContent = global2;
        globalList2.push(global2);
        console.log(globalList2);
        globalList2.splice(0, 1);
        console.log(globalList2);
        containRound2.textContent = 0;
        roundList2 = [0];
        if (global2 >= 100){
        console.log("player 2 gagne");
        displayWinner.style.display = 'flex';
        numWin.textContent = "2";
        document.getElementById("button_roll").disabled = true;
        } 
        player2 = false;
        imageLed1.src = 'images/led.png';
        imageLed2.src = 'images/led_transp.png';
      }  
    }
  }  
})  



