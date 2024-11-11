// app.js (Web + Console App using HTTP module)
const http = require('http');
const readline = require('readline');

// Create a web server using the HTTP module
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Node.js Web App using HTTP module!\n');
});

// Listen on port 3000 for HTTP requests
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

// Console input/output using readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a message for the console app: ', (message) => {
    console.log(`Message received: ${message}`);
    rl.close();
});
