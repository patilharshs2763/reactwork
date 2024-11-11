// Creating an Empty Buffer with a Specified Size

var buf = Buffer.alloc(5);
console.log(buf);


// Creating a Buffer from a String
console.log("Buffer from String:");
var bufString = Buffer.from('abc');
console.log(bufString);  //Convert the string "abc" into a stream of binary data:
console.log(bufString.toString());

// Buffer Length
console.log("buffString length:", bufString.length);

// Creating a Buffer from an Array
console.log("Buffer array:");
const bufferFromArray = Buffer.from([72, 101, 108, 108, 111]);
console.log(bufferFromArray); // <Buffer 48 65 6c 6c 6f>
console.log(bufferFromArray.toString()); // 'Hello'


//Buffer concatination
console.log("Buffer concatination:");
const buf1 = Buffer.from('Hello, ');
const buf2 = Buffer.from('World!');
const buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString()); // 'Hello, World!'

// Slicing a Buffer Slicing does not copy data; instead, it returns a view on the original buffer.
console.log("Buffer slice:")
const bufSlice = Buffer.from('Node.js');
const slice = bufSlice.slice(0, 4);
console.log(slice.toString());

//Compare buffers
console.log("Buffer compare:");
const bufA = Buffer.from('ABC');
const bufB = Buffer.from('ABCD');
console.log(Buffer.compare(bufA, bufB));

//Buffer encoding
const bufEncoding = Buffer.from('Hello, World!');
console.log("Encoded in hex form:", bufEncoding.toString('hex'));
console.log("Encoded in hex form:", bufEncoding.toString('base64'));
