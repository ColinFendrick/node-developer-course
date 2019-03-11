const yargs = require('yargs');

const { addNote, removeNote, listNotes, readNote } = require('./notes');

// add, remove, read, list
const title = {
  describe: 'Note title',
  demandOption: true,
  type: 'string'
};

const body = {
  describe: 'Note body',
  demandOption: true,
  type: 'string'
}

// Create add command
yargs.command({ 
  command: 'add',
  describe: 'Add a new note',
  builder: { title, body },
  handler: ({ title, body }) => addNote(title, body)
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: { title },
  handler: ({ title }) => removeNote(title)
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: () => listNotes()
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: { title },
  handler: ({ title }) => readNote(title)
});

yargs.parse();
