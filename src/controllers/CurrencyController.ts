const Exchange = require('../services/ExchangeService');

const controller: any = {};

controller.currency = async (req: any, res: any) => {
    let request = req.query;

    if(!request.from) {
        request.from = "USD";
    }

    const api = await Exchange.list();

    console.log(api)


    res.send(request);
}

module.exports = controller;