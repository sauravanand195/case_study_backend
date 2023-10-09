const mongoose = require('mongoose')

const dbUrl = process.env.DATABASE_URL

module.exports.mongoConnection = mongoose.connect(dbUrl, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}, (err)=>{
    if(!err){
        console.log('Db connection is successfull');
    } else {
        console.log('Db connection failed');
    }
})
