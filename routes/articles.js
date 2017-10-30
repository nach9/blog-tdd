var express = require('express');
var router = express.Router();
var ArticleController = require('../controllers/ArticleController');

/* GET users listing. */

router.post('/', ArticleController.addNew  )

module.exports = router;
