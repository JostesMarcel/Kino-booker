const express = require('express')
const cors = require('cors')

const PORT = 9000
const app = express()

app.use(cors())

app.use((req, _, next) => {
    console.log('new request', req.method, req.url);
    next()
})

app.listen(PORT, () => console.log("Server listening on Port", PORT))