const UsersService = require('../services/UsersService');

module.exports = {
  getUsers: async (req, res) => {
    let data = {error:'', results:[]}
    let users = await UsersService.getUsers();

    users.forEach(element => {
      data.results.push({
        id: element.iduser,
        name: element.username,
        role: element.role
      });
    });

    res.json(data);
  },
  authUser: async (req, res) => {
    let data = {error:'', results:[]}
    let consultResult = []
    let user = await UsersService.authUser(req.body.user);
    user.forEach(element => {
      consultResult.push({
        id: element.iduser,
        name: element.username,
        password: element.password,
        role: element.role
      });
    })

    if(req.body.user === consultResult[0].name && req.body.password === consultResult[0].password) {
      data.results.push({
        id: consultResult[0].id,
        name: consultResult[0].name,
        role: consultResult[0].role
      })
      res.json(data);
    } else {
      data.error = 'Credenciais incorretas'
      res.json(data);
    }
  }
}