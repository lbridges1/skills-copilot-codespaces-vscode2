// create web server
var express = require('express');
var app = express();

// create body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json

// create database
var comments = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

app.use(express.static('public'));

// create route
app.get('/api/comments', function(req, res) {
    res.json(comments);
});

app.post('/api/comments', function(req, res) {
    var newComment = {
        id: Date.now()
    }
});