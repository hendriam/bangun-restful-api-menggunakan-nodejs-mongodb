const express = require("express");
const app = express();
const port = 3000;

// initial package mongoose & config database
const mongoose = require("mongoose");
const dbConfig = require("./config/database.js");

// Connecting to the database
mongoose
    .connect(dbConfig.url)
    .then(() => {
        console.log(`[MongoDB] Successfully connected to the database`);
    })
    .catch((err) => {
        console.log(
            `[MongoDB] Could not connect to the database. Exiting now... ${err}`
        );
        process.exit();
    });

const bodyParser = require("body-parser");
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(bodyParser.json());

const route = require("./route/route.js");
route(app);

app.listen(port);
console.log(`Server running at http://localhost:${port}/`);
