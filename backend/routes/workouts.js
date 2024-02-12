const express = require('express');
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controller/workoutController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//  REQUIRE AUTH FOR ALL WORKOUT ROUTES
router.use(requireAuth)

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