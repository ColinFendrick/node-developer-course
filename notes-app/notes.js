const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body)  => {
  const notes = loadNotes();
  const duplicateNote = notes.find(({ title: existingTitle }) => existingTitle === title);

  if (!duplicateNote) {
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

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.yellow('Your notes:'))
  notes.forEach(({ title, body }) => console.log(`${title}: ${body}`))
};

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString());
  } catch (e) {
    return [];
  }
};

const readNote = title => {
  const note = loadNotes().find(({ title: existingTitle }) => title === existingTitle);

  if (note) {
    console.log(`${chalk.green(note.title)}: ${note.body}`);
  } else {
    console.log(chalk.red.bold(`No note with title: ${title} found`));
  };
};

const saveNotes = notes => fs.writeFileSync('notes.json', JSON.stringify(notes));

module.exports = { addNote, removeNote, listNotes, readNote };
