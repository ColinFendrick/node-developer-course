const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('This is my error')
    // resolve([1, 4])
  }, 2000)
})

doWorkPromise
  .then(res => console.log(res))
  .catch(err => console.log(err))