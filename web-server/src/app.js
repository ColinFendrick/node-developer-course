const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '..', '/public')))


app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Colin'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Colin'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    message: 'Help here'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Sunny',
    location: 'Tampa'
  })
})

app.listen(3000, () => console.log('server is up on port 3000')) 