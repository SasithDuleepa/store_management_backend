const DB = require('../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');

const DeleteCustomer = (req,res)=>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.id;
    console.log(parameter)

    if(parameter){
        const query = `DELETE FROM customer WHERE customer_id = ${parameter}`;
        DB.connection.query(query, (err, result) => {
            if(result){
                res.send("Customer deleted")
            }else{
                console.log(err)
            }
        })
    }
    
}


module.exports = DeleteCustomer;    