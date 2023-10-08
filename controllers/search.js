const qna = require("../models/qna");

// const searchQuestiondata = async (req, res, next) => {
//   const { technology, difficultyLevel, fromDate, todate, searchText } =
//     req.body;
//   console.log("body", req.body);
//   try {
//     await searchQuestions.insertMany([
//       {
//         technology,
//         difficultyLevel,
//         fromDate,
//         todate,
//         searchText,
//       },
//     ]);
//     res.json({
//       error: false,
//       message: "search successfully",
//       data:null /* {
//         technology,
//         difficultyLevel,
//         fromDate,
//         todate,
//         searchText,
//       } */,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

const getAllQuestion = async(req,res)=>{
    try{
        const questionDataList = await qna.find().lean();
        res.json({
            error:false,
            message:"",
            data:questionDataList,
        });
    }catch(err){
        next(err)
    }
};

const getSearchData = async (req,res)=>{
    const {technology,level,fromDate,toDate,search} = req.body
    console.log("search",search);
    try{
        const searchData = await qna.find({ "questions.question" : new RegExp(search,'i')}).lean();
        
        res.json({
            error:false,
            message:"",
            data:searchData,
        });
    }catch(err){
        next(err)
    }
}

module.exports = {
    getSearchData
};
