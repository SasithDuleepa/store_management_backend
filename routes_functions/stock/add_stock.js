const DB = require('../../config/database');

const AddStock = async(req,res) =>{
    console.log(req.body);
    const {catergory,item_name,stock_qty,taking_price,selling_price,batch_no,exp_date,location,supplier,date} = req.body;

    if(item_name){
        const query = `INSERT INTO stock
         (item_name,catergory,stock_qty,taking_price,selling_price,batch_no,expire_date,location,available_qty,vendor,date)
          VALUES ('${item_name}','${catergory}',${stock_qty},'${taking_price}','${selling_price}','${batch_no}','${exp_date}','${location}',${stock_qty},'${supplier}','${date}')`;
          DB.connection.query(query,(err,result)=>{
            if(result){
                res.send({
                    status:200,
                    message:"Stock Added Successfully"
                })
            }else{
                console.log(err);
            }
            
          })
          }
        }
    


        
module.exports = AddStock;