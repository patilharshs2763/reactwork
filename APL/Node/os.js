const os = require('os');

console.log('Operating System:', os.type(), os.release());
console.log('Architecture:', os.arch());
// console.log('CPUs:', os.cpus());
console.log('Total Memory:', os.totalmem(), 'bytes');
console.log('Free Memory:', os.freemem(), 'bytes');
console.log('Hostname:', os.hostname());
// console.log('Network Interfaces:', os.networkInterfaces());
console.log('Temporary Directory:', os.tmpdir());
console.log('Endianness:', os.endianness());
console.log('User Info:', os.userInfo());
