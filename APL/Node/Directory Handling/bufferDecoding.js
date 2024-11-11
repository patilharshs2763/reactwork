const fs = require('fs');

fs.readFile('./encoded.txt', 'utf-8', (err, base64Data) => {
    if (err) throw err;

    const buffer = Buffer.from(base64Data, 'base64');
    console.log("Decoded data:", buffer.toString());
    fs.writeFile('./decoded.txt', buffer, (err) => {
        if (err) throw err;
        console.log('File decoded and written successfully');
    });
});
