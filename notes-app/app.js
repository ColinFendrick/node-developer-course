const validator = require('validator');
const { getNotes } = require('./notes');

console.log(getNotes());

console.log(validator.isEmail('@example.com'));
