const db = require('../db');

module.exports = {
  getProducts: () => {
    return new Promise ((accept, reject) => {
      db.query('SELECT * FROM product', (error, results) => {
        if(error) {reject(error); return;}
        accept(results);
      });
    });
  },
  insertSale: (user, products, totalSale, dataSale) => {
    return new Promise ((accept, reject) => {
      db.query('INSERT INTO sales (iduser, products, totalsale, datesale) VALUES (?, ?, ?, ?)', [user, JSON.stringify(products), totalSale, dataSale], (error, results) => {
        if(error) {reject(error); return;}
        accept(results);
      });
    });
  }
}