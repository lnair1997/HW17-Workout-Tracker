const express = require("express");
const path = require("path");
const router = express.Router();

const Workout = require("../models/Workout");

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
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    let duration = + req.body.duration
    Workout.findByIdAndUpdate(req.params.id, {
        $push: {
            exercises: req.body,
        }, totalDuration: duration
    }).then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(({ message }) => {
            console.log(message);
        });
});



module.exports = router;