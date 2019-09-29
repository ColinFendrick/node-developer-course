const weatherForm = document.querySelector('form')
const searchForm = document.querySelector('input')
const messageOne = document.querySelector()
const messageTwo = document.querySelector()

weatherForm.addEventListener('submit', e => {
  e.preventDefault()
  fetch(`http://localhost:3000/weather?address=${searchForm.value.replace(/[^a-zA-Z ]/g, "")}`).then(res => {
    res.json().then(data => {
      if (data.error) {
        console.log(data.error)
      } else {
        console.log(data.location)
        console.log(data.forecast)
      }
    })
  })
})