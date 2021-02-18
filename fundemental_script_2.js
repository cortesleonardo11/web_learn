// this will make debugging programs easier
// will alert when there is a syntax error
//always use from now on
'use strict';

// here we show an example of writing a function
// we can reuse code in functions and pass in values to use
function average(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
const avg = average(85, 91, 95);
console.log(`the average is ${avg}`);
/////////function declaration vs function expression//////////

// function declaration /
// built like any
function calc_age1(birthyear) {
    return 2037 - birthyear;
}
const age1 = calc_age1(1991);

// function expression

const calc_age2 = function(birthyear) {
    return 2037 - birthyear;
}
const age2 = calc_age2(1991);

console.log(age1, age2);
////////////////////////////////////////////////////////

//////// arrow function ///
// arrow functions work very well in one line function
const calc_age3 = birthyear => 2037 - birthyear;
const age3 = calc_age3;
console.log(age3);

// another example of a arrow function
const years_until_retirment = (birthyear, firstname) => {
    const age = 2037 - birthyear;
    const retirment = 65 - age;

    return `${firstname} retires in ${retirment} years`;
}

console.log(years_until_retirment(1998, 'leonardo'));

////////////////function inside of a function///////////

const cutpieces = function(fruit) {
    return fruit * 4;
}

const fuit_proccesor = function(apples, oranges) {
    const apple_pieces = cutpieces(apples);
    const orange_pieces = cutpieces(oranges);

    const juice = `juice with ${apple_pieces} pieces of 
    apple and ${orange_pieces} pieces of orange.`;
    return juice;
}

console.log(fuit_proccesor(2, 3));

///////////////////////////////////////////////////////////



///////////////////////ARRAYS///////////////////////

// we learn how to create an array
function array_maker() {
    const freinds = ['micheal', 'jay', 'amber', 'bob'];
    // print the whole list of freinds
    //prints micheal jay amber bob
    console.log(freinds);
    // will print jay
    console.log(freinds[1]);
    //will print the legth of array freind wich will print 4
    console.log(freinds.length);
    //will print length of array friend -1 wich is 3
    console.log(freinds[freinds.lengh - 1]);
    //change array amber to leo
    freinds[2] = 'leo';

    //another way to claim an array
    //const years = new array[1991, 1995, 1997, 2001];

    // you can put numbers and strings inside arrays
    // you can also add arrays inside arrays
    const first_name = 'garfield';
    const mix = [first_name, 'schneider', 2020 - 1998, freinds];
    console.log(mix);
}

array_maker();



////////////Basic array operations////////////////////////
function basic_array_operation() {

    const friends = ['bob', 'billy', 'marly'];

    // add element to end of array
    friends.push('charley');
    //will print bob billy marly charley
    console.log(friends);

    //add element to begging of array
    friends.unshift('john');
    // print john bob billy marly charley
    console.log(friends);

    //remove element from tne end of string
    friends.pop();
    //print john bob billy marly
    console.log(friends);

    // remove element from begging of array
    friends.shift();
    // print bob billy marly
    console.log(friends);

    //print position of the array specefide
    console.log(friends.indexOf('billy')); //print 1

    //will return true if element is in array
    console.log(friends.includes('bob')); // true
    console.log(friends.includes('mars')); //false

}

basic_array_operation();


////////////////introduction to objects//////////////

function objects_intro() {
    //we make an object named person info
    //person info contains first last name and other info
    const personInfo = {
        firstName: 'John',
        lastName: 'Doe',
        age: 2021 - 1977,
        job: 'coucelor',
        freinds: ['micheal', 'jay', 'fox']
    };

    //this is how we can call the function
    //theres two ways to call a objecdt
    console.log(personInfo.firstName); //print John
    console.log(personInfo[`firstName`]); //print Dou

    // anothes cool way of calling the object
    const namekey = 'Name';
    console.log(personInfo['first' + namekey]); //print John
    console.log(personInfo['last' + namekey]); //print Doe

    //ask the user what they are interested in and collecd
    // there response
    const interestedIn = prompt(`what do you want to 
    know about john? choose between: firstName,lastName,
    age,job, freinds`);

    /*variables can return truthy and falsey values, so 
    if persoInfo[interestedIn] exist than the if statement
    is true and will print correcd value. if whatever the
    user asked for is false thah the value will return a 
    falsey value*/
    if (personInfo[interestedIn]) {
        console.log(personInfo[interestedIn]);
    } else {
        console.log('wrong request, or request not found');
    }

    // how we can add to objects if we wanted to
    personInfo.location = 'mexico'; //add location
    personInfo[`address`] = `john.doe@gmail.com`; //add address
    console.log(personInfo);

    //challenge
    // john has 3 freinds, and his best freind is called micheal
    console.log(`${personInfo.firstName} has ${personInfo.freinds.length} friends,
    and his best freind is ${personInfo.freinds[0]}`);
}

objects_intro();




//////////object continue/////////////

function object_learn() {
    // this object calculates the age of a person
    const year_cal = {
        nowYear: 2021,
        birthyear: 1997,

        // we cah use 'this' to call another expression inside the object
        //'this'lets you call expressions directly inside the function
        calc_age: function() {
            this.age = 2021 - this.birthyear;
            return this.age;
        }
    };

    //call the function cal age inside the object year calculator
    //we get the function in the object by calling age, which is result of function
    console.log(year_cal.age);
    // used this works much better
    console.log(year_cal.calc_age());


    // we claimed another object called math object
    //we have a function inside our object that calculates
    // the power to the second power
    const math_object = {
        exponent: 2,

        power: function(base) {
            4
            for (let count = 1; count < this.exponent; count++) {
                base = base * base;
            }
            return base;
        }

    };

    console.log(math_object.power(4));
}

object_learn();



////////// learning how to loop ////// 
function loop() {

    const grades = [99, 89, 55, 85];
    let total = 0;
    let average = 0;

    for (let count = 0; count < grades.length; count++) {
        total = total + grades[count];
    }
    return average = total / grades.length;

}
console.log(loop());