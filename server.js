const express = require("express");
const mongoose = require("mongoose");
let db = require("./models")

const app = express();
const PORT = process.env.MONGOOSE || 3000

app.use(require(".routes/api_routes")(app));
app.use(require(".routes/html_routes")(app));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost",)

app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
});