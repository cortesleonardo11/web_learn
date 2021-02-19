//we are learning how to use files in node js
// here we open file
function openfile() {
    // this lets us use the file system    
    const fs = require('fs');

    //if not created this will create a new file system and 
    // display message. if file already exist than this 
    // will replace message in the file
    fs.writeFileSync('notes.txt', 'my name is leo');
    //fs.appendFileSync('notes.txt', 'this is additional info');
}
openfile();

// add information to the file without changing it
function addToFile() {
    const fs = require(`fs`);

    //adds message to the text file without deleting the
    // message already in text file
    fs.appendFileSync(`notes.txt`, `this is additional info`);
}
addToFile();