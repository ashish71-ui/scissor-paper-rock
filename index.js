const computerchoicedisplay = document.getElementById('computer-choice')
const userchoicedisplay = document.getElementById('your-choice')
const resultdisplay = document.getElementById('result')
const possiblechoices = document.querySelectorAll('button')
let userchoice
let computerchoice
let result


possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click',(e) =>{

userchoice = e.target.id;
userchoicedisplay.innerHTML = userchoice ;
generatecomputerchoice()
getresult()

}))

function generatecomputerchoice(){
    const randomnumber = Math.floor(Math.random() *3) +1 ;
    console.log(randomnumber)
    if(randomnumber===1){
        computerchoice = 'rock'
    }
    if(randomnumber===2){
        computerchoice = 'scissor'
    }
    if(randomnumber===3){
        computerchoice = 'paper'
    }
    computerchoicedisplay.innerHTML = computerchoice ;

}
function getresult(){
    if(computerchoice=== userchoice){
        result = 'draw'

    }
    if(computerchoice==='rock' && userchoice==='paper'){
        result = "you win";
    }
    if(computerchoice==='rock' && userchoice==='scissor'){
        result = "you lost";
    }
    
    if(computerchoice==='paper' && userchoice==='scissor'){
        result = "you won";
    }
    if(computerchoice==='paper' && userchoice==='rock'){
        result = "you lost";
    }
    if(computerchoice==='scissor' && userchoice==='paper'){
        result = "you lost";
    }if(computerchoice==='scissor' && userchoice==='rock'){
        result = "you win";
    }
    resultdisplay.innerHTML = result;
}