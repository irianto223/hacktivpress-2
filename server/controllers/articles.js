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

var getAll = (req, res) => {
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

var getOne = (req, res) => {
  Article.findOne({
    _id: req.params.id
  })
  .populate('author')
  .then(dataArticle => {
    res.send({
      message: 'data found',
      data: dataArticle
    })
  })
  .catch(err => res.send(err))
}

var getByAuthor = (req, res) => {
  let decoded = jwt.verify(req.headers.token, 'satekambing')

  Article.find({
    author: decoded._id
  })
  .populate('author')
  .then(dataArticles => {
    res.send({
      message: 'data found',
      data: dataArticles
    })
  })
  .catch(err => res.send(err))
}

var getByCategory = (req, res) => {
  Article.find({
    category: req.params.category
  })
  .populate('author')
  .then(dataArticles => {
    res.send({
      message: 'data found',
      data: dataArticles
    })
  })
  .catch(err => res.send(err))
}

var remove = (req, res) => {
  Article.remove({
    _id: req.params.id
  })
  .then(() => {
    res.send({
      message: 'data removed'
    })
  })
  .catch(err => res.send(err))
}

module.exports = {
  createArticle,
  getAll,
  getOne,
  getByAuthor,
  getByCategory,
  remove
}
