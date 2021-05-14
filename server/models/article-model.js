const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Article title is required']
  },
  content: {
    type: String,
    required: [true, 'Article content is required']
  }
});

module.exports = mongoose.model('Article', articleSchema);

// const Article = mongoose.model('Article', articleSchema);

// Article.find(function (err, articles) {
//   if (err) {
//     console.log(err)
//   } else {
//     mongoose.connection.close();
//     // articles.forEach(article => console.log(article.title));
//     app.get('/', (req, res) => {
//       res.send(`${articles}`);
//     });
//   }
// });