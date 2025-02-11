const DB = require('../../config/database');

const SearchCustomer = (req,res)=>{
    console.log(req)
    const query = `SELECT * FROM customer`;
    // DB.connection.query(query, (err, result) => {
    //     if(result){
    //         res.status(200).send(result);
    //     }else{
    //         res.status(500).send('Error');
    //     }
    // })

}

module.exports = SearchCustomer; 