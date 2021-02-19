/*our function that will calculate the average of array grades
that is called in from the main folder  */
function average(grades) {
    let total = 0;
    let avg = 0;
    let count = 0;

    for (let grade = 0; grade < grades.length; grade++) {
        total = total + grades[grade];
        cont = count++;
    }

    avg = total / count;
    return avg;
}

// this is used to return a value to the main file where our code is at
// and is a link between file to pass in and out values neccesary
module.exports = average;