var express = require('express');
var router = express.Router();
var dbManager = require('./../dbManager.js');

router.get('/', function (req, res) {
    dbManager.find('categories', {}, function (docs) {
        res.send(docs);
    })
})

router.post('/one', function (req, res) {
    dbManager.findOne('categories', {categoryName: req.body.categoryName}, function (doc) {
        if (doc) {
            res.send(doc);
        } else {
            res.send('CATEGORY DOESNT EXIST');
        }
    })
})

router.post('/createOne', function(req, res){
    dbManager.insert('categories', req.body, function () {
        res.send('GOOD')
    })
})

module.exports = router;