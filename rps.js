const handOptions = {
    "rock": "/images/icon-rock.svg",
    "paper": "/images/icon-paper.svg",
    "scissors": "/images/icon-scissors.svg"
}

let SCORE = 0;


const chooseUserHand = (hand) => {
    let play = document.querySelector(".play");
    play.style.display = "none";

    let result = document.querySelector(".result");
    result.style.display="flex";

    document.getElementById("userpickimage").src = handOptions[hand]

    chooseComputerHand(hand);

};

const chooseComputerHand = (hand) => {
    let play = ["rock", "paper", "scissors"];
    let computerhand = play[Math.floor(Math.random() * play.length)];

    document.getElementById("housepickimage").src = handOptions[computerhand];
   
    status(hand, computerhand);
};

const status = (computerhand, UserHand) =>{
if(UserHand == "paper" && computerhand =="scissors"){
setDecision("YOU LOSE");
setScore(SCORE - 1);
} if(UserHand == "paper" && computerhand =="rock"){
    setDecision("YOU WIN");
    setScore(SCORE + 1);
} if(UserHand== "scissors" && computerhand =="rock"){
    setDecision("YOU LOSE");
    setScore(SCORE - 1);
    } if(UserHand == "scissors" && computerhand =="paper"){
        setDecision("YOU WIN");
        setScore(SCORE + 1);
    }
    if(UserHand== "rock" && computerhand =="paper"){
        setDecision("YOU LOSE");
        setScore(SCORE - 1);
        } if(UserHand == "rock" && computerhand =="scissors"){
            setDecision("YOU WIN");
            setScore(SCORE + 1);
        }
     if(UserHand == "rock" && computerhand =="rock"){
        setDecision("It's a tie");
    }
  if(UserHand == "paper" && computerhand =="paper"){
        setDecision("It's a tie");
    }
    if(UserHand == "scissors" && computerhand =="scissors"){
        setDecision("It's a tie");
    }
};

 const setDecision = (decision) =>{
     document.querySelector(".decision h1").innerText = decision;
 }

 const setScore = (newScore) => {
     SCORE= newScore;
    document.querySelector(".counter h1").innerText = newScore;
 }

const restartGame = () =>{
    let result = document.querySelector(".result");
    result.style.display = "none";

    let play = document.querySelector(".play");
    play.style.display="flex";
}

 const togglePopup = ()=> {
    let overlay = document.querySelector(".overlay") ;
    overlay.style.display = "flex";
 }

 const closePopup = ()=> {
    let overlay = document.querySelector(".overlay") ;
    overlay.style.display = "none";
 }