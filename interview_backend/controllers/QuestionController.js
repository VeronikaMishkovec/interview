const QuestionService = require('../service/QuestionService')

class QuestionController {
  async addNewQuestion(req, res, next) {
    const { category, lang, answer, question } = req.body;
    try {
      const newQuestion = await QuestionService.addNewQuestion(category, lang, answer, question);
      return res.json(newQuestion);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new QuestionController()
