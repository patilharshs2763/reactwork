const path = require('path');
const myFile = '/user/local/bin/file.txt';
console.log('Directory Name:', path.dirname(myFile));
console.log('Base Name:', path.basename(myFile));
console.log('File Extension:', path.extname(myFile));
const parsedPath = path.parse(myFile);
console.log('Parsed Path:', parsedPath);
const formattedPath = path.format(parsedPath);
console.log('Formatted Path:', formattedPath);
console.log('Is Absolute:', path.isAbsolute(myFile));