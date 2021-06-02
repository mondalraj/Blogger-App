const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        type: String
    },
    markdown: {
        required: true,
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now

    }
})

module.exports = mongoose.model('Articles', articleSchema);