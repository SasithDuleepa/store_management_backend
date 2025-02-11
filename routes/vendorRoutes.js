const express = require('express');

const AddVenders = require('./../routes_functions/vendor_func/add_vendor');
const AllVendors = require('./../routes_functions/vendor_func/all_vendors');
const Update = require('./../routes_functions/vendor_func/update_vendor');
const SearchVendors = require('./../routes_functions/vendor_func/searchVendor');

const router = express.Router();


router.post('/add',AddVenders);
router.get('/all',AllVendors);  
router.put('/update',Update);
router.get('/search/:name', SearchVendors);

module.exports = router;