const mongoose = require('mongoose'),
      BookModel = require('../models/book');


exports.listAll = function (req, res) {
    // mehtod 1 to get global variable
    // const db = req.app.get('db');
    // mehtod 2 to get global variable
    // const db = req.app.locals.db;

    BookModel.find({}, function (err,Books) {
        if(err)
            res.send(err);
        return res.json(Books);
    })
}

exports.read = function (req, res) {
    BookModel.findById(req.params.BookId, function (err, Book) {
        if (err)
            res.send(err);
        res.json(Book);
    });
};

exports.create = function(req, res){
    const new_book = new BookModel(req.body);

    new_book.save(function(err, Book){
        if(err)
            res.send(err.errmsg)
        else
            res.send(`Book was successfully added to DB bookID: ${Book._id} `)
    })
}

exports.update = function(req, res){
    BookModel.findOneAndUpdate({
       _id: req.params.BookId
    }, req.body, {
        new: true
    }, function(err, Book){
        if (err)
            res.send(err)
        res.send('New book was updated successfully')
    })
}

exports.delete = function (req, res){
    BookModel.remove({
        _id: req.params.BookId
    }, function(err, Book){
        if (err)
            res.send(err)
        res.send('New book was Deleted successfully')
        // res.redirect('/api/books')
    })
}
