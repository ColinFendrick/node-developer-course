fetch('http://localhost:3000/weather?address=boston').then(res => {
  res.json().then(data => {
    data.error ? console.log(data.error) : console.log(data.forecast)
  })
})
