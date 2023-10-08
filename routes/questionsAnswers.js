const express = require('express')
const router = express.Router()
const questionsAnswersController = require('../controllers/questionsAnswers')

// router.get('/questions-answers', questionsAnswersController.getAllQuestionsAnswers)

router.post('/add-questions-answers', questionsAnswersController.addQuestions)

module.exports = router
