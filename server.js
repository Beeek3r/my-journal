// Imports
const express = require('express')
const app = express()
const connectDB = require('./config/db')
const path = require('path')

// Route Imports
const auth = require('./routes/auth')
const users = require('./routes/users')
const journals = require('./routes/journals')

// PORT
const PORT = process.env.PORT || 6000

// Connect To The Database
connectDB()

// Initialize Middleware (Old Body Parser)
app.use(express.json({ extended: false }))

// Defining Routes
app.use('/api/auth', auth)
app.use('/api/users', users)
app.use('/api/journals', journals)

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // Set Static folder
//   app.use(express.static('client/build'))

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client, build, index.html'))
//   })
// }

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}




// Listening for connections on the specified host and port
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
