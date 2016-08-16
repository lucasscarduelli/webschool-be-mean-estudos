'use strict';

const express = require('express');
const app = express();
const router = express.Router();

// Criar o módulo de roteamento
router.all('*', (req, res, next) => {
    res.setHeader('Sistema','Teste');
    console.log('all');
    next();
});

router.get('/', (req, res) => {
    res.send('Listagem');
    console.log('get');
});

// Passa o módulo para a URL /hello
app.use('/hello', router);

app.listen(3000, () => {
    console.log('Servidor rodando em localhost:3000');
})