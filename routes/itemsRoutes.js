const express = require('express');
const  path = require('path');

const AddItem = require('./../routes_functions/items_func/add_item');
const UploadFile = require('./../middleware/multer/item/addItem');
const GetAll = require('./../routes_functions/items_func/getall_item');
const GetFile  = require('./../routes_functions/items_func/getfile_item');
const UpdateItem = require('./../routes_functions/items_func/update_item');
const ItemAccCatergory = require('./../routes_functions/items_func/items_accToCatergory');



const router = express.Router();


router.use(express.static(path.join((__dirname, "uploads/items"))));


router.post('/',UploadFile.array('file'), AddItem);

router.get('/', GetAll);

router.get('/file', GetFile);

router.put('/update',UploadFile.array('file'), UpdateItem);

router.get('/accToCatergory', ItemAccCatergory);

module.exports = router;