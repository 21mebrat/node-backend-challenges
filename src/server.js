require('dotenv').config()
const app = require('./app')

const PORT = process.env.PORT || 8000
const http = require('http')
const server = http.createServer(app)

// start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// handle error events
server.on('error',(error)=>{
    console.error(`Error occurred: ${error.message}`);
    process.exit(1);
})
// proper shutdown
process.on('SIGINT', () => {
    console.log('Received SIGINT. Shutting down gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});