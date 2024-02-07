require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
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

//CONNECT TO DB
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    //LISTEN FOR REQUEST
    app.listen(process.env.PORT, () => {
      console.log('Connected to Database and Listening to port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
