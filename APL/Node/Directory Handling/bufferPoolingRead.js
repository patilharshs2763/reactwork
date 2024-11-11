const fs = require('fs');
const path = "./test.txt"
// Reading a file as a buffer
fs.readFile(path, (err, data) => {
    if (err) throw err;
    console.log('File data as buffer:', data);   // Outputs raw buffer data
    console.log('File data as string:', data.toString()); // Converts buffer to string
});
