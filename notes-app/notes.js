const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body)  => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(({ title: existingTitle }) => existingTitle === title);

  if (duplicateNotes.length === 0) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.bold(`\nNew note\n title: ${title}\n body: ${body}\n added`));
  } else {
    console.log(chalk.red.bold(`\nNote with title ${title} already taken`));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const notesAfterRemoval = notes.filter(({ title: existingTitle }) => existingTitle !== title);
  if (notes.length > notesAfterRemoval.length) {
    console.log(chalk.cyan.bold(`Note title: ${title} removed.`));
    saveNotes(notesAfterRemoval);
  } else {
    console.log(chalk.red.bold(`No note with title: ${title} found.`))
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

module.exports = { addNote, removeNote };
