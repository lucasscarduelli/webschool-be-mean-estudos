"use strict"

const http = require('http');

process.nextTick(() => {
    console.log('process.nextTick é async!');
})

console.log(process.execPath);
console.log(process.cwd());
console.log(process.pid);

let server = http.createServer((req, res) => {
    
});

server.listen(3000, () => {
    console.log('Server is on!')
});

process.on('SIGINT', () => {
    console.log('Server is shutdown');
    process.exit(0);
});