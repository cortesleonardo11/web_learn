// used to read and write to file system
const fs = require('fs');
const chalk = require('chalk');


//add note and see if it already exist
// first get the parsed string from readnote() read note reads the file and parses the info
// than we test if title provitdede in add Note alreaty exist in parsed information
// if there is already an existing title in the information, our duplicate info will not be 0
// if the lengh of duplicate filter is zero add new info to the parsed info
// if legth is not zero that means there is duplicate information and we must not add into file
// print title already exist if this is true 
const addNote = (title, body) => {
    const parsed_note = readNote();
    const duplicate_filter = parsed_note.filter((note_1by1) => note_1by1.title === title)
    if (duplicate_filter.length === 0) {

        parsed_note.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse('note added'))
        writeNote(parsed_note);
    } else {
        console.log(chalk.inverse.red('this title already exist'))
    }

}


//load in the parsed info of notes.json
// filter so that only title that are not equal to the title  we want to remove are saved  
//the only result in the filtered array should be titles that we would want to keep
// pass the filtered array into writeNote to save the file
//if a note is removed log note removed with a green backround
// if a no note removed log no note found with a red backround
const removeNote = (title) => {
    const parsedFile = readNote();
    const noMatchingTitle = parsedFile.filter((file) => file.title != title)

    if (parsedFile.length === noMatchingTitle.length) {
        console.log(chalk.inverse.red('no note found'));
    } else {
        console.log(chalk.inverse.green('note removed'));
        writeNote(noMatchingTitle);
    }
}

//write to note.json
//first turn note into string verion of json
// tnan write string version of json to note.json
//than log note created
const writeNote = (note) => {
    const string_of_note = JSON.stringify(note);
    fs.writeFileSync('note.json', string_of_note);
    //console.log('note created')
}

//read from note.json
// turn info read from note.json into string so it can be readable
// parse the readable information to access indivitual info
// if any error occurs return an empty string
const readNote = () => {
    try {
        const note_buffer = fs.readFileSync('note.json');
        const note_data = note_buffer.toString();
        const parsed_data = JSON.parse(note_data);
        return parsed_data;
    } catch (e) {
        return [];
    }
}

// used to export our function 
module.exports = {
    addnote: addNote,
    removenote: removeNote
}