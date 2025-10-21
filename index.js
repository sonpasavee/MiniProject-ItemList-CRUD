const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path')

const app = express()
// router
const itemRouter = require('./routes/items')

// config 
app.set('view engine' , 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// connect to database
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/final_lab'
mongoose.connect(mongoURI).then(() => {
    console.log('Connect to MongoDB Success!')
}).catch((err) => {
    console.log(err)
})

app.use('/items' , itemRouter)

app.get('/' , (req , res) => {
    res.redirect('/items')
})

const PORT = process.env.PORT || 3000
app.listen(PORT , () => {
    console.log('Server listening on port : ' + PORT)
})