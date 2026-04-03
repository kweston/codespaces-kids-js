const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function decideWinner(player, computer) {
  if (player === computer) return "tie";

  const playerWins =
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper");

  return playerWins ? "player" : "computer";
}

console.log("Rock, Paper, Scissors");
rl.question("Choose rock, paper, or scissors: ", (answer) => {
  const playerChoice = answer.trim().toLowerCase();

  if (!choices.includes(playerChoice)) {
    console.log("That is not a valid choice.");
    rl.close();
    return;
  }

  const computerChoice = getComputerChoice();
  const winner = decideWinner(playerChoice, computerChoice);

  console.log(`You chose: ${playerChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (winner === "tie") {
    console.log("It is a tie!");
  } else if (winner === "player") {
    console.log("You win!");
  } else {
    console.log("Computer wins!");
  }

  rl.close();
});
