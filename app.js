const express = require("express");
const path = require("path");
const app = express();

const static_path = path.join(__dirname, "/public" );

app.use(express.static(static_path));


app.get("/", (req, res) => {
    res.send("index.html")
});

app.listen(3000)
