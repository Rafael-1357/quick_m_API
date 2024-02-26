const db = require('../db');

module.exports = {
  getUsers: () => {
    return new Promise ((accept, reject) => {
      db.query('SELECT iduser, username FROM users', (error, results) => {
        if(error) {reject(error); return;}
        accept(results);
      });
    });
  }
}