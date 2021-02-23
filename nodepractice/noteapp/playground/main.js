const fs = require('fs');
const yargs = require('yargs');
const note = require('./note.js');

//the command will take in the add command from the terminal
// add will than need title and body so both info will be copied into node.json
//hadler will handle the title and body info, than pass it into add note sunciton in note.js
yargs.command({
    command: 'add',
    description: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        note.addnote(argv.title, argv.body);
    }
})

//console.log(yargs.argv);

//used to help parse the new information
yargs.parse();