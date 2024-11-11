function addition(a, b, callback) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return callback("Error: Both arguments must be numbers", null);
    }

    const add = a + b;
    callback(null, add);
}

addition('a', 10, (err, result) => {
    if (err) {
        return console.error(err);
    }
    console.log("The result is:", result);
});
