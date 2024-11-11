const fs = require("fs");
let data = "\nHow are you?";

fs.appendFile("readWrite.txt", data, "utf8", (err, data) => {
    if (err) throw err;
    console.log("Data is appended to file successfully.");
    console.log("Reading Data after appended to file:\n");

    fs.readFile("readWrite.txt", function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
}
);
