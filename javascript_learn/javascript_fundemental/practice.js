


console.log("values and variables");
var num1 = 1;
let num2 = 2; 
const num3 = 3;
num4 = 4; 

console.log(`num1 = ${num1}, num2 = ${num2}, num3 = ${num3}, num4 = ${num4}`); 



/////////////////// objects //////////////////////////
// order does not matter
// can assign names to the value 

///// how to create an object
const Leo = {
    firstname: 'leonardo',
    lastname: 'cortes',
    age: 2022 - 1998,
    job: 'trucker',
    freinds:['Amber', 'Santi', 'Chewy']//array in object
};

////retrieve information from the objects 
//bracket notation
console.log(Leo['firstname']);
//dot notation
console.log(Leo.firstname);

//prompt user what information they would like to access
const InterestedIn = prompt(`what information would you like to know about?
                choose between firstname, lastname, age, job, 
                or freinds`);

// if user response does not exist let the user know that they entered invalid 
// if user entered value that exist a truthy value will be returned, else its a
// falsey value
if(Leo[InterestedIn])
{
    console.log(Leo[InterestedIn]);
}else
{
    console.log ('wrong request!!! wrong input')
}

/*
//// how to add new elements to the object
Leo.location = 'Edinburg';
Leo['youtube'] = 'Leo Maze';

console.log(Leo);// print Leo object
*/