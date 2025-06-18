const express = require('express')
const cors = require('cors')
const corsOptions = {
    origin: process.env.CORS_ORIGIN || ['http://localhost:3000'],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 204, // for legacy browser support
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type', 'Authorization']
}
const app = express()
// Global middleware
app.use(cors(corsOptions))  
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// routes
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API',
        status: 'success'
    })
})

module.exports = app