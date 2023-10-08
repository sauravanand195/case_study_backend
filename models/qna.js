const mongoose = require("mongoose");

const questionsAnswersSchema = new mongoose.Schema({
  candidateName: {
    required: true,
    type: String,
    minlength: 3,
    maxlength: 100,
  },
  department: {
    required: true,
    type: String,
  },
  clientName: {
    required: true,
    type: String,
    minlength: 3,
    maxlength: 100,
  },
  technology: {
    required: true,
    type: String,
  },
  questions: [
    {
      question: {
        required: true,
        type: String,
        minlength: 3,
        maxlength: 100,
      },
      answer: {
        type: String,
      },
      difficultyLevel: {
        required: true,
        type: String,
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
});

questionsAnswersSchema.index({'question':'text'})
module.exports = mongoose.model("questions_answers", questionsAnswersSchema);
