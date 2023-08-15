const express = require('express');

const AddStock = require('./../routes_functions/stock/add_stock');
const AllStockitems =require('./../routes_functions/stock/getall_stockitems');
const StoreItemAccCatergory = require('./../routes_functions/stock/stockitems_accToCatergory');


const router = express.Router();

router.post('/', AddStock);

router.get('/', AllStockitems);

router.get('/AccToCatergory', StoreItemAccCatergory);


module.exports = router;