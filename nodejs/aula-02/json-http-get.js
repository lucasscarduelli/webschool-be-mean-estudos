http.get({
    hostname : 'localhost',
    port: 80,
    path: '/',
    agent: false // criar um novo agente apenas para este pedido
}, function(res) {
    // Função de callback
});