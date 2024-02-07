require('dotenv').config();
const express = require('express');

//EXPRESS APP
const app = express();

//MIDDLEWARE
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

app.get('/', (req, res)=>{
  res.json({mssg: 'Welcome to my app'})
})

//LISTEN FOR REQUEST
app.listen(process.env.PORT, () => {
  console.log('Listening to port', process.env.PORT)
})

