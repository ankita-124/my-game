let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorepara=document.querySelector("#userid");
const compScorepara=document.querySelector("#compid");

const genCompchoice=()=>{
   const options=["rock","paper","scissors"];
   const index=Math.floor(Math.random()*3);
   return options[index];
}

const clickSound = document.getElementById('click');
const winSound = document.getElementById('win');
const looseSound = document.getElementById('loose');

const playSound = (sound) => { 
   sound.play();
}

drawGame=()=>{
   msg.innerText="Game was Draw!Play again";
   msg.style.backgroundColor="black";
};

const showWin=(userwin,userChoice,compChoice)=>{
   if(userwin){
      userScore++;
      userScorepara.innerText=userScore;
      console.log("You Win")
      msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor="green"
      playSound(winSound);
   }else{
      compScore++;
      compScorepara.innerText=compScore;
      msg.innerText=`You lost. ${compChoice} bets your ${userChoice}`;
      msg.style.backgroundColor="red"
      playSound(looseSound);
   }
}

const playGame=(userChoice)=>{
  const compChoice=genCompchoice();
  
  playSound(clickSound);

  if(userChoice==compChoice){
   drawGame();
  }else{
     let userwin=true;
     if(userChoice==="rock"){
      userwin=compChoice==="paper"? false:true;
   }else if(userChoice==="paper"){
      userwin=compChoice==="scissors"?false:true;
   }else{
      userwin=compChoice==="rock"?false:true;
   }
   showWin(userwin,userChoice,compChoice);
  }
};

choices.forEach((choice) =>{
   choice.addEventListener("click",()=>{
     const userChoice=choice.getAttribute("id");
     playGame(userChoice);
   })
});





