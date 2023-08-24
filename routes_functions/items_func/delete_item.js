const DB = require('../../config/database');
const fs = require('fs');
const url = require('url')
const querystring = require('querystring');

const DeleteItem = (req, res) =>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.itemId;

    console.log(parameter)

    if(parameter){
        const query = `SELECT item_file FROM item WHERE item_id = '${parameter}'`;
        DB.connection.query(query, (err, result) => {
            if(result){
                let file = null;
                file = result[0].item_file
                if(!file||file === null || file === undefined|| file === 'undefined' || file === "" || file==='null')
                {
                    const deletequery = `DELETE FROM item WHERE item_id = '${parameter}'`;
                    
                DB.connection.query(deletequery, (err, result) => {
                    if(result){
                        // console.log('file deleted')
                        res.status(200).send("File deleted successfully")
                    }else{
                        // console.log(err)
                        res.status(400).send("Error in deleting file")
                    }
                })
                    
                // console.log('no file')
            }else if(file){
                const filePath = `./uploads/items/${file}`;
                fs.unlink(filePath, (err) => {
                    if (err) {
                      console.error('Error deleting the file:', err);
                     
                    } else {
                      console.log('File deleted successfully.');
                    }
                  });
                res.send("File deleted successfully")

                const deletequery = `DELETE FROM item WHERE item_id = '${parameter}'`;
                DB.connection.query(deletequery, (err, result) => {
                    if(result){
                        console.log('file deleted')
                    }else{
                        console.log(err)
                    }
                })
            
             
            }else{
                console.log(err)
            }
    }})
    }


}


module.exports = DeleteItem;