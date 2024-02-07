require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts')

//EXPRESS APP
const app = express();

//MIDDLEWARE
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

//ROUTES
app.use('/api/workouts', workoutRoutes)

//LISTEN FOR REQUEST
app.listen(process.env.PORT, () => {
  console.log('Listening to port', process.env.PORT)
})

