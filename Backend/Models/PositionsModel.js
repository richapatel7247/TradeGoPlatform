const {model} = require("mongoose");
const {positionsSchema} = require("../Schemas/PositionsSchema");

const positionsModel = new model("position", positionsSchema);

module.exports = {positionsModel};