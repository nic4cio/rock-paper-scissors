"use strict"

function getComputerChoice()
{
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let theChoice = choices[Math.floor(Math.random() * choices.length)];
    return theChoice;
}


function getPlayerChoice()
{
    let playerChoice;
    let result;
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const winnerMessage = document.querySelector('#winner-message');

    winnerMessage.style.color = 'blue'

    rock.addEventListener('click', () => {
        playerChoice = "ROCK";
        result = playRound(playerChoice, getComputerChoice())
        console.log(result);
        winnerMessage.textContent = result[0];
    })

    paper.addEventListener('click', () => {
        playerChoice = "PAPER";
        result = playRound(playerChoice, getComputerChoice())
        console.log(result);
        winnerMessage.textContent = result[0];
    })

    scissors.addEventListener('click', () => {
        playerChoice = "SCISSORS";
        result = playRound(playerChoice, getComputerChoice())
        console.log(result);
        winnerMessage.textContent = result[0];
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
        return resultArray;
    } else if (player === "ROCK" && computer === "SCISSORS") {
        string = "Rock beats Scissors";
        resultArray[0] = string;
        return resultArray;
    } else if (player === "ROCK" && computer === "PAPER"){
        string = "Paper beats Rock";
        resultArray[0] = string;
        return resultArray;
    } else if (player === "SCISSORS" && computer === "ROCK"){
        string = "Rock beats Scissors";
        resultArray[0] = string;
        return resultArray;
    } else if (player === "SCISSORS" && computer === "PAPER"){
        string = "Scissors beats Paper";
        resultArray[0] = string;
        return resultArray;
    } else if (player === "PAPER" && computer === "SCISSORS"){
        string = "Scissors beats Paper";
        resultArray[0] = string;
        return resultArray;
    } else if (player === "PAPER" && computer === "ROCK"){
        string = "Paper beats Rock";
        resultArray[0] = string;
        return resultArray;
    }
}

function game()
{
    getPlayerChoice();
}

game();