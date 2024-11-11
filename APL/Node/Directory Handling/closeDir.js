const fs = require('fs');
const path = './makeDir';

fs.opendir(path, (err, dir) => {
    if (err) {
        console.error(err);
    } else {
        dir.close((err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Directory closed');
            }
        });
    }
});
