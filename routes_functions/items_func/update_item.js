const DB = require('../../config/database');
const fs = require('fs');

const UpdateItem = async(req,res) =>{
  console.log('Received request:', req.body);
  const{id,item_name,catergory,file} = req.body;
  let _id = id;
  let newitem = item_name;
  let existitem = '';
  let newcatergory = catergory;
  let existcatergory = '';
  let newfilename = 'null';
  let existfilename = file; 

  if(req.files && req.files.length > 0){
    newfilename = req.files[0].filename;
    console.log(newfilename)
    
    const file_quey = `SELECT item_file FROM item WHERE item_id=${_id};`
    DB.connection.query(file_quey,(err,result)=>{
      if(result){
          const exist_file = result[0].item_file;
          const filePath = `./uploads/items/${exist_file}`;
          deleteFile(filePath)

          //update
          const query = `UPDATE item SET item_name='${newitem}',catergory='${newcatergory}',item_file='${newfilename}' WHERE item_id=${_id}`;
          DB.connection.query(query,(err,result)=>{
            if(result){
                res.status(200).json({message:"Item Updated" })
                // console.log(result)
            }else{
              console.log(err)
            }

        })


      }else{
        console.log(err)
      
      }
  })

  }else if(existfilename){
    const query = `UPDATE item SET item_name='${newitem}',catergory_name='${newcatergory}',item_file='${existfilename}' WHERE item_id=${_id}`;
    DB.connection.query(query,(err,result)=>{
      if(result){
          res.status(200).json({message:"Item Updated" })
          // console.log(result)
      }else{
        console.log(err)
      }
  })
  }
 

}

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting the file:', err);
     
    } else {
      console.log('File deleted successfully.');
    }
  });
}

module.exports = UpdateItem;