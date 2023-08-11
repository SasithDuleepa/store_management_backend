const DB = require('../../config/database');

const GetCatergories = (req, res) => {
    const query = "SELECT * FROM catergory";

  DB.connection.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error getting categories.");
    }

    res.send(result);
  });

}

module.exports = GetCatergories;