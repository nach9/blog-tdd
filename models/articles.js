var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connection.openUri('mongodb://localhost/blog-test');

var articleSchema = new Schema({
  title: String,
  content: String,
  author:{ type: Schema.Types.ObjectId, ref: 'User' },
  created_at: Date,
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
