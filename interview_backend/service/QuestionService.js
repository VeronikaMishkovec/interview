const QuestionModel = require('../model/QuestoinModel')
class QuestionService {
  async addNewQuestion(category, lang, answer, question) {
    const newQuestion = await QuestionModel.create({
      category,
      lang,
      answer,
      question
    });
    return newQuestion;
  }
}

module.exports = new QuestionService();
