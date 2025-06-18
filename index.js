// import modules
require('dotenv').config()
const express = require('express')
const cors = require('cors')
// Global variables
const PORT = process.env.PORT || 8000
const corsOptions= {
    origin:process.env.CORS_ORIGIN || 'localhost',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    Credential:true,
    

}

// main app definition
const app  = express()
// Global middleware
app.use(cors())
