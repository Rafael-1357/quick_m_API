const db = require('../db');

module.exports = {
  getUsers: () => {
    return new Promise ((accept, reject) => {
      db.query('SELECT iduser, username, role FROM users', (error, results) => {
        if(error) {reject(error); return;}
        accept(results);
      });
    });
  },
  authUser: (user) => {
    return new Promise ((accept, reject) => {
      db.query('SELECT iduser, username, password, role FROM users WHERE username = ?', [user], (error, results) => {
        if(error) {reject(error); return;}
        accept(results);
      });
    });
  }
}