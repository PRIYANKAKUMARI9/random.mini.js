const randomNumber=parseInt(Math.random() * 100 + 1);

const input=document.querySelector('#inputt');
const btn=document.querySelector('#btn');
const spanguess=document.querySelector('.spanguess');
const lastspan =document.querySelector('.lastspan');
const lowdrhi =document.querySelector('.lowdrhi');
const result = document.querySelector('.result')

const p = document.createElement('p');

let prevGuess =  []
let numGuess = 1

let playGam=true;

if(playGam){
    btn.addEventListener('click',function(e){
      e.preventDefault();
      const guess=parseInt(input.value);
      console.log(guess);
      valiGuess(guess)
    })

}

function valiGuess(guess){
    if(isNaN()){
        alert('please enter a valid number')
    }
    else if(guess < 1){
        alert('please enter the valid number')
    }
    else if(guess > 100){
        alert('please less than 100 number')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayguess(guess)
            displayMassage(`Game over .random number was ${randomNumber}`)
          endGam()
        }
        else{
        displayguess(guess)
        displayMassage(guess)
        }
    }
    }



function checkGuess(guess){

    if(guess === randomNumber){
        displayMassage(`your guess is right`)
        endGam()
    }
    else if(guess < randomNumber){
       displayMassage('Number is too low')
    }
    else if(guess > randomNumber){
        displayMassage('number is too high')
    }

}
function displayguess(guess){
    input.value=''
    spanguess.innerHTML += `${guess}`
    numGuess++;
    lastspan.innerHTML=`${11 - numGuess}`

}

function displayMassage(guess){
  lowdrhi.innerHTML = `<h2> ${guess} </h2>`
}

function newGam(guess){

}

function endGam(){
    
}