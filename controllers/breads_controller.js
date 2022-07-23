const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

breads.get('/', (req, res) => {
    res.send('Bread')
})

module.exports = breads