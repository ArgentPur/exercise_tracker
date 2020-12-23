const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newExercise = new Schema( {
    type: {type: String, required: true},
    name: {type: String, required: true},
    duration: {type: String, required: false},
    weight: {type: String, required: false},
    reps: {type: String, required: false},
    sets: {type: String, required: false}
}) 


newExercise.virtual("totalDuration").get(function() {
      return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
      }, 0);
    });
  
const Exercise = mongoose.model("Exercise", newExercise);

module.exports = Exercise;