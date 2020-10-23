
import express from 'express';

//const express = require('express')
const app = express()
const port = 3000

import beauty from './Routes/Beauty';
import mongoose from 'mongoose'; 





//app.get('/', (req, res) => res.send('Hello World isnt life great from Una!'))

const connectionString = 'mongodb://127.0.0.1:27017/UnaAssignment' 


mongoose.connect(connectionString, {
  "useNewUrlParser": true,
  "useUnifiedTopology": true
}).
catch ( error => {
  console.log('Database connection refused' + error);
  process.exit(2);
})


const db = mongoose.connection; 


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log("DB connected")
});


// Configuring the built-in express body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



//app.get('/', (req, res) =>
 //res.send('hello world, Una is using Express this has changed'));

/*app.get('/beauties', (req, res) =>
  res.send('hello world, this is all about beauty!'));*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.use('/Beauty',beauty); 