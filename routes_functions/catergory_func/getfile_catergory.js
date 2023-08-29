const path = require('path');
const url = require('url')
const querystring = require('querystring');



const GetFile = async (req, res) => {

    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.CatergoryFile;

    
    if(!parameter||parameter === null || parameter === undefined|| parameter === 'undefined' || parameter === "" || parameter==='null')
    {
        res.send("No file")
        // console.log('no filename found!!')
    }else{
        
        res.sendFile(path.join(__dirname, `../../uploads/catergory/${parameter}`))
        // console.log(queryParams)
    }
   


}

module.exports = GetFile;