const fs = require('fs');
const path = './NewDir';

fs.watch(path, (eventType, filename) => {
    console.log(`Event: ${eventType}, Filename: ${filename}`);
});
