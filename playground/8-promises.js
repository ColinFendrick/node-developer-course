const add = (a, b) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  })
}

// add(1, 2)
//   .then(sum => console.log(sum))
//   .catch(e => console.log(e))

add(1, 2)
  .then(sum => add(sum, 4))
  .then(sum2 => add(sum2, 1))
  .then(sum3 => console.log(sum3))
  .catch(e => console.log(e))

