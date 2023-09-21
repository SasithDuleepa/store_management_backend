const express = require('express');

const Login = require('../routes_functions/login/login');

const router = express.Router();

router.post('/', Login)

module.exports = router;