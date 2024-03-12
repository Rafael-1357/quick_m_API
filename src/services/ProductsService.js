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
  insertSale: (user, products, totalSale, dataSale, payment_method) => {
    return new Promise ((accept, reject) => {
      db.query('INSERT INTO sales (iduser, products, totalsale, datesale, payment_method) VALUES (?, ?, ?, ?, ?)', [user, JSON.stringify(products), totalSale, dataSale, payment_method], (error, results) => {
        if(error) {reject(error); return;}
        accept(results);
      });
    });
  }
}