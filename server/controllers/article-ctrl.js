const Article = require('../models/article-model');

createArticle = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.sendStatus(400).json({
      success: false,
      error: 'You must provide content'
    });
  }

  const article = new Article(body);

  if (!article) {
    return res.sendStatus(400).json({ success: false, error: err })
  }

  article
    .save()
    .then(() => {
      return res.sendStatus(201);
    })
    .catch(error => {
      return res.sendStatus(400).json({
        error,
        message: 'Article not created'
      })
    })
}

updateArticle = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.sendStatus(400).json({
      success: false,
      error: 'You must provide content to update'
    });
  }

  Article.findOne({ _id: req.params.id }, (err, article) => {
    if (err) {
      return res.sendStatus(404).json({
        err,
        message: 'Article not found'
      });
    }
    article.title = body.title;
    article.content = body.content;
    article
      .save()
      .then(() => {
        return res.sendStatus(200).json({
          success: true,
          id: article._id,
          message: 'Article updated'
        });
      })
      .catch(error => {
        return res.sendStatus(404).json({
          error,
          message: 'Article not updated'
        });
      });
  });
}

deleteArticle = async (req, res) => {
  await Article.findOneAndDelete({ _id: req.params.id }, (err, article) => {
    if (err) {
      return res.sendStatus(400).json({ success: false, error: err })
    }

    if (!article) {
      return res.sendStatus(404).json({
        success: false,
        error: 'Article not found'
      })
    }
    return res.sendStatus(200);
  }).catch(err => console.error(err));
}

getArticleById = async (req, res) => {
  await Article.findOne({ _id: req.params.id }, (err, article) => {
    if (err) {
      return res.sendStatus(400).json({ success: false, error: err });
    }
    if (!article) {
      return res.sendStatus(404).json({ success: false, error: 'Article not found' });
    }
    return res.send(article);
  }).catch(err => console.error(err));
}

getArticles = async (req, res) => {
  await Article.find({}, (err, articles) => {
    if (err) {
      return res.sendStatus(400).json({ success: false, error: err });
    }
    if (!articles.length) {
      return res.sendStatus(404).json({ success: false, error: 'Article not found' });
    }
    return res.send(articles);
  }).catch(err => console.error(err));
}

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle,
  getArticles,
  getArticleById
}