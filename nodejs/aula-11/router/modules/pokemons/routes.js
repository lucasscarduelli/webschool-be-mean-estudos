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
    require('./models/model-pokemon-list')(req, res);
});

module.exports = router;