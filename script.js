"use strict"

function getComputerChoice()
{
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let theChoice = choices[Math.floor(Math.random() * choices.length)];
    return theChoice;
}

function getWinner(playerScore, computerScore)
{
    return playerScore == 5 ? "You win!" :
    computerScore == 5 ? "Computer wins!": " "
}


function getPlayerChoice()
{
    let playerChoice;

    let playerScoreCounter = 0;
    let computerScoreCounter = 0;

    let result;


    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const winnerMessage = document.querySelector('#winner-message');
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');
    const finalResult = document.querySelector('#final-result');

    

    winnerMessage.style.color = 'blue';

    rock.addEventListener('click', () => {
        playerChoice = "ROCK";
        result = playRound(playerChoice, getComputerChoice());
        
        console.log(result);

        playerScoreCounter += result[1];
        computerScoreCounter += result[2];

        console.log(playerScoreCounter, computerScoreCounter);

        winnerMessage.textContent = result[0];
        playerScore.textContent = playerScoreCounter;
        computerScore.textContent = computerScoreCounter;
        finalResult.textContent = getWinner(playerScoreCounter, computerScoreCounter);
    })

    paper.addEventListener('click', () => {
        playerChoice = "PAPER";
        result = playRound(playerChoice, getComputerChoice());

        console.log(result);

        playerScoreCounter += result[1];
        computerScoreCounter += result[2];

        console.log(playerScoreCounter, computerScoreCounter);

        winnerMessage.textContent = result[0];
        playerScore.textContent = playerScoreCounter;
        computerScore.textContent = computerScoreCounter;
        finalResult.textContent = getWinner(playerScoreCounter, computerScoreCounter);
    })

    scissors.addEventListener('click', () => {
        playerChoice = "SCISSORS";
        result = playRound(playerChoice, getComputerChoice());

        console.log(result);

        playerScoreCounter += result[1];
        computerScoreCounter += result[2];

        console.log(playerScoreCounter, computerScoreCounter);

        winnerMessage.textContent = result[0];
        playerScore.textContent = playerScoreCounter;
        computerScore.textContent = computerScoreCounter;
        finalResult.textContent = getWinner(playerScoreCounter, computerScoreCounter);
    })


}

function playRound(playerSelection, computerSelection)
{
    let playerScore;
    let computerScore;
    let string;

    let player = playerSelection;
    console.log(player)

    let computer = computerSelection;
    console.log(computer)

    let resultArray = [string, playerScore, computerScore]

    if (player === computer){
        string = "Tied Game!";
        resultArray[0] = string;
        resultArray[1] = 0;
        resultArray[2] = 0;
        return resultArray;
    } else if (player === "ROCK" && computer === "SCISSORS") {
        string = "Rock beats Scissors";
        resultArray[0] = string;
        resultArray[1] = 1;
        resultArray[2] = 0;
        return resultArray;
    } else if (player === "ROCK" && computer === "PAPER"){
        string = "Paper beats Rock";
        resultArray[0] = string;
        resultArray[1] = 0;
        resultArray[2] = 1;
        return resultArray;
    } else if (player === "SCISSORS" && computer === "ROCK"){
        string = "Rock beats Scissors";
        resultArray[0] = string;
        resultArray[1] = 0;
        resultArray[2] = 1;
        return resultArray;
    } else if (player === "SCISSORS" && computer === "PAPER"){
        string = "Scissors beats Paper";
        resultArray[0] = string;
        resultArray[1] = 1;
        resultArray[2] = 0;
        return resultArray;
    } else if (player === "PAPER" && computer === "SCISSORS"){
        string = "Scissors beats Paper";
        resultArray[0] = string;
        resultArray[1] = 0;
        resultArray[2] = 1;
        return resultArray;
    } else if (player === "PAPER" && computer === "ROCK"){
        string = "Paper beats Rock";
        resultArray[0] = string;
        resultArray[1] = 1;
        resultArray[2] = 0;
        return resultArray;
    }
}

function game()
{
    getPlayerChoice();
}

game();