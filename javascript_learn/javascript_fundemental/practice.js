


const ageObject = 
{
    Mybirthyear: 1998,
    // here we create a function inside of an object
    calcAge: function()
    {
        //create an elment age that pertains to ageObject
        //calculate age and return age, age is now part of object elements
        this.age = 2021 - this.Mybirthyear;
        return this.age;
    }
};


console.log(ageObject.calcAge());
//here now we call the new element created, age 
console.log(ageObject.age);


