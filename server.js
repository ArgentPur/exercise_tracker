const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.MONGOOSE || 3000

require(".routes/api_routes")(app);
require(".routes/html_routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost",)

app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
});
