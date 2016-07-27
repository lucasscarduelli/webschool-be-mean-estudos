"use strict";

console.log(__dirname);
console.log(__filename);

var buffer = new Buffer('Hello world!'); // Buffer é um objeto global
console.log(buffer.toString());

setTimeout(function() { // Função setTimeout também é global
    console.log("Hello async world!");
}, 1000);

// Primitivos assincronos

let time = setInterval(() => console.log("Hello async interval"), 1000);
setTimeout(() => { 
    clearInterval(time)
}, 5000);
