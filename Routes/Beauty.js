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
    const products = db.readProducts(); 
    res.send(products);
})

router.get('/:id',(req,res)=> {

    let id = req.params.id; 
    const product = db.readProducts(id); 
    res.json(products[id]); 
    

})

export default router;
