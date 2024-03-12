import mongoose from "mongoose";
const gadgetSchema = mongoose.Schema({
    title: String,
    price: String,
    message: String,
    creator: String,
    imageUrl: String,
});
var Gadgets = mongoose.model("Gadgets", gadgetSchema);
export default Gadgets;
