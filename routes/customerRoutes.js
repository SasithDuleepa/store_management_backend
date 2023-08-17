const express = require('express');

const AddCustomer = require('./../routes_functions/customer/addCustomer');
const GetAllCustomers = require('./../routes_functions/customer/getAllCustomers');


const router = express.Router();


router.post('/',AddCustomer);

router.get('/',GetAllCustomers);

module.exports = router;