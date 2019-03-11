const yargs = require('yargs');

const { getNotes, addNote } = require('./notes');

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
  handler: function ({ title, body }) { 
    addNote(title, body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () { console.log('Removing the note'); }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function () { console.log('List the note'); }
});

// Create list command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () { console.log('Read the note'); }
});

yargs.parse();
