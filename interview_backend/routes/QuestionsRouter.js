const Router = require("express").Router;
const QuestionController = require('../controllers/QuestionController')

const router = new Router();

router.post("/add-new-question", QuestionController.addNewQuestion);

module.exports = router;
