const express = require('express');
const  path = require('path');

const AddCatergory = require('../routes_functions/catergory_func/add_catergory');
const UploadFile = require('../middleware/multer/catergory/addCatergory');
const GetFile = require('../routes_functions/catergory_func/getfile_catergory');
const GetCatergories = require('../routes_functions/catergory_func/getall_catergory');
const UpdateCatergory = require('../routes_functions/catergory_func/update_catergory');
const Deletecatergory = require('../routes_functions/catergory_func/delete_catergory');

const router = express.Router();

router.use(express.static(path.join((__dirname, "uploads"))));

router.post('/',UploadFile.array('file'), AddCatergory);

router.get('/', GetCatergories);

router.get('/file', GetFile);

router.put('/',UploadFile.array('file'), UpdateCatergory);

router.delete('/', Deletecatergory)


module.exports = router;