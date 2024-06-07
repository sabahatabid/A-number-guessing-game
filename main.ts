#!/usr/bin/env node
//number guessing game

import inquirer from "inquirer";

console.log("\n\tWelcome to CodewithSaba -CLI Number Guessing Game\n");
 
    let randomNum = Math.floor(Math.random() * 5 + 1);

 let answer = await inquirer.prompt([
{ 
    name:"userGuessedNumber",
    type:"number", 
  message: "Enter your guess number(Number limit from 1 to 5):",
   },

  ]);

  if (answer.userGuessedNumber === randomNum ){
     console.log( "Congratulation ! You guess a correct number. ");
    
  }else{

    console.log("Sorry,you guess a wrong number");

  };

 