
import express from 'express';
import cors from 'cors'; 
import https from 'https'; 
import fs, { readFileSync } from 'fs'; 


import Beauty from './Routes/Beauty'; 
import users from './Routes/users'; 
import auth from './Routes/auth'; 


//const express = require('express')
const app = express()
const port = 3000

import beauty from './Routes/Beauty';
import mongoose from 'mongoose'; 

/*let corsOptions = {
    origin: 'http://localhost:4200'
  }*/


  app.use(cors()); 

app.get('/Beauty'); 


//app.get('/', (req, res) => res.send('Hello World isnt life great from Una!'))

const connectionString = 'mongodb://127.0.0.1:27017/UnaAssignment' 


mongoose.connect(connectionString, {
  "useNewUrlParser": true,
  "useUnifiedTopology": true, 
  "useCreateIndex" : true
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


const options = {
  key: fs.readFileSync("ssl/59482951_productlocal.key"),
  cert: fs.readFileSync("ssl/59482951_productlocal.cert")
};

// Configuring the built-in express body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/Beauty',beauty); 
app.use('/users',users); 
app.use('/auth',auth)



app.get('/', (req, res) =>
 res.send('hello world, Carla is using Express this has changed'));



 app.all('*',(req,res)=>{
 res.status(404).json({
   status: 'fail', 
   message: `Cant find ${req.originalUrl} on this server`
 }); 
}); 

/*app.get('/beauties', (req, res) =>
  res.send('hello world, this is all about beauty!'));*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



https.createServer(options, app).listen(8080, () => 
console.log('listening on 8080 too, dont forget the https')); 



 