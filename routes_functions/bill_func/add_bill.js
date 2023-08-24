const DB = require('../../config/database');

const AddBill = (req, res) => {
    const billData = req.body.bill_data;
    const {bill_items} = req.body.billitem_data;


    const { bill_id, customer_name, customer_email,date, payment_date,total_amount } = req.body.bill_data;

    if (bill_id && customer_name && customer_email && total_amount) {
        const insertBillQuery = `INSERT INTO bill (bill_id,customer_name, email, total_amount, date,payment_date) VALUES ('${bill_id}','${customer_name}', '${customer_email}', '${total_amount}', '${date}','${payment_date}')`;

        DB.connection.query(insertBillQuery, (billErr, billResult) => {
            if (billErr) {
                console.log(billErr);
                return res.status(500).json({ error: 'Failed to add bill' });
            }

            console.log('Bill inserted:', billResult);

            bill_items.forEach((element) => {
                const insertItemQuery = `INSERT INTO bill_items (bill_id, item, qty, item_price, total) VALUES ('${bill_id}', '${element.item_name}', '${element.item_qty}', '${element.selling_price}', '${element.totalprice}')`;

                DB.connection.query(insertItemQuery, (itemErr, itemResult) => {
                    if (itemErr) {
                        console.log(itemErr);
                    } else {
                        console.log('Item inserted:', itemResult);
                    }
                });
            });

            res.status(200).json({ message: 'Bill and items added successfully' });
        });
    } else {
        res.status(400).json({ error: 'Invalid bill data' });
    }
};

module.exports = AddBill;
