#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a number
// 2) user will input a value for guessing number
// 3) compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log( "WELCOME!");
const asnwer = await inquirer.prompt([
  {
    message: "please guess a number between 1-6",
    type: "number",
    name: "UserGuessedNumber",
  },
]);

if( asnwer.UserGuessedNumber === randomNumber)
{
  console.log( "CONGRATULATIONS! You guessed the right number");
}
else
{
  console.log ( "You guessed the wrong number");
}
console.log( "THE END");