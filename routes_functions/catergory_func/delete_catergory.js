const DB = require('../../config/database');
const fs = require('fs');
const url = require('url')
const querystring = require('querystring');

const Deletecatergory = (req,res) =>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.catergoryId;
    console.log(parameter)
    
    if(parameter){
        const query = `SELECT catergory_file FROM catergory WHERE catergory_id = '${parameter}'`;
        DB.connection.query(query, (err, result) => {
            if(result){
                let file = null;
                file = result[0].catergory_file
                if(!file||file === null || file === undefined|| file === 'undefined' || file === "" || file==='null')
                {
                    const deletequery = `DELETE FROM catergory WHERE catergory_id = '${parameter}'`;
                    
                DB.connection.query(deletequery, (err, result) => {
                    if(result){
                        // console.log('file deleted')
                        res.status(200).send("file deleted")
                    }else{
                        // console.log(err)
                        res.status(400).send("file not deleted")
                    }
                })
                    res.send("No file")
                console.log('no file')
            }else if(file){
                const filePath = `./uploads/catergory/${file}`;
                fs.unlink(filePath, (err) => {
                    if (err) {
                      console.error('Error deleting the file:', err);
                     
                    } else {
                      console.log('File deleted successfully.');
                    }
                  }
                  );
                  const deletequery = `DELETE FROM catergory WHERE catergory_id = '${parameter}'`;
                  
                DB.connection.query(deletequery, (err, result) => {
                    if(result){
                        console.log('file deleted')
                    }else{
                        console.log(err)
                    }
                }
                )
                res.send("file deleted")
            }
            }
        
                else{
                console.log(err)
            }
        }
        )
    }else{
        res.status(404).send("no catergory id")
    
    }
 



}






module.exports = Deletecatergory;

