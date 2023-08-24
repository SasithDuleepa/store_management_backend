const express = require('express');

const AddStock = require('./../routes_functions/stock/add_stock');
const AllStockitems =require('./../routes_functions/stock/getall_stockitems');
const StoreItemAccCatergory = require('./../routes_functions/stock/stockitems_accToCatergory');
const UpdateStockItem = require('./../routes_functions/stock/update_stockitem');
const DeleteStockItem = require('./../routes_functions/stock/delete_stockitem');

const router = express.Router();

router.post('/', AddStock);

router.get('/', AllStockitems);

router.get('/AccToCatergory', StoreItemAccCatergory);

router.put('/', UpdateStockItem)

router.delete('/', DeleteStockItem)

module.exports = router;