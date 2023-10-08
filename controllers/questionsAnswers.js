const qna = require("../models/qna");

// const getAllQuestionsAnswers = async (req, res, next) => {
//   try {
//     const questionsAnswers = await qna.find().lean();
//     res.json({
//       error: false,
//       message: "",
//       data: questionsAnswers,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

const addQuestions = async (req, res, next) => {
  const { candidateName, department, clientName, technology, questions } = req.body;
  console.log(candidateName);
  try {
    await qna.insertMany([
      {
        candidateName,
        department,
        clientName,
        technology,
        questions,
      },
    ]);
    res.json({
      error: false,
      message: "Questions Added Successfully",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};


module.exports = {
  addQuestions,
};
