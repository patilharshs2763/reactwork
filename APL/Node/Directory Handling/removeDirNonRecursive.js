const fs = require('fs');
const path = './RenamedDir';

fs.rmdir(path, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Directory removed');
    }
});
