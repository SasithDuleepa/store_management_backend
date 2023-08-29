const path = require('path');
const url = require('url')
const querystring = require('querystring');
const DB = require('../../config/database');
const Bill_items =(req,res)=>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.billId;
    console.log(parameter)

    const query = `SELECT * FROM bill_items WHERE bill_id = '${parameter}'`;
    DB.connection.query(query, (err, result) => {
        if(result){
            res.send(result)
            console.log(result)
        }else{
            console.log(err)
        }
    })
}

module.exports = Bill_items;