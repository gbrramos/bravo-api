
import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

require('./routes/currency.routes.ts')(app);

app.listen(PORT, () => {
    console.log(`API runnning on PORT ${PORT}`);
});
