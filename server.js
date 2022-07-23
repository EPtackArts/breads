const express = require('express')
require('dotenv').config()

let PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about breads!')
})

const breadsController = require("./controllers/breads_controller.js")
app.use('/breads', breadsController)

app.route('/search', (req,res) => {
    console.log(req.query)
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})