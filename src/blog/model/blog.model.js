// Blog Model File

const mongoose = require("mongoose");

// Created Blog Schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});

// Created Model out off Schema
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;