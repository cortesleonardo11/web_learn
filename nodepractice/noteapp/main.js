// we installed yargs package to help with input
// call yargs
const { argv } = require("yargs");
const yargs = require(`yargs`);

// how we would originally get itput in terminal
//console.log(process.argv[2]);

//using yargs to get terminal input 
//yargs will parse the package for me 
// node main.js add title:'things to buy'
//console.log(yargs.argv);// this is moved to the bottom

//node main.js --help to get help menu with args

// from here we build our command line to run commands

yargs.version('1.1.0');

//add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: function() {
        console.log(`adding note`);
    }
})

// remove command
// terminal type (node main.js remove --title="mytitle")
// if you terminal type (node main.js remove) a list will pop out saying title is missing
// with body (nodu main.js remove --title="mytitle" -- body="my body")
yargs.command({
    command: `remove`,
    describe: `remove notes`,
    builder: {
        title: {
            describe: 'note title',
            demandOption: true, //have to add for command to perform
            type: 'string' //will prove that we always have a string type for title
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log(`Title: ` + argv.title)
        console.log('body: ' + argv.body)
    }
})

//read
yargs.command({
    command: 'read',
    describe: 'read from notes',
    handler: function() {
        console.log('read notes');
    }
})

//list
yargs.command({
    command: 'list',
    describe: 'list ',
    handler: function() {
        console.log('list out');
    }
})

// prints what yargs parses
//console.log(yargs.argv);

// already know yargs is parsed
yargs.parse();