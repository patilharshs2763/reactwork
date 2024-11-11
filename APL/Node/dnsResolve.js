const dns = require('dns');
dns.resolve('www.google.com', (err, addresses) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Addresses:', addresses);
    }
});
