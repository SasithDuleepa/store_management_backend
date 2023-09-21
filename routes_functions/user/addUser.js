const DB = require('../../config/database');

const AddUser = (req,res)=>{
    console.log(req.body);
    const {user_name,user_role,user_email,user_password} = req.body;

    if(user_name==='' || user_role==='' || user_password===''){
        res.status(400).send('Please fill all the fields');
    }else{
        const query = `INSERT INTO user (user_name,user_role,user_email,user_password) VALUES ('${user_name}','${user_role}','${user_email}','${user_password}')`;
        DB.connection.query(query, (err, result) => {
            if(result){
                res.status(200).send(result);
            }else{
                console.log(err);
                
                res.status(500).send('Error');
            }
        })
    }


}






module.exports = AddUser;