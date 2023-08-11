const express = require('express');
require('dotenv').config()
const cors = require('cors');

const DB = require('./config/database');
const CatergoryRouts = require('./routes/ctergoryRoutes');

const app = express();

DB.connect()

app.use(cors({origin: 'http://localhost:3000',}));

app.use(express.json());

app.use('/', CatergoryRouts);

app.listen( process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);

})