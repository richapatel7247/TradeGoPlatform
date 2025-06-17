const {Schema} = require("mongoose");

const orderSchema = new Schema({
    name : String,
    qty : Number,
    price : Number,
    node : String,
});

module.exports = {orderSchema};