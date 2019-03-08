const chalk = require('chalk');

const getNotes = () => console.log(chalk.inverse.bold.red('Error'));

module.exports = { getNotes };
