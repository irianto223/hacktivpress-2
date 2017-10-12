var express = require('express')
var router = express.Router()
var articleController = require('../controllers/articles')

router.post('/', articleController.createArticle)
router.get('/', articleController.getAll)
router.get('/mine', articleController.getByAuthor)
router.get('/:category', articleController.getByCategory)
router.get('/:id', articleController.getOne)
router.delete('/:id', articleController.remove)
router.put('/:id', articleController.edit)

module.exports = router
