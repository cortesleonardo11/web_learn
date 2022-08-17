


const ageObject = 
{
    Mybirthyear: 1998,
    // here we create a function insed of an object
    calcAge: function(genBirthYear)
    {
        return 2022 - genBirthYear;
    }
}

// we call the function inside the object using
// the dot notation
console.log(ageObject.calcAge(1998));
//bracket notation
console.log(ageObject['calcAge'](1998));


// this is calling the method that it is located in
// so it can be calling local method or global method
