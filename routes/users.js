var express = require('express');
var router = express.Router();
var dbManager = require('./../dbManager.js');
var crypto = require('crypto');

router.post('/one', function (req, res) {
    dbManager.findOne('users', {username: req.body.username}, function (doc) {
        if (doc) {
            res.send(doc);
        } else {
            res.send('USERDOESNTEXIST')
        }
    })
});

router.post('/create', function (req, res) {
    dbManager.findOne('users', {username: req.body.username}, function (doc) {
        if (doc) {
            res.send('USERALREADYEXISTS')
        } else {
            var user = {
                username: req.body.username,
                email: req.body.email,
                karma: 0,
                goodThings: 0,
                badThings: 0,
                posts: null,
                lastPosted: null,
                avatar: null,
                description: null    
            };

            var pwd = {
                username: req.body.username,
                password: crypto.createHash('sha256', req.body.password).digest('hex')
            }
            
            dbManager.insert('users', user, function () {
                dbManager.insert('passwords', pwd, function () {
                    res.send('USERCREATED');
                })
            });
        }
    })
})

router.post('/login', function (req, res) {
    dbManager.findOne('passwords', {username: req.body.username}, function (doc) {
        if (doc) {
            var password = crypto.createHash('sha256', req.body.password).digest('hex');
            if (password == doc.password) {
                res.send('ACCESS');
            } else {
                res.send('ACCESSDENIED');
            }
        } else {
            res.send('USERDOESNTEXIST');
        }
    })
})

module.exports = router;