// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = { longitude: 0, latitude: 0 };
//     callback(data);
//   }, 2000);
// };

// geocode('Philadelphia', data => {
//   console.log(data)
// });

const add = (integers, callback) => setTimeout(() => callback(integers.reduce((acc, cur) => acc + cur)), 2000)


add([1, 4, 11], sum => console.log(sum))