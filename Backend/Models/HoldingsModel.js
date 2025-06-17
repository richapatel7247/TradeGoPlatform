const {model} = require("mongoose");
const {holdingsSchema} = require("../Schemas/HoldingsSchema");

const holdingsModel = new model("holding", holdingsSchema);

module.exports = {holdingsModel};