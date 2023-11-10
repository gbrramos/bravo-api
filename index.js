const express = require('express');
const CurrencyController = require('./src/controllers/CurrencyController')

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API runnning on PORT ${PORT}`);
});

app.get("/currency", CurrencyController.get);