const DB = require('../../config/database');

const AllVendors = (req, res) => {
    const query = `SELECT * FROM vendor`;
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

module.exports = AllVendors;