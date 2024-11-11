const fs = require('fs');
const path = '../File Handling';
fs.readdir(path, (err, files) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Directory contents:', files);
    }
});
