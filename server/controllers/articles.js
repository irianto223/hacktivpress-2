var Article = require('../models/Article')
var jwt = require('jsonwebtoken')

var createArticle = (req, res) => {
  let decoded = jwt.verify(req.headers.token, 'satekambing')

  Article.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: decoded._id
  })
  .then(dataArticle => {
    res.send({
      message: 'data created',
      data: dataArticle
    })
  })
  .catch(err => res.send(err))
}

var getAllArticles = (req, res) => {
  Article.find()
  .populate('author')
  .then(dataArticles => {
    res.send({
      message: 'data found',
      data: dataArticles
    })
  })
  .catch(err => res.send(err))
}

module.exports = {
  createArticle,
  getAllArticles
}
