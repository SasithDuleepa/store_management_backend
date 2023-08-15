const DB = require('../../config/database');


const AllStockitems =async (req, res) => {
    const query = `SELECT * FROM stock_manage.stock`;
    DB.connection.query(query, (err, result) => {
        if(result){
            res.send(result)
        }else{
            console.log(err)
        }
    
})
}

module.exports = AllStockitems;