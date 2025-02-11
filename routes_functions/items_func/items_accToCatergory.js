const DB = require('../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');

const ItemAccCatergory = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.catergory_id;
    // console.log(parameter)
   

    if(parameter){
        const query = `SELECT item.*,catergory.catergory_name
        FROM item
        INNER JOIN catergory ON item.catergory_id = catergory.catergory_id
        WHERE catergory.catergory_name = '${parameter}'`; 
        DB.connection.query(query, (err, result) => {
            if(result){
                console.log("eee")
                res.send(result)
            }else{
                console.log(err)
            
            }
    })
    }
}

module.exports = ItemAccCatergory;