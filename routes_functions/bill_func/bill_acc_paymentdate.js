const path = require('path');
const url = require('url')
const querystring = require('querystring');
const DB = require('../../config/database');

const Bill_paymentdate = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.payment_date;
    console.log(parameter)

    const query = `SELECT * FROM bill WHERE payment_date = '${parameter}'`;
    DB.connection.query(query, (err, result) => {
        if (result) {
            res.send(result)
            console.log(result)
        } else {
            console.log(err)
        }
    })


}


module.exports = Bill_paymentdate;