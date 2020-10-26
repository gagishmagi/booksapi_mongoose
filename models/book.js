const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: 'The title field is manditory'
    },
    author: {
        type: String,
        required: 'The author field is manditory'
    },
    comments: {
        type: String,
        default: null
    },
    image_name: {
        type: String,
        default: 'No Image'
    }
});

module.exports = mongoose.model('Book', BookSchema);
