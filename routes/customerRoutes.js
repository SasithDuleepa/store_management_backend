const express = require('express');

const AddCustomer = require('./../routes_functions/customer/addCustomer');
const GetAllCustomers = require('./../routes_functions/customer/getAllCustomers');
const UpdateCustomer = require('./../routes_functions/customer/update_customer');
const DeleteCustomer = require('./../routes_functions/customer/delete_customer');
const SearchCustomer = require('./../routes_functions/customer/searchCustomer');

const router = express.Router();


router.post('/',AddCustomer);

router.get('/',GetAllCustomers);

router.put('/',UpdateCustomer);

router.delete('/',DeleteCustomer);

module.exports = router;