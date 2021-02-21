// we installed yargs package to help with input
// call yargs
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
yargs.command({
    command: `remove`,
    describe: `remove notes`,
    handler: function() {
        console.log(`remove note`)
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

//moved to the bottom because program would not function correctly other wise
console.log(yargs.argv);