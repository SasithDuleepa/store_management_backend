const DB = require('../../config/database');

const AddVendor = (req, res) => {
    const{Name,address,email,ContactNo,nic}=req.body;
    if(Name==='' || address==='' || email==='' || ContactNo==='' || nic===''){
        ressend({status:400, message: 'Please fill all the fields'});
    }else{
        const query = `INSERT INTO vendor (vendor_name,vendor_address,vendor_email,vendor_contact_no,vendor_nic) VALUES ('${Name}','${address}','${email}','${ContactNo}','${nic}')`;
        DB.connection.query(query, (err, result) => {
            if(result){
                // res.status(200).send(result);
                console.log(result)
                res.send({status:200, message: 'Vendor Added'});
            }else{
                console.log(err);
                res.send({status:500, message: 'internal Error'});
            }
        }
        );
        
    }
    
}
    

    


module.exports = AddVendor;