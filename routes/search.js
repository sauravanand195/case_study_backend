const express = require("express");
const router = express.Router();

const searchController = require("../controllers/search");

// router.get('/questionanswer',questionController.getAllQuestions);
router.post("/search-data", searchController.getSearchData);

module.exports = router;
