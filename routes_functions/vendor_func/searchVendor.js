const DB = require('../../config/database');

const SearchVendors = (req, res) => {
    const {name} = req.params;
    console.log(req.params)
    const query = `SELECT * FROM vendor WHERE vendor_name LIKE '%${name}%'`;
    DB.connection.query(query, (err, result) => {
        if(result){
            res.status(200).send(result);
        }else{
            console.log(err);
            res.send({status:500, message: 'internal Error'});
        }
    
        }
    );
    
}

module.exports = SearchVendors;