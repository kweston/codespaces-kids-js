const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Mini Chatbot");
console.log('Type "hello", "joke", "help", or "bye".');

function getReply(message) {
  const text = message.toLowerCase().trim();

  if (text === "hello") return "Hi there!";
  if (text === "help") return "Try typing hello, joke, or bye.";
  if (text === "joke") return "Why did the computer go to school? To improve its memory!";
  if (text === "bye") return "Goodbye!";

  return "I do not understand that yet.";
}

function chat() {
  rl.question("You: ", (message) => {
    const reply = getReply(message);
    console.log(`Bot: ${reply}`);

    if (message.toLowerCase().trim() === "bye") {
      rl.close();
      return;
    }

    chat();
  });
}

chat();
