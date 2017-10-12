var mongoose = require('mongoose')

var schema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String
}, {
  timestamps: true
})

var User = mongoose.model('User', schema)

module.exports = User
