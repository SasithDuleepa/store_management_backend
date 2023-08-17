const DB = require('../../config/database');

const UpdateCustomer = (req,res)=>{
    console.log(req.body)
    const{CustomerId,CustomerName,CustomerAddress,CustomerEmail,CustomerContactNo,CustomerNIC}= req.body;

    if(CustomerId){
        const query = `UPDATE customer SET customer_name='${CustomerName}',customer_address='${CustomerAddress}',customer_email='${CustomerEmail}',customer_contact_no='${CustomerContactNo}',customer_NIC='${CustomerNIC}' WHERE customer_id='${CustomerId}'`;
        DB.connection.query(query, (err, result) => {
            if(result){
                res.status(200).send(result);
            }else{
                res.status(500).send('Error');
            }
        
        })
    }
    

}


module.exports= UpdateCustomer;