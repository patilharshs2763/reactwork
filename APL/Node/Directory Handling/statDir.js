const fs = require('fs');
const path = './NewDir';

fs.stat(path, (err, stats) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Directory stats:', stats);
    }
});
