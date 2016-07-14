// https://http.cat/
var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {
        "Content-Type": 'text/html'
    });
    response.write('<h1>Be MEAN</h1>');
    response.end();
});
server.listen(3000, function () {
    console.log('Servidor rodando em localhost:3000');
});