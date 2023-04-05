"use strict"

function getComputerChoice()
{
    // function to get computer's random choice
    // array with possible choices
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    // the choice will be randomly chosen 
    let theChoice = choices[Math.floor(Math.random() * choices.length)];
    // then the function returns the randomly chosen choice by the computer
    return theChoice;
}

function getPlayerChoice()
{
    // function to the get the player's choice
    // get the Player choice with prompt
    let receivedPlayerChoice = prompt("Rock, Paper or Scissors?");
    // console.log(receivedPlayerChoice);
    // treat the choice and transform to upper case
    let treatedChoice = receivedPlayerChoice.toUpperCase();
    // console.log(treatedChoice);
    // possible choices by the player
    // if the choice Isn't satisfied, the function getPlayerChoice runs again
    if(treatedChoice === "ROCK" || treatedChoice === "PAPER" || treatedChoice === "SCISSORS")
    {
        return treatedChoice;
    } else {
        alert("Choose between Rock, Paper or Scissors");
        getPlayerChoice();
    }
}

function playRound(playerSelection, computerSelection)
{
    let player = playerSelection;
    // console.log(player)
    let computer = computerSelection;
    // console.log(computer)
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
}

game();

