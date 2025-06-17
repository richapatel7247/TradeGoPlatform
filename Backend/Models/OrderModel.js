const {model} = require("mongoose");
const {orderSchema} = require("../Schemas/OrderSchema");

const orderModel = new model("order", orderSchema);

module.exports = {orderModel};