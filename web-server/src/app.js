const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '..', '/public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Configure Express and set paths
app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
    message: 'Help Page',
    title: 'Help Page',
    name: 'Colin'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Sunny',
    location: 'Tampa'
  })
})

app.get('/help/*', (req, res) => {
  res.render('error', {
    errorMessage: 'Help article not found',
    name: 'Colin',
    title: 'Help Page'
  })
})

app.get('*', (req, res) => {
  res.render('error', {
    errorMessage: 'Page not found',
    name: 'Colin',
    title: 'Error'
  })
})

app.listen(3000, () => console.log('server is up on port 3000')) 