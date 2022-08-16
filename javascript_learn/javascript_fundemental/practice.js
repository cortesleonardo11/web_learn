


const ageObject = 
{
    Mybirthyear: 1998,
    // here we create a function insed of an object
    age: function calage(genBirthYear)
    {
        return 2022 - genBirthYear;
    }
}

// we call the function inside the object using
// the dot notation
console.log(ageObject.age(1998));
//bracket notation
console.log(ageObject['age'](1998));


