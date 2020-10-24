import express from 'express';

import db from '../Models/beautyService'

const router = express.Router();

let products = [];

router.post('/', (req, res) => {
    db.createProduct(req,res); 


  //  products.push(product);


 // db.createProduct(product); 
    //res.send ('Beauty item has been added to the database');
  //  console.log(`The brand name is ${product.name} number of book is ${products.length}`);

});

router.get('/', (req, res) => {
    db.readProducts(req,res); 
    
})

router.get('/:id',(req,res)=> {
     
    db.readProduct(req,res); 
    

})


router.delete('/:id',(req,res) => {

  db.deleteProduct(req,res); 


})

export default router;
