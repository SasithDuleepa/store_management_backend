const DB = require('../../config/database');
var jwt = require('jsonwebtoken');



const Login = (req,res  )=>{
   
    
    const{name,password} = req.body;
    if(name==='' || password===''){
        res.status(400).send('Please fill all the fields');
    }else if(name!=='' || password!==''){
        if(name==='admin' && password==='admin'){}
        else {
            const query = `SELECT * FROM user WHERE user_name = '${name}' AND user_password = '${password}'`;
            DB.connection.query(query, (err, result) => {
                if(result){
                    // res.status(200).send(result);
                    
                    if(result.length>0){
                        // res.status(200).send(result);
                        console.log(result)
                        const user_role = result[0].user_role;
                        const user = result[0].user_name;
                        const token = jwt.sign({user_role, user}, 'secret', {expiresIn: '1h'});
                        console.log(token)
                        res.send({
                            status:200,
                            login: true,
                            token: token,
                            user_role: user_role,
                            user: user
                        });
                    }
                    else if(result.length===0){
                        console.log('not found user')
                        res.send({status:400,message: 'Invalid credentials'});
                    }
                }
                
                else{
                    console.log(err);
                     
                    res.status(500).send('Error');
                }
            })
        }
    }
        
    
}


const Token =( user_role, user) => {
    const token = jwt.sign({user_role, user}, 'secret', {expiresIn: '1h'});
    
    return token;

}
module.exports = Login;