const DB = require('../../config/database');
const path = require('path');
const url = require('url')
const querystring = require('querystring');


const StoreItemAccCatergory = (req, res) => {
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.catergory;
    // console.log('parameter'+parameter)

    if(parameter){
        
        const query = `SELECT * FROM stock WHERE catergory = '${parameter}'`;

        
        DB.connection.query(query, (err, result) => {
            if(result){
                res.send(result)
                console.log('aaaa')
            }else{
                console.log(err)
            }
        



    })
    


}
}

module.exports = StoreItemAccCatergory;