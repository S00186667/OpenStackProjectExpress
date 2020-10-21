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
    products.push (product);
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
