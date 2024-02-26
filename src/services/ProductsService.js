const db = require('../db');

module.exports = {
  getProducts: () => {
    return new Promise ((accept, reject) => {
      db.query('SELECT * FROM product', (error, results) => {
        if(error) {reject(error); return;}
        accept(results);
      });
    });
  }
}