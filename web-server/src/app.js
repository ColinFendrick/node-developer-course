const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '..', '/public')
const viewsPath = path.join(__dirname, '../templates')

// Configure Express and set paths
app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Define routes
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