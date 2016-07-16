var Datastore = require('nedb');

function getDatabase (dbName) {
    if (!dbName) return false;
    var db = new Datastore({filename: './db/' + dbName});
    db.loadDatabase();
    return db;
}

var dbManager = {
    insert: function (dbName, doc, cb) {
        var db = getDatabase(dbName);
        db.insert(doc, cb);
    },

    update: function (dbName, query, update, opt, cb) {
        var db = getDatabase(dbName);
        db.update(query, update, opt, cb);
    },

    find: function (dbName, query, cb) {
        var db = getDatabase(dbName);
        db.find(query, function (err, doc) {
            if (err) return false;
            cb(doc);
        });
    },

    findOne: function (dbName, query, cb) {
        var db = getDatabase(dbName);
        db.findOne(query, function (err, doc) {
            if (err) return false;
            cb(doc);
        });
    }
}

module.exports = dbManager;

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://<weblabs>:<weblabs>@ds053190.mlab.com:53190/students');

// var ObjectId = mongoose.Schema.ObjectId;

// var categorySchema = mongoose.Schema({
//     title: String,
//     lastUpdate: Number,
//     postsCount: Number,
//     karma: Number
// })

// var userSchema = mongoose.Schema({
//     username: String,
//     password: String,
//     email: String,
//     karma: Number,
//     goodThings: Number,
//     badThings: Number,
//     posts: [String],
//     lastPosted: {type: ObjectId, ref: 'postSchema'},
//     avatar: String,
//     description: String 
// })

// var postSchema = mongoose.Schema({
//     title: String,
//     text: String,
//     date: Number,
//     itGood: Number,
//     itBat: Number,
//     kategoryId: [{type: objectId, ref: 'category}]
//     karma: Number
// })

// var Category = mongoose.model('Category', categorySchema);
// var User = mongoose.model('User', userSchema);
// var Post = mongoose.model('Post', postSchema);

// var dbManager = {
//     getItems: 
// }

//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
