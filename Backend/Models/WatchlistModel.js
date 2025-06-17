const {model} = require("mongoose");
const {watchlistSchema} = require("../Schemas/WatchlistSchema");

const watchlistModel = new model("watchlist", watchlistSchema);

module.exports = {watchlistModel};