const express = require('express');

const AddUser = require('./../routes_functions/user/addUser');


const router = express.Router();


router.post('/', AddUser);


module.exports = router;