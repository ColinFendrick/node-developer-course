const curry = (fn, ...args) =>
  fn.length <= args.length ? fn(...args) : (...more) => curry(fn, ...args, ...more)

const volume = (l, w, h) => console.log(l*w*h)
const curried = curry(volume)
curried(2)(3)(4)
