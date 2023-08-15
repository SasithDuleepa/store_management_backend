const path = require('path');
const url = require('url')
const querystring = require('querystring');

const GetFile = async(req,res)=>{
    const urlString = req.url;
    const parsedUrl = url.parse(urlString);
    const queryParams = querystring.parse(parsedUrl.query);
    const parameter = queryParams.ItemFile;

    if(!parameter||parameter === null || parameter === undefined|| parameter === 'undefined' || parameter === "" || parameter==='null')
    {res.send("No file")
    console.log('no file')
}else{
    res.sendFile(path.join(__dirname, `../../uploads/items/${parameter}`))
}

}

module.exports = GetFile;