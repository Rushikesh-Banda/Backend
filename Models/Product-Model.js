import { Schema, model } from "mongoose";

// Create product schema
const productSchema = new Schema({
    productname:{
        type:String,
        required:[true,"Product name is required"],
        minLength:[3,"Minimum length should be 3 characters"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"],
    
    }
})

// Create product model
export default model('product', productSchema)
