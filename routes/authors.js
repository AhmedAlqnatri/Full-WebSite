const express = require('express')
const router = express.Router()

// ALL Authors Route
router.get('/', (req, res) => {
  res.render('authors/index')
})

// New Author Route diplaying the form
router.get('/new', (req, res) => {
    res.render('authors/new')
  })
// Create the new Author Route
router.post('/', (req, res) => {
    res.send('Create')
  })
module.exports = router