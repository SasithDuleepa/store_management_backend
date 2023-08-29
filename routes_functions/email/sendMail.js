const nodemailer = require('nodemailer');
const path = require('path');
const url = require('url')
const querystring = require('querystring');
const DB = require('../../config/database');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    service: 'hotmail', // Use a supported email service or provide SMTP details
    auth: {
        user: 'node-123-123-123@outlook.com',
        pass: 'Node123123'
    }
});

// // Define email options
// let mailOptions = {
//     from: 'node-123-123-123@outlook.com',
//     to: 'duleepajayathissa@gmail.com',
//     subject: 'Hello from Node.js',
//     text: 'This is a test email sent from Node.js.'
// };





const SendMail = (req, res) => {
    let billData = [];
    const{ subject,text,selectedItems} = req.body
    if(selectedItems.length === 0){
        res.send('No items selected')
    }else if(selectedItems.length === 1){
        const query_1 = `SELECT * FROM bill WHERE id = '${selectedItems[0]}'`;
        DB.connection.query(query_1, (err, result) => {
            if (result) {
                res.send(result)
                console.log(result)
                let mailOptions = {
                    from: 'node-123-123-123@outlook.com',
                    to: `${result[0].email}`,
                    subject: ` ${subject}     `,
                    html: 

            `
    <p>Hello ${result[0].customer_name},</p>
    <p>This is a friendly reminder about your pending payment of <b>$ ${result[0].total_amount}</b>  for your recent purchase from our shop.</p>
    <p>Your payment is due on ${result[0].payment_date}. Please ensure to make the payment by that date to avoid any inconvenience.</p>
    <p>Here are the details of your purchase:</p>
    <ul>
        <li>Bill ID: ${result[0].bill_id}</li>
        <li>Items Bought Date: ${result[0].date}</li>
    </ul>
    <p>Thank you for shopping with us!</p>
    <p>Best regards,<br>Your Shop Team</p>
`
                };
                                        // Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});


            } else {
                console.log(err)
            }
        })
    }else if(selectedItems.length > 1){
        selectedItems.forEach((element)=>{
            const query_2 = `SELECT * FROM bill WHERE id = '${element}'`;
            DB.connection.query(query_2, (err, result) => {
                if (result) {
                    // res.send(result)
                    
                    billData = billData.concat(result)
                    console.log(billData)
                    billData.forEach((billelement)=>{
                        console.log(billelement.email)
                        let mailOptions = {
                            from: 'node-123-123-123@outlook.com',
                            to: `${billelement.email}`,
                            subject: ` ${subject}     `,
                            html: 

            `
    <p>Hello ${billelement.customer_name},</p>
    <p>${text}</p>
    <ul>
        <li>Bill ID: ${billelement.bill_id}</li>
        <li>cutomer name: ${billelement.customer_name}</li>
        <li>customer email: ${billelement.email}</li>
        <li>sell date: ${billelement.date}</li>
        <li>bill amount : ${billelement.total_amount}</li>
        <li>payment date: ${billelement.payment_date}</li>
    </ul>
    
    
    <p>Thank you for shopping with us!</p>
    <p>Best regards,<br>Your Shop Team</p>
`
                        };
                        console.log(subject)

                        // Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});


                    })

                } else {
                    console.log(err)
                }
            })
        }
        )
    } 
    
    
}

module.exports = SendMail;