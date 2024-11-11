const fs = require('fs');
const path = './makeDir';

fs.opendir(path, (err, dir) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Directory opened:', dir.path);
        dir.read((err, dirent) => {
            if (dirent) {
                console.log('Directory entry:', dirent.name);
            }
        });
    }
});
