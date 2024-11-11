const dns = require("dns");
dns.lookup("www.google.com", (err, address, family) => {
    if (err) {
        console.error('Lookup error:', err);
        return;
    }
    console.log("Address:", address);
    console.log("Address Family:", family);

    dns.reverse(address, (err, hostnames) => {
        if (err) {
            console.error('Reverse lookup error:', err);
            return;
        }
        console.log("Reverse lookup for " + address + ": " + JSON.stringify(hostnames));
    });
});
