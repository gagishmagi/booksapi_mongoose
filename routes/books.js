var express = require('express');
var router = express.Router();
var BooksController = require('../controllers/bookcontroller');

router.get('/', BooksController.listAll)
router.post('/' , BooksController.create)
router.get('/:BookId', BooksController.read)
router.put('/:BookId', BooksController.update)
router.delete('/:BookId', BooksController.delete)


module.exports = router;
