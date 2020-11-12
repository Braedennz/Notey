const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Note = new Schema(
    {
        title: { type: String, required: true },
    },
    { timestamps: true },
);

module.exports = mongoose.model('notes', Note)