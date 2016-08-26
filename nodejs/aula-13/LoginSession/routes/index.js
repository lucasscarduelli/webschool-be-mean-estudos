const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');
const middleware = require('../middlewares/index');

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

router.get('/logout', (req, res) => {
  req.session.reset();
    res.redirect('/');
});

router.post('/login', controller.login);

router.get('/caduser', (req, res) => {
    res.render('caduser', { title: 'caduser' });
});

router.post('/caduser', controller.usersCreate);

router.get('/restrict', middleware.auth, controller.users);

module.exports = router;
