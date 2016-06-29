var express = require('express');
var router = express.Router();
var db = require('./../dbManager.js');

router.post('/', function (req, res) {
    db.findOne('posts', {categoryName: req.body.categoryName}, function (docs) {
        res.send(docs);
    })
})

router.post('/one', function (req, res) {
    db.findOne('posts', {_id: req.body.id}, function (doc) {
        res.send(doc);
    })
})

router.post('/create', function (req, res) {
    db.insert('posts', req.body, function () {
        res.send('POST CREATED')
    })
})

router.post('/karma', function (req, res) {
    db.update('posts', {_id: req.body.id}, {$inc: {karma: req.body.karma}}, {}, function () {
        res.send(true);
    });
})

module.exports = router;