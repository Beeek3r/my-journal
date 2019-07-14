const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next) {
  // Get token from the header
  const token = req.header('auth-token')

  // Check to see if they have auth token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }

  // Verifty the auth token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'))
    req.user = decoded.user
    next()
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' })
  }
}
