const xendit = require("xendit-node")

class Controller {
    static async xendit(req, res, next) {
        try{
            const x = new xendit({
                secretKey: process.env.SECRET_XENDIT
            });
    
            const { Invoice } = x;
            const invoiceSpecificOptions = {};
            const i = new Invoice(invoiceSpecificOptions);
    
            const resp = await i.createInvoice({
                externalID: "TOPUP" + new Date(),
                amount: 100000,
                description: "Terima Kasih telah TOP UP",
                invoice_duration: 86400,
            });

            res.send(resp)
        }catch(error){
            console.log(error)
        }

    }
}

module.exports = Controller;
