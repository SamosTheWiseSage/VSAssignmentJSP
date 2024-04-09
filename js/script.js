

//document.getElementById('formID2').style.display = "none";
const formE1 = document.querySelector('.formClass');
const DivE2 = document.querySelector('.DivClass');
const Img = document.querySelector('.ImageClass')
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
formE1.addEventListener('submit', startGame);
//console.log(formE1)
function startGame(event){  
    event.preventDefault();
const inputfield = formE1.querySelector('input').value
    //document.getElementById('nameForum').style.display = "none";
   // document.getElementById('formID').style.display = "none";
   // document.getElementById('formID2').style.display = "block";
   
    resultE1.innerText = `Welcome to the game Player:${inputfield}`
    formE1.classList.add('hiddenClass');
    DivE2.classList.remove('hiddenClass');
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
function pointCalculator(event) {
        event.preventDefault();
const randomNumber = Math.ceil(Math.random()*6); 
 RolledDiceNumber = randomNumber;
if(randomNumber != 1){
    totalpoints +=  RolledDiceNumber
}if (randomNumber == 1) {
  rounds++;  
  textForRound.innerText = 'current number of Rounds: '+ rounds;
 totalpoints = 0;
 button2.disabled = true;
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
    resultE1.innerText = 'you did it! you have won! it only took you ' + rounds +' rounds to do it'
    }}
button4.addEventListener('click',Retry)
function Retry(event) {
Img.classList.add('hiddenClass');
    event.preventDefault();
     RolledDiceNumber = 0;
    button2.disabled = false;
    showPoints.innerText = ' Rolled Dice Number:'+  RolledDiceNumber;
}
