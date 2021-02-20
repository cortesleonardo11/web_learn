// more of a modern way to do a for loop for newer version of java script
// for in readse out the objects of the array or object
// for of reads the actual element
function modern_for_loop() {
    const personInfoObject = {
        firstName: 'john',
        lastName: 'doe',
        DOB: '12/12/98',
        occupation: 'teacher'
    };
    // will print firstName lastName DOB occupation
    for (let info in personInfoObject) {
        console.log(info);
    }

    const grades = [88, 81, 73, 97];

    // print the object of the array
    // print 0 1 2 3
    for (let grade in grades) {
        console.log(grade);
    }

    // print the value of array
    // print 88 81 73 97
    for (let grade of grades) {
        console.log(grade);
    }
}
modern_for_loop();