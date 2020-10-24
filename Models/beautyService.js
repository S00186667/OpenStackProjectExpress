
import { Product } from "./productModel";

/*const products =
[{"name":"AHA 30%","Category":"skincare","brand":"The ordinary", "price":30,"id":1100},
{"name":"FRECKLE OG ","Category": "skincare","brand":"OG", "price":17,"id":1200},
{"name":"HYDRATING FACIAL CLEANSER","Category": "skincare","brand":"Cerva", "price":15,"id":1300},
{"name":"D-BRONZI","Category": "skincare","brand":"Drunk Elephant", "price":18,"id":1400},
{"name":"SKINTUNE BLUR PERFECTING PRIMER","Category": "makeup","brand":"FARSÁLI", "price":50,"id":1500},
{"name":"PORELESS PUTTY PRIMER","Category": "makeup","brand":"E.L.F", "price":11,"id":1600}
];*/


function readProduct (req,res,options =[]) {

    Product.find()
    .then((result) => {

    console.log('book found'); 
    res.json(result)
    })
    .catch((error) =>
    res.status(500),json({error: 'An error'}))
    console.log('Finding book'); 
}

function readProducts (req,res)  {
    const id = req.params.id;  
    Product.findById(id)
        .then((result) =>
        res.json(result))
        .catch((error) =>
        res.status(404).json({error: 'not found' }))    
        
}



function createProduct (req,res) {

    let productDoc = new Product(req.body); 
    productDoc.save()
    .then((result) => {
        console.log('product saved'); 
        res.status(201).json({id: result._id, uri: `/Beauty/${result.uri}`})

    })
  .catch((error)=> {
    res.status(412).json({ status: 'fail', message: 'not created' })
  }); 
  console.log('Promising to save');

}

function updateProduct (req, res)  {

    const id = req.params.id; 

    console.log('updating product' + id) 


    //using req.body here remember body parser

    Product.findByIdAndUpdate({_id: id},{...req.body})
    .then((result) => {
        if(result) {
            res.status(200).send({message: 'updated'})
        }
        else {
            res.status(404).send({message: 'not found'})
        }
    })
    .catch((error) => {

        res.status(404).send({message: 'not found' + error})
    
    }); 

     
 }



function deleteProduct (req,res) {

    const id = req.params.id; 

    Product.findByIdAndDelete(id). 
    then((result) => {

        if(result) {
            res.status(203).send({message : 'deleted'})
        }
        else {
            res.status(404).send({message: 'not found'})
        }

    })

    .catch((error) =>
    
    res.status(404).send({message: 'not found'}));
    
    

 }


 

export default {createProduct, deleteProduct, readProducts, readProduct,updateProduct}
