// consoleApp.js (Console App)
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask a question to the user
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}, from Node.js Console App!`);
  rl.close();
});
