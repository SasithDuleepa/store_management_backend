const SearchCategory = async(req,res) =>{
    const {category} = req.params;
        console.log(req.params)
        const query = `SELECT * FROM catergory WHERE catergory_name LIKE '%${category}%'`;
        DB.connection.query(query, (err, result) => {
            if(result){
                res.status(200).send(result);
            }else{
                console.log(err);
                res.send({status:500, message: 'internal Error'});
            }
        
            }
        );
};
module.exports = SearchCategory;