const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//Import Routes
const authRoute = require('./routes/auth')
const appointmentRoute = require('./routes/appointment')
const postsRoute = require('./posts')

dotenv.config()

//connect to db
mongoose.connect('mongodb+srv://'+process.env.CREATOR+':'+process.env.PASSWORD+'@cluster0.dnnhc.mongodb.net/'+process.env.DB_NAME+'?retryWrites=true&w=majority',
  {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('we are connected to MongoDb!')
  })

//Middleware
app.use(express.json())
app.use(cors())

//Route Middlewares
app.use('/api/user', authRoute)

app.use('/api/appointments', appointmentRoute)
app.use('/api/posts', postsRoute)

app.listen(process.env.PORT || 8000, () => {
  console.log('server listening!')
})