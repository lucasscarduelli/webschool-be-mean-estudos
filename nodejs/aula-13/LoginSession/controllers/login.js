'use strict';

const User = require('../models/index').User;

function loginHandler(req, res) {
    const user = req.body;

    User.findOne({
        email : user.mail
    }).then(u => {
        if (u.password === user.password) {
            req.session.user = u.toJSON();
            delete req.session.user.password;
            res.redirect('/');
        }   else {
            loginError(res);
        }
    }, () => {
        loginError(res);
    }).catch(() => {
        loginError(res);
    });
}

module.exports = exports = loginHandler;

function loginError(res) {
    res.render('login', {
        title : 'login',
        msg : 'Erro ao logar'
    });
}
