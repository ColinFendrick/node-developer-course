const chalk = require('chalk');

const getNotes = () => console.log(chalk.inverse.bold.blue('Success'));

module.exports = { getNotes };
