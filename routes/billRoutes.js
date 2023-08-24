const express = require('express');


const AddBill = require('../routes_functions/bill_func/add_bill');


const router = express.Router();


router.post('/',AddBill);


module.exports = router