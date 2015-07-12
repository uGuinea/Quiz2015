var express = require('express');
var router = express.Router();

var quizController = require("../controllers/quiz_controller");
var creditsontroller = require("../controllers/credits_controller");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz2015' });
});

router.get('/quizes/question',quizController.question);
router.get('/quizes/answer',quizController.answer);

router.get("/author",creditsontroller.author);


module.exports = router;
