const DB = require('../../config/database');

const GetAllCustomers = (req,res)=>{
    const query = `SELECT * FROM customer`;
    DB.connection.query(query, (err, result) => {
        if(result){
            res.status(200).send(result);
        }else{
            res.status(500).send('Error');
        }
    })

}

module.exports = GetAllCustomers;   