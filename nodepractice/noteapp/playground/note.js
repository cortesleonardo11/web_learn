// used to read and write to file system
const fs = require('fs');


//add note and see if it already exist
// first get the parsed string from readnote() read note reads the file and parses the info
// than we test if title provitdede in add Note alreaty exist in parsed information
// if there is already an existing title in the information, our duplicate info will not be 0
// if the lengh of duplicate filter is zero add new info to the parsed info
// if legth is not zero that means there is duplicate information and we must not add into file
// print title already exist if this is true 
const addNote = function(title, body) {
        const parsed_note = readNote();
        const duplicate_filter = parsed_note.filter(function(note_1by1) {
                return note_1by1.title === title
            })
            //console.log(duplicate_filter)
        if (duplicate_filter.length === 0) {

            parsed_note.push({
                title: title,
                body: body
            })
            writeNote(parsed_note);
        } else {
            console.log('this title already exist')
        }

    }
    //write to note.json
    //first turn note into string verion of json
    // tnan write string version of json to note.json
    //than log note created
const writeNote = function(note) {
    const string_of_note = JSON.stringify(note);
    fs.writeFileSync('note.json', string_of_note);
    console.log('note created')
}

//read from note.json
// turn info read from note.json into string so it can be readable
// parse the readable information to access indivitual info
// if any error occurs return an empty string
const readNote = function() {
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
    addnote: addNote
}