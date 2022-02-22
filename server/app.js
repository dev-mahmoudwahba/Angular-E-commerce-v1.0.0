const express = require('express');
const bodyParser=require('body-parser');
const morgan = require('morgan');
const cors=require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/angularproject', );

const indexRoutes = require('./routes/index_routes');
const userRoutes = require('./routes/user_routes');


const app = express()

app.use(morgan('dev'));

app.use(express.json())


app.use(bodyParser.json());
app.use(cors());


indexRoutes(app)
userRoutes(app)

app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message})
})


module.exports = app;
