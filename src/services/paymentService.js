const db = require('../db');

module.exports = {
  getPaymentMethod: () => {
    return new Promise((accept, reject) => {
      db.query('SELECT idpayment_method, payment_method FROM payment_method', (error, results) => {
        if (error) { reject(error); return; }
        accept(results);
      });
    });
  }
}