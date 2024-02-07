const express = require('express');
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
router.post('/', (req, res) => {
  res.json({mssg: 'post a single workout'})
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