const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "/public" );

app.use(express.static(static_path));


app.get("/", (req, res) => {
    res.send("index.html")
});

app.listen(port, () => {
  console.log('listening to port no at ${port}');
})
