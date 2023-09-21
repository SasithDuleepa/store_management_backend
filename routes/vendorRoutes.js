const express = require('express');

const AddVenders = require('./../routes_functions/vendor_func/add_vendor');

const router = express.Router();


router.post('/',AddVenders);

module.exports = router;