const DB = require('../../config/database');


const GetBill = (req, res) => {
    const query = `SELECT * FROM bill`;
    DB.connection.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Failed to get bill' });
        } else if(result) {
            res.status(200).json({ result });
        }
    })
}

module.exports= GetBill;