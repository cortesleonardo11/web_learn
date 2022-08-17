


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


// continue and break examples

//how to pass an array into a function
const grades = [100,75,85,88,99];
console.log(caltotal(grades));//pass grades[] into function

function caltotal(num)// calculates the total of array
{
    total = 0;

    for(let count = 0; count < num.length; count++)
    {
        total = total + num[count];
    }
    return total;
};


// showing how while loops work

let countdown = 10;

while(countdown > 0)
{
    console.log(countdown);
    countdown--;
}


/////////////////////idea section for later//////////
// pass 2 or more arrays into a function.
//
//


