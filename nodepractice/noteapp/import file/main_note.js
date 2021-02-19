// call another file to use in main file, than assign call file to average
// average, because file that were calling holds a function that 
// calculates average
const average = require('./supplement_file.js');

//create array grade, will be used to pass in the file we called
const grade = [99, 98, 95, 93, 88, 75];

/* pass in array grade to the file we called above. the file we have called
has a function that calculates the average , average will be calculated than 
will be passed back with a value and than the value will be assigned to avg*/
const avg = average(grade);

// log value to console
console.log(avg);