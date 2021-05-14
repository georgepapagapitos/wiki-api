const express = require('express');

const ArticleController = require('../controllers/article-ctrl');

const router = express.Router();

router.post('/article', ArticleController.createArticle);
router.put('/article/:id', ArticleController.updateArticle);
router.delete('/article/:id', ArticleController.deleteArticle);
router.get('/article/:id', ArticleController.getArticleById);
router.get('/articles', ArticleController.getArticles);

module.exports = router;