const express = require("express");
const db = require("../models");

express.get("/api", (req, res) => {

    db.Exercise.find({})
    .then(results => {
        res.json(results)
    })
})

express.post("/api", (req, res) => {
    db.Exercise.create({})
    .then(results => {
        res.json(results)
    })
})

module.exports = function() {
    app.get()

    app.put()
}
