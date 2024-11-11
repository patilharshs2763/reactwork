const fs = require('fs');

fs.readFile('./test.txt', (err, data) => {
    if (err) throw err;

    const base64Data = data.toString('base64');
    console.log('File data in Base64:', base64Data);

    fs.writeFile('./encoded.txt', base64Data, (err) => {
        if (err) throw err;
        console.log('Base64 encoded data written to file');
    });
});
