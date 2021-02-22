// used to have ability to write file
const fs = require('fs')

// object location that has location from city to world
const location = {
    city: 'edinburg',
    couty: 'hidalgo',
    state: 'texas',
    country: 'US',
    continent: 'america',
    world: 'earth'
};

// create file system
//create object as a json string 
//than write the json string in the file location.json
const json_location = JSON.stringify(location);
fs.writeFileSync('location.json', json_location);