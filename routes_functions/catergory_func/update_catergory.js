const DB = require('../../config/database');
const fs = require('fs');

const UpdateCatergory = async(req,res) =>{
    // console.log(req.body)
    const{id, category,file}=req.body
    // console.log(id, category, file)
    let _id = id;
    let newcatergory = category;
    let existcatergory = '';
    let newfilename = 'null';
    let existfilename = file;

  if (req.files && req.files.length > 0) {
    newfilename = req.files[0].filename;
    console.log(newfilename)
    //get exist filename
    const file_quey = `SELECT catergory_file FROM catergory WHERE catergory_id=${_id};`
    DB.connection.query(file_quey,(err,result)=>{
        if(result){
            const exist_file = result[0].catergory_file;
            const filePath = `./uploads/${exist_file}`;
            deleteFile(filePath)

            //update
            const query = `UPDATE catergory SET catergory_name='${newcatergory}',catergory_file='${newfilename}' WHERE catergory_id=${_id}`;
            DB.connection.query(query,(err,result)=>{
              if(result){
                  res.status(200).json({message:"Catergory Updated" })
                  // console.log(result)
              }else{
                  res.status(404).send("no catergory updated")
              }
          })


        }else{}
    })
    
    
    
  }else if(existfilename){
    console.log(existfilename)
    const query = `UPDATE catergory SET catergory_name='${newcatergory}',catergory_file='${existfilename}' WHERE catergory_id=${_id}`;
    DB.connection.query(query,(err,result)=>{
      if(result){
          res.status(200).json({message:"Catergory Updated" })
          // console.log(result)
      }else{
        console.log(err)
          res.status(404).send("no catergory updated")
      
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

module.exports = UpdateCatergory;