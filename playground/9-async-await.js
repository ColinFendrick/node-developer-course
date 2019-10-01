const add = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('ONLY POSITIVE NUMBERS ALLOWED YOU FOOL')
      }

      resolve(a + b)
    }, 2000)
  })

const doWork = async () => {
  const sum = await add(1, 9)
  return await add(sum, 47)
}

// const doWork = async (...args) => args.reduce((acc, curr) => await add(add, curr))

doWork(1, 2, 3).then(res => console.log('result:', res))
  .catch(e => console.log(e))
