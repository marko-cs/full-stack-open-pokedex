const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

// Just comment for testing 
// One line more
app.get('/health', (req, res) => {
  res.send('ok')
})