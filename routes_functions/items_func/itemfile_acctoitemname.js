const path = require('path');
const url = require('url')
const querystring = require('querystring');
const DB = require('../../config/database');

const GetFile = async(req,res)=>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.ItemName;
    console.log(queryParams)
    if(parameter){
        const query = `SELECT item_file FROM item WHERE item_name = '${parameter}'`;
        DB.connection.query(query, (err, result) => {
            if(result){
                let file = null;
                file = result[0].item_file
                if(!file||file === null || file === undefined|| file === 'undefined' || file === "" || file==='null')
                {res.send("No file")
                console.log('no file')
            }else if(file){
                res.sendFile(path.join(__dirname, `../../uploads/items/${file}`))
            }

            }else{
                console.log(err)
            }
        })
    }





// }
}
module.exports = GetFile;