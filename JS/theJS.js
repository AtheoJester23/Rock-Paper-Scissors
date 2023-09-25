let robotmove = "";
let AnotherRobotPlayer = "";

    let scores = JSON.parse(localStorage.getItem('scores'));

    if(scores === null){
        scores = {                
            Wins: 0,
            Loses: 0,
            Ties: 0,
        };
    };
                

                

function cmove(){
    const computer = Math.random();

    if (computer >= 0 && computer < 1/3){
        robotmove = "rock";
    }else if (computer >= 1/3 && computer < 2/3){
        robotmove = "paper";
    }else if (computer >= 2/3 && computer < 1){
        robotmove = "scissors";
    }
}

function Robot2(){
    const anotherRobot = Math.random();

    if (anotherRobot >= 0 && anotherRobot < 1/3){
        AnotherRobotPlayer = "rock";
    }else if (anotherRobot >= 1/3 && anotherRobot < 2/3){
        AnotherRobotPlayer = "paper";
    }else if (anotherRobot >= 2/3 && anotherRobot < 1){
        AnotherRobotPlayer = "scissors";
    } 
}

document.querySelector('.ChoseRock').addEventListener('click', () => RPC("rock"));
document.querySelector('.ChosePaper').addEventListener('click', () => RPC("paper"));
document.querySelector('.ChoseScissors').addEventListener('click', () => RPC("scissors"));

function RPC(yourMove){
    cmove();
    Robot2();

    let rsult = "";

    if(yourMove === "rock"){
        if (robotmove === "scissors"){
            rsult = "You Win!";       
        }else if(robotmove === "paper"){
            rsult = "You Lose!";
        }else if(robotmove === "rock"){
            rsult = "Tie!";
        }
    }else if(yourMove === "paper"){
        if(robotmove === "scissors"){
            rsult = "You Lose!"
        }else if(robotmove === "paper"){
            rsult = "Tie!"
        }else if(robotmove === "rock"){
            rsult = "You Win!";
        }
    }else if(yourMove === "scissors"){
        if (robotmove === "scissors"){
            rsult = "Tie!";
        }else if(robotmove === "paper"){
            rsult = "You Win!";
        }else if(robotmove === "rock"){
            rsult = "You Lose!"
        }
    }

    if (rsult === "Tie!"){
        scores.Ties += 1;
    }else if(rsult === "You Win!"){
        scores.Wins += 1;
    }else if(rsult === "You Lose!"){
        scores.Loses += 1;
    }

    localStorage.setItem('scores', JSON.stringify(scores));

    console.log(rsult)
    console.log(scores);
    document.querySelector('.theResult').innerHTML = `${rsult}`;
    document.querySelector('.chose').innerHTML = `You <img src="Icons/${yourMove}-emoji.png" class = "iconsRPC"> <img src="Icons/${robotmove}-emoji.png" class = "iconsRPC" > Computer`;
    document.querySelector('.overall').innerHTML = `Wins: ${scores.Wins}, Loses: ${scores.Loses}, Ties: ${scores.Ties}`;
}

let autoPlaying = false;
let TheIntervalID;

function TheAutoPlay(){
    if(!autoPlaying){
        TheIntervalID = setInterval(() => {
            RPC(AnotherRobotPlayer);
        }, 1000);
        autoPlaying = true;
    }
    else{
        clearInterval(TheIntervalID);
        autoPlaying = false;
    }

}

document.querySelector('.autoPlay').addEventListener('click', () => TheAutoPlay());