const express = require('express');


const AddBill = require('../routes_functions/bill_func/add_bill');
const GetBill = require('../routes_functions/bill_func/get_all');
const BillItemsAccBill = require('../routes_functions/bill_func/billitems_acc_billid');
const BillAccPaymentDate = require('../routes_functions/bill_func/bill_acc_paymentdate');




const router = express.Router();


router.post('/',AddBill);
router.get('/',GetBill)
router.get('/billitems',BillItemsAccBill)
router.get('/billaccpaymentdate',BillAccPaymentDate)

module.exports = router