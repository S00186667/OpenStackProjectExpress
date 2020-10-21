
import express from 'express';

//const express = require('express')
const app = express()
const port = 3000

import beauty from './Routes/Beauty';





//app.get('/', (req, res) => res.send('Hello World isnt life great from Una!'))




// Configuring the built-in express body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



//app.get('/', (req, res) =>
 //res.send('hello world, Una is using Express this has changed'));

/*app.get('/beauties', (req, res) =>
  res.send('hello world, this is all about beauty!'));*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.use('/Beauty',beauty); 