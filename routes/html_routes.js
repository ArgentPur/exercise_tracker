const express = require("express").Router();
const path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercice.html"));
    });
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}

