const fs = require('fs');
const oldPath = './test';
const newPath = './RenamedDir';

fs.rename(oldPath, newPath, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Directory renamed or moved');
    }
});
