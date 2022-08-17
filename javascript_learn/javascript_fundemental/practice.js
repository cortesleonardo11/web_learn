

// this is calling the method that it is located in
// this can be calling local method or global method
// this helps with the dont repeat yourself principal
const ageObject = 
{
    Mybirthyear: 1998,
    // here we create a function inside of an object
    calcAge: function()
    {
        return 2022 - this.Mybirthyear;// this points to ageObject
    }
}

// we call the function inside the object using
// the dot notation
console.log(ageObject.calcAge());

