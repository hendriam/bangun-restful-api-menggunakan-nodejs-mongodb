module.exports = (app) => {
    const HomeController = require("../controller/HomeController.js");

    app.get("/", HomeController.Index);

    // controller book
    const BookController = require("../controller/BookController.js");

    // endpoint create
    app.post("/book/create", BookController.Create);

    // endpoint read data
    app.get("/book/read", BookController.Read);

    // endpoint update data
    app.put("/book/update/:id", BookController.Update);

    // endpoint delete data by id
    app.delete("/book/delete/:id", BookController.Delete);

    // endpoint read data by id
    app.get("/book/read/:id", BookController.ReadByID);
};
