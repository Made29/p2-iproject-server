const { Watchlist } = require("../models")
const axios = require('axios');

class Controller{
    static async watchlist (req, res, next){
        const { stock } = req.params
        try{
            const UserId = req.user.id
            const stockList = await Watchlist.create({ UserId, stock })
            res.status(201).json({
                id: stockList.id,
                UserId: stockList.UserId,
                stock: stockList.stock
            })
        }catch(error){
            next(error)
        }
    }

    static async stockWatchlist (req, res, next){
        try{
            const watchlist = await Watchlist.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                order: [["stock", "ASC"]]
            })
            res.send(watchlist)
        }catch(error){
            next(error)
        }
    }

    static async stock (req, res, next){
        try{
            const apiData = await axios.get("https://indonesia-stock-exchange.vercel.app/api")
            res.send(apiData.data)
        }catch(error){
            next(error)
        }
    }

    static async delete (req, res, next){
        const { id } = req.params
        try{
            const findData = await Watchlist.findByPk(id)
            if(!findData){
                throw new Error("USER_NOT_FOUND")
            }

            const data = await Watchlist.destroy({ where: { id: findData.id } })
            res.status(200).json({ message: `success delete stock from watchlist`  })
        }catch(error){
            next(error)
        }
    }
}

module.exports = Controller