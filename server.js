var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var posts = require('./routes/posts.js');
var categories = require('./routes/categories.js');
var users = require('./routes/users.js');

app.use(bodyParser.json());

app.use('/posts', posts);
app.use('/users', users);
app.use('/categories', categories);

app.listen(1239, function () {
  console.log('1239');
});