const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => console.log('Success');

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(({ title: existingTitle }) => existingTitle === title);

  if (duplicateNotes.length === 0) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.bold.inverse('\nNew note added'));
  } else {
    console.log(chalk.red.bold('\nNote title already taken'));
  }
};

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString());
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => fs.writeFileSync('notes.json', JSON.stringify(notes));

module.exports = { getNotes, addNote };
