const fs = require('fs');
const source = './NewDir';
const destination = './makeDir';

fs.cp(source, destination, { recursive: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Directory copied successfully');
    }
});
