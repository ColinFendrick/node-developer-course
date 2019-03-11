const yargs = require('yargs');

const { addNote, removeNote, listNotes } = require('./notes');

// add, remove, read, list

// Create add command
yargs.command({ 
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: ({ title, body }) => addNote(title, body)
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: ({ title }) => removeNote(title)
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: () => listNotes()
});

// Create list command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () { console.log('Read the note'); }
});

yargs.parse();
