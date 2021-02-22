const fs = require('fs');

// read from file

//when reading directly from the file we get binary garbage that we dont understand
// this garbage is known as buffer
const location_data_buffer = fs.readFileSync('location.json');
//we change the buffer to string so it can be readable to us, than assign locationData
const location_data = location_data_buffer.toString();
//we parse the locationData so we can access individual information stored
// location.json has its own object, so we must parse in order to access elements of objects
const json_data = JSON.parse(location_data);
// now we can print information invidually since it is already parsed
console.log(json_data.city); // print edinburg
console.log(json_data.country); // print US