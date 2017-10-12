var User = require('../models/User')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')

var register = (req, res) => {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.password, salt);
  
  User.create({
    username: req.body.username,
    password: hash
  })
  .then(dataUser => {
    res.send({
      message: 'data created',
      data: dataUser
    })
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  register
}
