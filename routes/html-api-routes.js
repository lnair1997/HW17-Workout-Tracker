const express = require("express");
const path = require("path");
const router = express.Router();

const db = require("../models/Workout");

// ----------HTML Routes---------- 
router.get("/", (res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

// ----------API Routes---------- 