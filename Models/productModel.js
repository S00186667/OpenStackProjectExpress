import mongoose from 'mongoose'; 

const Schema = mongoose.Schema; 


const ProductSchema = new Schema(
    {
        name:{type: String, required: true}, 
        category:{type: String, required: true}, 
        brand: { type: String, required:true}, 
        price:{type:Number, required:true}, 
        id:{type:Number,required:true}

    }, 
    {toJSON:{virtuals:true}}
)


ProductSchema.virtual('uri').get(function(){
    return `/Beauty/${this._id}`; 
}); 

let Product = mongoose.model('Product',ProductSchema); 

export{ Product } 