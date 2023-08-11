const DB = require('../../config/database');

const AddCatergory = (req, res) => {
  const category = req.body.category;

  let filename = 'null'; // Default filename if no file is uploaded

  if (req.files && req.files.length > 0) {
    filename = req.files[0].filename;
  }

  if(!category){
    return res.status(400).send('Category name is required.');
  }else{
    const query = `INSERT INTO catergory (catergory_name, catergory_file) VALUES ('${category}', '${filename}')`;

  DB.connection.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error adding category.');
    }
    
    res.send('Category added successfully.');
  });

  }

  
};

module.exports = AddCatergory;
