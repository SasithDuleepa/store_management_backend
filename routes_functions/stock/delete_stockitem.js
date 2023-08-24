const DB = require('../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');

const DeleteStockItem = async (req,res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.id;
    

    const query =`DELETE FROM stock WHERE stock_id=${parameter}`;
    DB.connection.query(query,(err,result)=>{
        if(result){
            res.status(200).send("Stock Item Deleted");
        }else{
            res.status(400).send("Error in deleting file")
        }


    }
    )
}

module.exports = DeleteStockItem;