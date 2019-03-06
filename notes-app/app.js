const fs = require('fs');

fs.writeFileSync('notes.txt', 'Introduction text');
fs.appendFileSync('notes.txt', '\n\n Something else');
