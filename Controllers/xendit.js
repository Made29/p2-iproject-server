const xendit = require("xendit-node")
const axios = require('axios');

class Controller {
    static async xendit(req, res, next) {
        const { id } = req.params
        try{
            const apiData = await axios.get("https://indonesia-stock-exchange.vercel.app/api")
            
            const data = apiData.data.data

            const found = data.find(element => element.Id == id);

            const x = new xendit({
                secretKey: process.env.SECRET_XENDIT
            });
    
            const { Invoice } = x;
            const invoiceSpecificOptions = {};
            const i = new Invoice(invoiceSpecificOptions);
    
            const resp = await i.createInvoice({
                externalID: "TOPUP" + new Date(),
                amount: found.Last * 100,
                description: "Terima Kasih telah TOP UP",
                invoice_duration: 86400,
                successRedirectURL: "http://localhost:8000"
            });

            res.send(resp)
        }catch(error){
            next(error)
        }

    }
}

module.exports = Controller;
