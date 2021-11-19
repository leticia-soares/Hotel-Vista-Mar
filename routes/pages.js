const express = require('express');
const authController = require('../controllers/auth')

const router = express.Router();

router.get('/', authController.isLoggedIn, (req,res) => {
    res.render('index', {
        user: req.user
    });
});
router.get('/register', (req,res) => {
    res.render('register')
})
router.get('/login', (req,res) => {
    res.render('login')
})

router.get('/reserva', authController.isLoggedIn, (req,res) => {
    
    console.log(req.user);
    if (req.user) {
        res.render('reserva', {
        });
    }else {
        res.redirect('/login');
    }
    
})
router.get('/reservado', (req,res) => {
    res.render('reservado', {
        user: req.user
    });
})

module.exports = router;