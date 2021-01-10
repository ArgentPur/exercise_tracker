const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose")



const PORT = process.env.MONGOOSE || 3000

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.use(require(".routes/api_routes")(app));
app.use(require(".routes/html_routes")(app));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
});