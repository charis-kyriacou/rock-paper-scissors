// new function called getComputerChoice
//use math.random() which returns 0 to 1 then multiply * 300 then divide by 3
//if the number from math.random() is now 0-100 then it returns rock
//if its 101-200 then it returns paper
//if not (201-300) then it returns scissors

function getComputerChoice(){
    let computerChoice;
    const randomNumber = ( Math.random() * 300 );
    if( randomNumber <=100 ){
        computerChoice = 1; // rock

    } else if( randomNumber <= 200){
        computerChoice = 2; // paper
    } else {
        computerChoice = 3; //scissor
    }

    return computerChoice;
}
// new function called getHumanChoice
// use prompt() to get input and store it
// then equal it to one of the three choices

function getHumanChoice(){
    let humanChoice;
    let humanChoiceString = prompt("Select your play ( rock, paper or scissors) ");
    humanChoiceString = humanChoiceString.toLowerCase();
    console.log(humanChoiceString);
    if ( humanChoiceString == "rock" ){
        humanChoice = 1;
    } else if(humanChoiceString == "paper"){
        humanChoice = 2;
    } else{
        humanChoice = 3;
    }


    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;


// new function called playRound with the parameters humanChoice and computerChoice
// make humanChoice case insensitive
// make the output output something like " You win! " or " You Lose! "

function playRound(humanChoice, computerChoice){

    if ( humanChoice == computerChoice){ // checks if both picked the same move
        console.log(" It's a draw! ");
    } else if ( (humanChoice == 1) && (computerChoice == 3)) { // checks if human played rock and computer played scissors
        console.log(" You win! ");
        humanScore++;
    } else if ( (humanChoice == 2) && (computerChoice == 1) ){ // checks if human played paper and computer played rock
        console.log(" You win! ");
        humanScore++;
    } else if( (humanChoice == 3) && (computerChoice == 2) ){ // checks if human played scissors and computer played paper
        console.log( " You win! ");
        humanScore++;
    } else{ // if none of the winning conditions are met then the human loses
        console.log( " You lose! ");
        computerScore++;
    }

}

// new function called playGame
// call playRound 5 times
// get the result of the 5 rounds
// check who is the winner

function playGame(){
    for(let i=0; i<5; i++){
        playRound( getHumanChoice(), getComputerChoice() );
    }
    if(humanScore > computerScore){
        console.log( " You win! Good job! ");
    } else{
        console.log( " The computer wins! ");
    }
}

playGame();