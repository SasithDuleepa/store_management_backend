const express = require('express');
require('dotenv').config()
const cors = require('cors');
const bodyParser = require('body-parser');
const DB = require('./config/database');

const CatergoryRouts = require('./routes/catergoryRoutes');
const ItemRouts = require('./routes/itemsRoutes');
const StockRouts = require('./routes/stockRoutes');
const Customers = require('./routes/customerRoutes');
const Bills = require('./routes/billRoutes');
const Email = require('./routes/mailRoutes');
const UserRole = require('./routes/userRoleRoutes');
const User = require('./routes/userRoutes');
const Login = require('./routes/loginRoutes');
const Vendor = require('./routes/vendorRoutes');

const app = express();

DB.connect()
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: 'http://localhost:3000',}));

app.use(express.json());  

app.use('/', CatergoryRouts);
app.use('/items', ItemRouts)
app.use('/stock', StockRouts)
app.use('/customers', Customers)
app.use('/bills', Bills)
app.use('/email', Email)
app.use('/user_role', UserRole)
app.use('/user', User)
app.use('/login', Login)
app.use('/vendor', Vendor)

app.listen( process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);

})