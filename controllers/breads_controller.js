const express = require('express')
const nodemon = require('nodemon')
const breads = express.Router()
const Bread = require('../models/bread.js')

//INDEX
breads.get('/', async(req,res) => {
  Bread.find()
    .then(foundBreads => {
      res.render('index', {
        breads: foundBreads,
        title: 'Index Page'
      })
    })
})

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// EDIT
breads.get('/:id/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.id],
    index: req.params.id
  })
})

// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
  .then(foundBread => {
    res.render('show', {
      bread: foundBread
    })
  })
  .catch(err => {
    res.send('404')
  })
})

// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = 'https://kawaiitherapy.com/wp-content/uploads/2021/05/Bread-Jumbo-Plush.jpg'
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})

// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new:true })
  .then(updatedBread => {
    console.log(updatedBread)
    res.redirect(`/breads/${req.params.id}`)
  })
})

//DELETE
breads.delete('/:id', (req, res)=> {
  Bread.findByIdAndDelete(req.params.id)
  .then(deletedBread => {
    res.status(303).redirect('/breads')
  })
})

module.exports = breads