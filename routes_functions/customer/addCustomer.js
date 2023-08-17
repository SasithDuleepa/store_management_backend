const DB = require('../../config/database');


const AddCustomer = (req,res)=>{
    console.log(req.body)
    const{CustomerName,CustomerAddress,CustomerEmail,CustomerContactNo,CustomerNIC}=req.body;
    if(CustomerName&&CustomerAddress&&CustomerEmail&&CustomerContactNo&&CustomerNIC){
        const query = `INSERT INTO customer (customer_name,customer_email,customer_address,customer_contact_no,customer_NIC) VALUES ('${CustomerName}','${CustomerEmail}','${CustomerAddress}','${CustomerContactNo}','${CustomerNIC}')`;
        DB.connection.query(query, (err, result) => {
            if(result){
                
                res.status(200).send('Customer added successfully.');
            }else{
                res.status(500).send('Error');
            }
        })
    }else{
        //plese fill
        res.status(400).send('Please fill all the fields');
    }
}

module.exports = AddCustomer;