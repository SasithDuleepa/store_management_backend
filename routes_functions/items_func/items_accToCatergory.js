const DB = require('../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');

const ItemAccCatergory = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.catergory_id;
    console.log(parameter)
   

    if(parameter){
        const query = `SELECT * FROM stock_manage.item WHERE catergory_name = '${parameter}'`; 
        DB.connection.query(query, (err, result) => {
            if(result){
                res.send(result)
            }else{
                console.log(err)
            
            }
    })
    }
}

module.exports = ItemAccCatergory;