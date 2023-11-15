const currencyController = require('../controllers/CurrencyController.ts')
const { Router } = require('express');

const router = Router();

router.get('/', currencyController.currency)

 module.exports = (app: any) => app.use('/currency', router);
