const express = require('express')
require('dotenv').config()
const cors = require('cors')

// Db connection
require('./config/db.js')

// questions Routes
const questionsAnswersRoutes = require('./routes/questionsAnswers')

// user Routes
const userRoutes = require('./routes/users')

// search Routes
const searchRoutes = require('./routes/search')

const app = express()
const port = process.env.PORT || 4000

// cors middleware
app.use(cors())

// body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// route middleware
app.use('/qna', questionsAnswersRoutes)
app.use('/users', userRoutes)
app.use('/search', searchRoutes)


app.get('/test', (req, res)=>{
    res.json({'test':'test the rest service'})
})

// error handling middleware
app.use((err, req, res, next)=>{
    res.status(500).json({
        error: true,
        message: err.message,
        data: null,
    })
})

app.listen(port, ()=>{
    console.log('listening on port ', port);
})
