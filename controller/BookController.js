const Book = require("../model/Books");
const moment = require("moment");

exports.Create = async (req, res) => {
    let data = {
        title: req.body.title,
        isbn: req.body.isbn,
        author: req.body.author,
        created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
        updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
    };

    try {
        const newBook = new Book(data);
        const savedBook = await newBook.save();

        console.log(`[CREATE] success ${JSON.stringify(savedBook)}`);

        return res.status(200).send({
            message: "success",
            data: savedBook,
        });
    } catch (err) {
        console.log(`[CREATE] failed ${JSON.stringify(err)}`);

        return res.status(422).send({
            message: "failed",
            data: err,
        });
    }
};

exports.Read = async (req, res) => {
    try {
        const listBook = await Book.find();

        console.log(`[READ] success ${JSON.stringify(listBook)}`);

        return res.status(200).send({
            message: "success",
            data: listBook,
        });
    } catch (err) {
        console.log(`[READ] failed ${JSON.stringify(err)}`);

        return res.status(500).send({
            message: "failed",
            data: err,
        });
    }
};

exports.Update = async (req, res) => {
    let data = {
        title: req.body.title,
        isbn: req.body.isbn,
        author: req.body.author,
        updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
    };

    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, data, {
            new: true,
        });

        // check if id is exist
        if (updatedBook == null) {
            console.log(`[UPDATE] failed ${JSON.stringify(updatedBook)}`);

            return res.status(404).send({
                message: "_id is not exist",
                data: null,
            });
        }

        console.log(`[UPDATE] success ${JSON.stringify(updatedBook)}`);

        return res.status(200).send({
            message: "success",
            data: updatedBook,
        });
    } catch (err) {
        console.log(`[UPDATE] failed ${JSON.stringify(err)}`);

        return res.status(422).send({
            message: "failed",
            data: err,
        });
    }
};

exports.Delete = async (req, res) => {
    try {
        const deleteBook = await Book.findByIdAndDelete(req.params.id);

        // check if id is exist
        if (deleteBook == null) {
            console.log(`[DELETE] failed ${JSON.stringify(deleteBook)}`);

            return res.status(404).send({
                message: "_id is not exist",
                data: null,
            });
        }

        console.log(`[DELETE] success ${JSON.stringify(deleteBook)}`);

        return res.status(200).send({
            message: "success",
            data: deleteBook,
        });
    } catch (err) {
        console.log(`[DELETE] failed ${JSON.stringify(err)}`);

        return res.status(422).send({
            message: "failed",
            data: err,
        });
    }
};

exports.ReadByID = async (req, res) => {
    try {
        const readOneBook = await Book.findById(req.params.id);

        console.log(readOneBook);

        // check if id is exist
        if (readOneBook === null) {
            console.log(`[READ BY ID] failed ${JSON.stringify(readOneBook)}`);

            return res.status(404).send({
                message: "_id is not exist",
                data: null,
            });
        }

        console.log(`[READ BY ID] success ${JSON.stringify(readOneBook)}`);

        return res.status(200).send({
            message: "success",
            data: readOneBook,
        });
    } catch (err) {
        console.log(`[READ BY ID] failed ${JSON.stringify(err)}`);

        return res.status(422).send({
            message: "failed",
            data: err,
        });
    }
};
