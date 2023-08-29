const DB = require('../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');


const StoreItemAccCatergory = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.catergory_id;
    console.log('parameter'+parameter)

    if(parameter){
        
        const query = `SELECT * FROM stock WHERE catergory = '${parameter}'  AND available_qty > 0`;
        // const query = `SELECT *  FROM item JOIN stock ON item.item_id = stock.item_id  WHERE item.catergory_name = ${parameter};`


        
        DB.connection.query(query, (err, result) => {
            if(result){
                res.send(result)
                console.log(result)
            }else{
                console.log(err)
            }
        



    })
    


}
}

module.exports = StoreItemAccCatergory;