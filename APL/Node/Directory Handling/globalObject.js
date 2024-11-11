console.log("Current directory:", __dirname);
console.log("Current file:", __filename);

setTimeout(() => {
    console.log("This message is displayed after 5 seconds");
}, 5000);

let count = 0;
const interval = setInterval(() => {
    count += 1;
    console.log(`Count: ${count}`);
    if (count >= 5) {
        clearInterval(interval); 
    }
}, 1000);

console.log("Process arguments:", process.argv);
console.log("Node.js version:", process.version);
console.log("Platform:", process.platform);

console.log("This is a log message");
console.error("This is an error message");
