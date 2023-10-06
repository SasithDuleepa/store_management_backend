const DB = require('../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');


const StoreItemSearch = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.item_name;
    // console.log('parameter'+parameter)

    if(parameter){
        
        const query = `SELECT * FROM stock WHERE item_name LIKE '%${parameter}%'`;
        // const query = `SELECT *  FROM item JOIN stock ON item.item_id = stock.item_id  WHERE item.catergory_name = ${parameter};
        DB.connection.query(query, (err, result) => {
            if(result){
                res.send(result)
                // console.log(result)
            }else{
                console.log(err)
            }
        



    })
    


    }else if(!parameter || parameter===''){
        const query = `SELECT * FROM stock `;
       
        DB.connection.query(query, (err, result) => {
            if(result){
                res.send(result)
                // console.log(result)
            }else{
                console.log(err)
            }
    })
}
}
module.exports = StoreItemSearch;