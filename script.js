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

    rock.addEventListener('click', () => {
        playerChoice = "ROCK";
        result = playRound(playerChoice, getComputerChoice())
        console.log(result);
    })

    paper.addEventListener('click', () => {
        playerChoice = "PAPER";
        result = playRound(playerChoice, getComputerChoice())
        console.log(result);
    })

    scissors.addEventListener('click', () => {
        playerChoice = "SCISSORS";
        result = playRound(playerChoice, getComputerChoice())
        console.log(result);
    })

}

function playRound(playerSelection, computerSelection)
{
    let player = playerSelection;
    console.log(player)
    let computer = computerSelection;
    console.log(computer)
    let string;

    if (player === computer){
        string = "Tied Game!";
        return string;
    } else if (player === "ROCK" && computer === "SCISSORS") {
        string = "You Won! Rock beats Scissors";
        return string;
    } else if (player === "ROCK" && computer === "PAPER"){
        string = "You Lose! Paper beats Rock";
        return string;
    } else if (player === "SCISSORS" && computer === "ROCK"){
        string = "You Lose! Rock beats Scissors";
        return string;
    } else if (player === "SCISSORS" && computer === "PAPER"){
        string = "You Won! Scissors beats Paper";
        return string;
    } else if (player === "PAPER" && computer === "SCISSORS"){
        string = "You lost! Scissors beats Paper";
        return string;
    } else if (player === "PAPER" && computer === "ROCK"){
        string = "You Won! Paper beats Rock";
        return string;
    }
}

function game()
{
    getPlayerChoice();
}

game();

