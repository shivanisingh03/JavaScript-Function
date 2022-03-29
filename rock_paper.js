
function rock_paper_scissors(computerMoves){
    let readlineSync = require("readline-sync");
    var playerName= readlineSync.question("What is your name: ")
    console.log("hi "+ playerName )
    var playerage=readlineSync.questionInt("enter your age")
    if (playerage>=18){
    console.log("hi young girl/boy")
    }
    else if (playerage<=18){
    console.log("hi baby")
    }
    // var computerMoves = ['rock', 'paper', 'scissors'];
    var randomMoveOfComputer = computerMoves[Math.floor(Math.random() * computerMoves.length)];

    console.log("choose any move in rock paper scissors")
    var playerMove = readlineSync.question("Which move you want to do? ");

    if (playerMove==randomMoveOfComputer){
    console.log("Match Draw")
    }
    else if (playerMove=="rock" && randomMoveOfComputer=="paper"){
    console.log("computer won the match")
    }
    else if (playerMove=="paper" && randomMoveOfComputer=="scissors"){
    console.log("computer won the match")
    }
    else if (playerMove=="scissors" && randomMoveOfComputer=="rock"){
    console.log("computer won the match")
    }
    else if (playerMove=="paper" && computerMoves=="rock"){
    console.log(playerName+" Won the match")
    }
    else if (playerMove=="scissors" && computerMoves=="paper"){
    console.log(playerName+" Won the match")
    }
    else{
    console.log(playerName+" Won the match")

    }
}

rock_paper_scissors(['rock', 'paper', 'scissors'])
