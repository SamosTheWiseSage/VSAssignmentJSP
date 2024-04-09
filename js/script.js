

//document.getElementById('formID2').style.display = "none";
const formE1 = document.querySelector('.formClass');
const fromImg = document.querySelector('.formImage');
const DivE2 = document.querySelector('.DivClass');
const Img = document.querySelector('.ImageClass');
const BodyClass = document.querySelector('.BodyClass')
const textForRound = document.querySelector('#rounds');
const showTotal = document.querySelector('#DiceResult');
const showPoints = document.querySelector('#DiceNumber');
const showTreasure = document.querySelector('#treasure');
const resultE1 = document.querySelector('#resultMessage');
const button2 = document.querySelector('#ThrowDice');
const button3 = document.querySelector('#freezeDice');
const button4 = document.querySelector('#Retry');
DivE2.classList.add('hiddenClass'); 
Img.classList.add('hiddenClass');
// START OF ADDEVENTLISTENER
formE1.addEventListener('submit', startGame);
//START OF  START GAME FUNCTION 
function startGame(event){  
    event.preventDefault();
const inputfield = formE1.querySelector('input').value
    //document.getElementById('nameForum').style.display = "none";
   // document.getElementById('formID').style.display = "none";
   // document.getElementById('formID2').style.display = "block";
   
    resultE1.innerText = `Welcome to the game Player:${inputfield}`
    formE1.classList.add('hiddenClass');
    fromImg.classList.add('hiddenClass')
    DivE2.classList.remove('hiddenClass');
    BodyClass.classList.remove('BodyClass');
    button4.disabled = true;
    showTotal.innerText = 'Total Points this round:'+ totalpoints;
showPoints.innerText = ' Rolled Dice Number:'+  RolledDiceNumber;
showTreasure.innerText = 'Treasure:'+ treasure;
textForRound.innerText = 'current number of Rounds: '+ rounds;
    }
    button2.addEventListener('click', pointCalculator)
    let  RolledDiceNumber = 0;
    let totalpoints = 0;
    let rounds = 0;
    let treasure = 0;
    if (RolledDiceNumber == 0) {
        button3.disabled = true;
    }
function pointCalculator(event) {
        event.preventDefault();
const randomNumber = Math.ceil(Math.random()*6); 
 RolledDiceNumber = randomNumber;
if(randomNumber != 1){
    totalpoints +=  RolledDiceNumber
    button3.disabled = false;
}if (randomNumber == 1) {
  rounds++;  
  textForRound.innerText = 'current number of Rounds: '+ rounds;
 totalpoints = 0;
 button2.disabled = true;
 button3.disabled = true;
 button4.disabled = false;
 Img.classList.remove('hiddenClass')
 //button2.classList.add('hiddenClass')
    console.log(totalpoints)
}
showTotal.innerText = 'Total Points this round:'+ totalpoints;
showPoints.innerText = ' Rolled Dice Number:'+  RolledDiceNumber;
showTreasure.innerText = 'Treasure:'+ treasure;
textForRound.innerText = 'current number of Rounds: '+ rounds;
//console.log(randomNumber);
console.log( RolledDiceNumber);
}
button3.addEventListener('click',Freeze)
function Freeze(event) {
Img.classList.add('hiddenClass');
    event.preventDefault();
    rounds++;
    treasure += totalpoints;
    totalpoints = 0;
     RolledDiceNumber = 0;
    showTreasure.innerText = 'Treasure:' + treasure;
    textForRound.innerText = 'current number of Rounds: '+ rounds;
    showTotal.innerText = 'Total Points this round:'+ totalpoints;
showPoints.innerText = ' Rolled Dice Number:'+  RolledDiceNumber;
  if (treasure >= 100 ) {
    resultE1.innerText = 'you did it! you have won! it only took you ' + rounds +' rounds to do it. Press Restart Game to Play again.';
    resultE1.classList.add('VictoryClass');
    button2.disabled = true;
    button3.disabled = true; 
    button4.disabled = false; 
    button4.innerText = "Restart Game"
    }}
button4.addEventListener('click',Retry)
function Retry(event) {
    event.preventDefault();
    Img.classList.add('hiddenClass');
     RolledDiceNumber = 0;
    button2.disabled = false;
    showPoints.innerText = ' Rolled Dice Number:'+  RolledDiceNumber;
    if (treasure >= 100 ) {
        history.go();
        }
}
