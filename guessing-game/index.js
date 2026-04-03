const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Welcome to the Number Guessing Game!");
console.log("I am thinking of a number between 1 and 100.");

function askGuess() {
  rl.question("Enter your guess: ", (answer) => {
    const guess = Number(answer);

    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
      console.log("Please enter a whole number between 1 and 100.");
      askGuess();
      return;
    }

    attempts += 1;

    if (guess < secretNumber) {
      console.log("Too low. Try again!");
      askGuess();
    } else if (guess > secretNumber) {
      console.log("Too high. Try again!");
      askGuess();
    } else {
      console.log(`You got it in ${attempts} tries!`);
      rl.close();
    }
  });
}

askGuess();
