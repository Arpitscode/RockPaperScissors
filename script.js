let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#comp-score');

let getCompChoice=()=>{
    const options=['rock','paper','scissors'];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
    // console.log(compChoice);
};

let drawGame=()=>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.color = "grey";
};

const showWinner=(userChoice,compChoice,userwin)=>{
 if(userwin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
    msg.style.color = "green";
 }
 else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You lost! ${compChoice} beats ${userChoice}`;
    msg.style.color = "red";
 }
};

const playGame=(userChoice)=>{
const compChoice= getCompChoice();
 if(userChoice===compChoice){
    drawGame();
 }else{
    let userwin=true;
    if(userChoice==="rock"){
        userwin=compChoice==='paper'?false:true;
        // msg.innerText=`${compChoice} beats ${userChoice}`; 
    }
    else if(userChoice==="paper"){
        userwin=compChoice==='scissors'?false:true;
    }
    else{
        userwin=compChoice==="rock"?false:true;
    }
    showWinner(userChoice,compChoice,userwin);
 }
}



choices.forEach(choice=> {
   choice.addEventListener('click',()=>{
    const userChoice=choice.getAttribute('id');
    playGame(userChoice);
   })
});
var btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    console.log('clicked btn');
    location.reload();
})
