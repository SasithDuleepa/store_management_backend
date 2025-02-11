const DB = require('../../config/database');

const AddItem = async(req,res) =>{
    
    const{item_name,categoryId}= req.body;
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

    if(!item_name|| !categoryId){
        return res.status(400).send('Category item_name is required.');
    }else{
        const query= `INSERT INTO item   (item_name, catergory_id,item_file) VALUES ('${item_name}', '${categoryId}', '${ItemFileName}')`;
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