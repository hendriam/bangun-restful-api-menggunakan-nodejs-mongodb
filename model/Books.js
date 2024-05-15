const mongoose = require("mongoose");
const BookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        isbn: {
            type: Number,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        created_at: String,
        updated_at: String,
    },
    { timestamps: false }
);

module.exports = mongoose.model("books", BookSchema);
