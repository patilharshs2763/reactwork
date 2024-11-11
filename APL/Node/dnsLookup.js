const dns = require('dns');

dns.lookup('www.google.com', (err, address, family) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Address:', address);
        console.log('Family:', family);
    }
});
