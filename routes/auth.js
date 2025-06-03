const express = require('express')
const router = express.Router()
const passport = require('passport')
const bcrypt = require('bcryptjs')
const { users } = require('../config/passport')

// GET реєстрація
router.get('/register', (req, res) => res.render('register'))

// POST реєстрація
router.post('/register', async (req, res) => {
  const { email, password } = req.body
  const existing = users.find(u => u.email === email)
  if (existing) return res.send('Email вже використовується')

  const hashedPassword = await bcrypt.hash(password, 10)
  users.push({ email, password: hashedPassword })
  res.redirect('/login')
})

// GET логін
router.get('/login', (req, res) => res.render('login'))

// POST логін
router.post('/login', passport.authenticate('local', {
  successRedirect: '/protected',
  failureRedirect: '/login',
  failureFlash: true
}))

// GET вихід
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/login')
  })
})

module.exports = router
