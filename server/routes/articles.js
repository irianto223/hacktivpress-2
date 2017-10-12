var express = require('express')
var router = express.Router()
var articleController = require('../controllers/articles')

router.post('/', articleController.createArticle)

module.exports = router
