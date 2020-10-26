var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var mongodb_url = process.env.MONGODB_URL || 'mongodb://localhost/BooksDB';
var db = mongoose.connect(mongodb_url, {useNewUrlParser: true, useUnifiedTopology:true} );



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksRouter = require('./routes/books');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// method 1 to set global variable
// app.set('db', db);
// method 2 to set global variable
// app.locals.db = db;

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/books', booksRouter);

module.exports = app;
