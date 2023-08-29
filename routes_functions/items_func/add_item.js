const DB = require('../../config/database');

const AddItem = (req,res) =>{
    
    const{item_name,catergory_name}= req.body;
    console.log(req.body)

    let ItemFileName = null;
    if(req.files && req.files.length > 0){
        ItemFileName = req.files[0].filename;
        console.log('file received!!')
    }
    
    else{
        // ItemFileName = item_file;
    console.log('file not received!!')
        
    }

    if(!item_name|| !catergory_name){
        return res.status(400).send('Category item_name is required.');
    }else{
        const query= `INSERT INTO item   (item_name, catergory_name,item_file) VALUES ('${item_name}', '${catergory_name}', '${ItemFileName}')`;
        DB.connection.query(query,(err,result)=>{
            if(result){
                res.status(200).send('Item added successfully.');
            }else{
                console.log(err)
            }
        })
    }
}

module.exports = AddItem;