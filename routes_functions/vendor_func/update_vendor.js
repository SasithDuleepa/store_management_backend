const DB = require('../../config/database');

const Update = (req, res) => {
    console.log(req.body)
    const query = `UPDATE vendor SET vendor_name='${req.body.Name}',vendor_address='${req.body.address}',vendor_email='${req.body.email}',vendor_contact_no='${req.body.ContactNo}',vendor_nic='${req.body.nic}' WHERE
    vendor_id=${req.body.id}`;
    DB.connection.query(query, (err, result) => {
        if (result) {
            res.send({ status: 200, message: 'Vendor Updated' });
        } else {
            console.log(err);
            res.send({ status: 500, message: 'internal Error' });
        }
    

}
    );
    
}


module.exports = Update;