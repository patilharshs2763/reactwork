// app.js (Web App with HTTP Module)
const http = require('http');

// Create a web server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Node.js Web App using HTTP module!\n');
});

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
