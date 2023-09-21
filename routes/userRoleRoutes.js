const express = require('express');

const GetAllUserRoles = require('./../routes_functions/user_role/getUserRoles');


const router = express.Router();

router.get('/', GetAllUserRoles)


module.exports = router;