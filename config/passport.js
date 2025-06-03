const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const users = []

module.exports = function (passport) {
  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    const user = users.find(user => user.email === email)
    if (!user) return done(null, false, { message: 'Користувача не знайдено' })

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err
      return isMatch ? done(null, user) : done(null, false, { message: 'Невірний пароль' })
    })
  }))

  passport.serializeUser((user, done) => done(null, user.email))

  passport.deserializeUser((email, done) => {
    const user = users.find(user => user.email === email)
    done(null, user)
  })

  module.exports.users = users
}
