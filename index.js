#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a number
// 2) user will input a value for guessing number
// 3) compare user input with computer generated number and show result
console.log("WELCOME!");
let guessedCorrectly = false;
let randomNumber;
for (let i = 0; i < 4; i++) {
    randomNumber = Math.floor(Math.random() * 6 + 1);
    const asnwer = await inquirer.prompt([
        {
            message: "please guess a number between 1-6",
            type: "number",
            name: "UserGuessedNumber",
        },
    ]);
    if (asnwer.UserGuessedNumber === randomNumber) {
        console.log("CONGRATULATIONS! You guessed the right number");
        guessedCorrectly = true;
        break;
    }
    else {
        console.log("You guessed the wrong number. Chances Left:" + (3 - i));
    }
}
if (!guessedCorrectly) {
    console.log("Sorry, you've run out of chances. The correct number was:", randomNumber);
}
console.log("THE END");
