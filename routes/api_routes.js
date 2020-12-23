const express = require("express").Router();
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

router.put("/api/:id", ({ body, params}) =>{
    db.Exercise.findByIdAndUpdate(
        params.id,
        { $push: {exercises: body}},
        {new: true, runValidators: true}
    ).then(results =>{
        res.json(results);
    }).catch(err => {
        res.json(err);
    });
});


module.exports = express;