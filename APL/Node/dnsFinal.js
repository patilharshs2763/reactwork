const dns = require('dns');

dns.lookup('www.google.com', (err, address) => {
    if (err) {
        console.error('Lookup error:', err);
    } else {
        console.log('IP Address:', address);

        dns.resolve('www.google.com', (err, records) => {
            if (err) {
                console.error('Resolve error:', err);
            } else {
                console.log('DNS Records:', records);
            }
        });
    }
});
