const DB = require('../../config/database');

const UpdateStockItem = async (req,res) => {
    const {id,catergory,item_name,stock_qty,taking_price,selling_price,batch_no,exp_date,location,available_qty} = req.body;

    const query =`UPDATE stock SET item_name='${item_name}',stock_qty=${stock_qty},taking_price='${taking_price}',selling_price='${selling_price}',batch_no='${batch_no}',expire_date='${exp_date}',location='${location}',catergory='${catergory}',available_qty=${available_qty} WHERE stock_id=${id}`;
    DB.connection.query(query,(err,result)=>{
        if(result){
            res.status(200).send("Stock Item Updated");
        }else{
            res.status(400).send("Error in deleting file")
        }

    
}

    )
}
module.exports = UpdateStockItem;