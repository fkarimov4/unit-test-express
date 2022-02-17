const app = require('./index')
const http = require('http')

const server = http.createServer(app)

const PORT = 8001

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})