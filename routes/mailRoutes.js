const express = require('express');
const  path = require('path');

const SendMail = require('./../routes_functions/email/sendMail')

const router = express.Router();

router.post('/',SendMail);  

module.exports = router;