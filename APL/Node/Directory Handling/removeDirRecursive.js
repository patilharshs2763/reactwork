const fs = require('fs');
const path = './test';

fs.rm(path, { recursive: true, force: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Directory removed recursively');
    }
});
