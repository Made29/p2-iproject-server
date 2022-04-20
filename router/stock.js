const express = require("express")
const router = express.Router()
const Controller = require("../Controllers/stock")

router.get("/watchlist", Controller.stockWatchlist)

router.get("/stock", Controller.stock)

router.post("/watchlist/:stock", Controller.watchlist)

router.delete("/watchlist/delete/:id", Controller.delete)

module.exports = router 