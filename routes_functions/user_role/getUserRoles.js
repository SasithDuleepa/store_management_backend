const DB = require('../../config/database');

const GetAllUserRoles = (req,res)=>{
    const query = `SELECT * FROM user_role`;
    DB.connection.query(query, (err, result) => {
        if(result){
            res.status(200).send(result);
        }else{
            res.status(500).send('Error');
        }
    })

}

module.exports = GetAllUserRoles;