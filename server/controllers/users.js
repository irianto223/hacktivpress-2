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
  .catch(err => res.send(err))
}

var login = (req, res) => {
  User.findOne({
    username: req.body.username
  })
  .then(dataUser => {
    if (dataUser != null) {
      let loginStatus = bcrypt.compareSync(req.body.password, dataUser.password)
      if (loginStatus) {
        let token = jwt.sign({
          _id: dataUser.id,
          username: dataUser.username
        }, 'satekambing')

        res.send({
          message: 'login success',
          token: token,
          data: {
            _id: dataUser._id,
            username: dataUser.username
          }
        })
      } else {
        res.send({
          message: 'password wrong',
          data: null
        })
      }
    } else {
      res.send({
        message: 'username not found',
        data: dataUser
      })
    }
  })
  .catch(err => res.send(err))
}

module.exports = {
  register,
  login
}
