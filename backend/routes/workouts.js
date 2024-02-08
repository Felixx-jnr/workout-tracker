const express = require('express');
const router = express.Router();
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controller/workoutController')

//GET ALL WORKOUTS
router.get('/', getWorkouts)

//GET SINGLE WORKOUT
router.get('/:id', getWorkout)

//POST A SINGLE WORKOUT
router.post('/', createWorkout)

//DELETE A SINGLE WORKOUT
router.delete('/:id', deleteWorkout)

//UPDATE A SINGLE WORKOUT
router.patch('/:id', updateWorkout)

module.exports = router