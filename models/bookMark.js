"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BookMarkSchema = new Schema({
    userId: {type: ObjectId, ref:'Administrator', required: true},
    owner: {type: String, enum: ['public','private'], required: true},
    title: {type: String, trim: true, required: true},
    url: {type: String, trim: true},
    updated: {type: Date, default: Date.now},
    created: {type: Date, default: Date.now},
    status: {type: Number, default: 0},
}, {
    autoIndex: false,
})

BookMarkSchema.index({userId: -1})
BookMarkSchema.index({categoryId: -1})
BookMarkSchema.index({title: -1})
BookMarkSchema.index({owner: 1})

exports.BookMark = mongoose.model('bookMark', BookMarkSchema)


