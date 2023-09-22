const express = require('express');

const AddVenders = require('./../routes_functions/vendor_func/add_vendor');
const AllVendors = require('./../routes_functions/vendor_func/all_vendors');
const Update = require('./../routes_functions/vendor_func/update_vendor');

const router = express.Router();


router.post('/add',AddVenders);
router.get('/all',AllVendors);  
router.put('/update',Update)

module.exports = router;