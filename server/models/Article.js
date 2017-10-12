var mongoose = require('mongoose')

var schema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
}, {
  timestamps: true
})

var Article = mongoose.model('Article', schema)

module.exports = Article
