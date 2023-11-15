const controller: any = {};

controller.currency = (req: any, res: any) => {
    let request = req.query;

    if(!request.from) {
        request.from = "USD";
    }

    res.send(request);
}

module.exports = controller;