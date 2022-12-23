const express = require('express')
const app = express()
const cors = require('cors')
const configureDB = require('./config/database')
configureDB()
const router = require('./config/routes')
const port = 3050

app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(port, () => {
    console.log('listening on port', port)
})