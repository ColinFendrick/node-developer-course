const path = require('path')
const express = require('express')

const app = express()
app.use(express.static(path.join(__dirname, '..', '/public')))

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Sunny',
    location: 'Tampa'
  })
})

app.listen(3000, () => console.log('server is up on port 3000')) 