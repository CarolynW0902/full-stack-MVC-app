//to-do - Declare Variables
const express = require("express");
const app = express()
const PORT = 8000
const mongoose = require("mongoose")


   //import function/routes
  const connectDB = require('./config/dataBase')
  const homeRoutes = require('./routes/home')
  const editRoutes = require('./routes/edit')

  require('dotenv').config({path: './config/.env'})

//to-do - connect to database
connectDB()

//to-do - set middleware
app.set("view engine", "ejs")
app.set(express.static("public"))
app.use(express.urlencoded({extended: true}))

//to-do - set routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)

//to-do - start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))