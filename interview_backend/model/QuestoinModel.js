const { Schema, model } = require("mongoose");

const QuestionSchema = new Schema({
  category: { type: String },
  lang: { type: String },
  answer: { type: String },
  question: { type: String }
});

module.exports = model("Question", QuestionSchema);
