import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    product_id : String,
    product_name: String,
    lead_time:Number,
    weight_gsm:Number,
    quantity:Number,
    price_rs:Number,
    buyer_name:String
})
export default mongoose.model('buyers', cardSchema);