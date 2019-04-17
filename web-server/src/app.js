const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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
  if (!req.query.address) {
    return res.send({ error: 'Address must be provided' })
  }

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error })
      }

      res.send({
        forecast: forecastData,
        location,
        address: req.query.address
      })
    })
  })
})

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    })
  }

  res.send({
    products: []
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