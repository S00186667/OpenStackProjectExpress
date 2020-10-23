import { request } from "express";
import { Product } from "./productModel";

const products =
[{"name":"THE ORDINARY AHA 30% + BHA 2% PEELING SOLUTION","quantity":5, "id": "isbn001"},
{"name":"FRECKLE OG ","quantity":5 , "id": "isbn002"},
{"name":"CERAVE HYDRATING FACIAL CLEANSER","quantity":5,  "id": "isbn003"},
{"name":"DRUNK ELEPHANT D-BRONZI","quantity":5 , "id": "isbn004"},
{"name":"FARSÁLI SKINTUNE BLUR PERFECTING PRIMER","quantity":5 , "id": "isbn001"},
{"name":"E.L.F COSMETICS PORELESS PUTTY PRIMER","quantity":5 , "id": "isbn001"}
];


function readProducts (options = [])  {
    return products;
}


function readProduct (id, options = []) {
    return products[id];
}

function createProduct (product) {

    let productDoc = new Product(req.body); 
    productDoc.save()
    .then((result) => {
        console.log('product saved'); 
        res.location('/Beauty'+ result_id)
        .status(201)
        .json({id: result._id, uri: result.uri})

    })
  .catch((error)=> {
    res.status(412).json({ status: 'fail', message: 'not created' })
  }); 
  console.log('Promising to save');

}

function deleteProduct (id) {
    console.log(`removing beauty product ${products[id].name}`)

    if (id < products.length) {
        products.splice(id, 1);
        return products;
    }
    else{
        return false;
    }

    };

export default {createProduct, deleteProduct, readProducts, readProduct}
