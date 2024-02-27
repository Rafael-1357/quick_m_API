const UsersService = require('../services/UsersService');

module.exports = {
  getUsers: async (req, res) => {
    let data = {error:'', results:[]}
    let users = await UsersService.getUsers();

    console.log(users)

    users.forEach(element => {
      data.results.push({
        id: element.iduser,
        name: element.username,
        role: element.role
      });
    });

    res.json(data);
  }
}