const http = require("http");
const server = http.createServer((req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`);

    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/") {
        res.end("Welcome to the homepage!");
        console.log("Response sent: Welcome to the homepage!");
    } else if (req.url === "/about") {
        res.end("This is the about page.");
        console.log("Response sent: This is the about page.");
    } else {
        res.writeHead(404);
        res.end("404 Not Found");
        console.log("Response sent: 404 Not Found");
    }
});


server.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
