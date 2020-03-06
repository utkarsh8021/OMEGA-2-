const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const WishSchema = Schema({
    Email : String,
    Name : String,
    ContactNumber : Number,
    College : String,
    Payment : Boolean,
    Attended : Boolean,
    Qr:Number,
    PaymentId : Number,
    OrderId :Number
});

module.exports = mongoose.model("Registration",WishSchema)