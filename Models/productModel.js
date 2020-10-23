import mongoose from 'mongoose'; 

const Schema = mongoose.Schema; 


const ProductSchema = new Schema(
    {
        Name:{type: String, required: true}, 
        Category:{type: String, required: true}, 
        Brand: { type: String, required:true}, 
        Price:{type:Number, required:true}

    }, 
    {toJSON:{virtuals:true}}
)


ProductSchema.virtual('uri').get(function(){
    return `/Beauty/${this._id}`; 
}); 

let Product = mongoose.model('Product',ProductSchema); 

export{ Product }