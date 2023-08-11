const path = require('path');
const url = require('url')
const querystring = require('querystring');



const GetFile = async (req, res) => {

    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.CatergoryFile;

    
    if(parameter == null || parameter == undefined || parameter === "" || parameter==='null')
    {
        res.send("No file")
    }else{
        console.log(parameter)
        res.sendFile(path.join(__dirname, `../../uploads/${parameter}`))
    }
   


}

module.exports = GetFile;