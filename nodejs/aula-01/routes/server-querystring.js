'use strict';

const http = require('http')
 , url = require('url');

var server = http.createServer(function (request, response) {
    
    var result = url.parse(request.url, true);
    
    response.writeHead(200, { "Content-Type": 'text/html' });
    response.write('<html><body>');
    response.write('<h1>Query String</h1>');
    response.write('<ul>');
    
    console.log(result.query);
    
    for(var key in result.query) {
        response.write('<li>'+key+':'+result.query[key]+'</li>');
    }
    
    response.write('</ul>');
    response.write('</html></body>');
    response.end();
});
server.listen(3000, function () {
    console.log('Servidor rodando em localhost:3000');
});