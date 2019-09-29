const weatherForm = document.querySelector('form')
const searchForm = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit', e => {
  e.preventDefault()

  messageOne.textContent = 'Rendering'
  messageTwo.textContent = ''
  fetch(`/weather?address=${searchForm.value.replace(/[^a-zA-Z ]/g, '')}`).then(res => {
    res.json().then(data => {
      if (data.error) {
        console.log(data.error)
        messageOne.textContent = data.error.toString()
      } else {
        console.log(data.location)
        console.log(data.forecast)
        messageOne.textContent = data.location.toString()
        messageTwo.textContent = data.forecast.toString()
      }
    })
  })
})