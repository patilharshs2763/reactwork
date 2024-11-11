// Require the given module
const fs = require('fs');
console.log("Reading in Sync mode!");
const data = fs.readFileSync('readMe.txt', 'utf-8');
console.log(data);
fs.writeFileSync('writeMe.txt', data);

fs.appendFileSync('writeMe.txt', '\nHow are you?.', 'utf-8');
console.log("Successfully appended!");

console.log("Reading in asyn mode!");
fs.readFile('readMe.txt', 'utf-8', function (err, data) {
    if (!err)
        console.log(data);
    else
        throw err;
});
//ASyn mode
fs.writeFile('writeMe1.txt', "\nI'm Harsh!", 'utf-8', (err) => {
    if (err) throw err;
    console.log('File written asynchronously');

    fs.readFile('writeMe.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log('Read asynchronously:');
        console.log(data);

        fs.appendFile('writeMe.txt', '\n I am fine!.', 'utf-8', (err) => {
            if (err) throw err;
            console.log('Data appended asynchronously');

            fs.rename('ReadFile.js', 'ReadFile1.js', (err) => {
                if (err) throw err;
                console.log('File renamed asynchronously');

                fs.unlink('writeMe.txt', (err) => {
                    if (err) throw err;
                    console.log('File deleted asynchronously');
                });
            });
        });
    });
});