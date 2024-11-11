const fs = require('fs');
const path = './newDir';
fs.access(path, (err) => {
    if (err) {
        console.log("Directory does not exist");
    } else {
        console.log("Directory exists");
    }
});