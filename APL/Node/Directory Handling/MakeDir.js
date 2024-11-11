const fs = require('fs');
const path = './makeDirNew';

fs.mkdir(path, { recursive: true }, (err) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log('Directory created successfully');
    }
});