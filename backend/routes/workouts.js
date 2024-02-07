const express = require('express');
const Workout = require('../models/WorkoutModel');
const router = express.Router();

//GET ALL WORKOUTS
router.get('/', (req, res) => {
  res.json({mssg: 'Get all workouts'})
})

//GET SINGLE WORKOUT
router.get('/:id', (req, res) => {
  res.json({mssg: 'Get a single workout'})
})

//POST A SINGLE WORKOUT
router.post('/', async (req, res) => {
  const {title, load, reps} = req.body

  try{
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}) 

//DELETE A SINGLE WORKOUT
router.delete('/:id', (req, res) => {
  res.json({mssg: 'delete a single workout'})
})

//UPDATE A SINGLE WORKOUT
router.patch('/:id', (req, res) => {
  res.json({mssg: 'update a single workout'})
})

module.exports = router