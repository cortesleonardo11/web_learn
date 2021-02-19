// shows how pop up works will work through html file
function popup() {
    //wil create a popup saying hello world
    alert("hello world")

    // create a string js and assign it value amaizing
    let js = 'amaizing';
    //if js is amaizing create a pop up showing the test passed
    if (js == 'amaizing') alert("the test passed");
}

// function that shows how simple math works in java script
function simple_math(name) {
    // will display the answer in the console
    console.log(2 + 2);

    let total, average = 0;

    //calculates the average
    total = 1 + 2 + 3 + 4;
    average = total / 4;
    console.log("average is ", average);
    console.log("thanks", name);
}

// in this function we test data types 
function data_type() {
    // here we show how we can see the type of a value
    //we can also change the data type of a value
    let test_type = true; //boolean
    console.log(typeof test_type); //print boolean

    // test_type is now 100 changing the type to an int
    test_type = 100; // is a integer type
    console.log(typeof test_type); //print int

    //test_type is now leo,changing the type to string
    test_type = "leo";
    console.log(typeof test_type);
}

//shows basic operators used in java script
function basic_operators() {
    const agejonas = 2020 - 1991;
    const agesarah = 2020 - 2014;

    // 2**3 is the same as 2 to the power of 3
    console.log(agejonas * 2, agejonas / 2, 2 ** 3);

    //create first and last name than put them together
    const first_name = "leonardo";
    const last_name = "cortes";
    console.log(first_name + ' ' + last_name);

    //assignment operators
    let x = 10 + 5; // x = 15
    x += 10; // x = x + 10 = 25
    x *= 4; // x = x * 4 = 100
    x++;
    x--;
    console.log(x);

    //comparison operators
    // > < >= <= ==
    // next to lines of code are considered boolean
    console.log(agejonas >= agesarah)

    const is_full_age = agesarah >= 18;
}

function literals() {
    const first_name = 'leonardo';
    const job = 'programmer';
    const birthyear = 1998;
    const year = 2037;

    // how to piece together 
    const piece_together = "Im " + first_name + ', a ' +
        (year - birthyear) + ' year old ' + job + '!';

    console.log(piece_together);
    // make sure to use ` instead of '
    // easier way of piecing together
    const new_piece_together = `Im ${first_name}, a ${year - birthyear} year old ${job}!`;
    console.log(new_piece_together);

    console.log('string\n\ multiple\n\ lines');
    // you can also write muliple next lines like this
    console.log(`string
    multiple
    lines`);
}

function if_else() {
    let num = 3;

    if (num > 0) {
        console.log("positive");
    } else {
        console.log("negative");
    }
}

// demonstrates truthy and falsey values
function truthy_falsey() {
    //certain values have natural truthy falsey values
    console.log(0); // false
    console.log(' '); //false
    console.log("jake"); //true
    console.log(undefined); //false
    console.log({}); //true
}


function strict_vs_loose() {
    const age = 18;
    // better to use 3 = because it will give you the absolute truth
    if (age == '18') console.log("true loose"); //true
    if (age === '18') console.log("true strict"); //false
    if (age === 18) console.log("true strict"); // true
}

///////////continue notes here//////////
function boolean_logic() {
    //and or not
    const has_drivers_license = true;
    const has_good_vision = true;
    const is_tired = false;

    //if license and good vision are both true
    //and is tired is false, you can drive. else you cannot drive
    if (has_drivers_license && has_good_vision && !is_tired) {
        console.log("you can drive");
    } else {
        console.log("you cannot drive");
    }
}

// switch statment
function switch_statement() {
    const day = 'monday';

    // switch statment is like running a bunch of if statment
    switch (day) {
        case "monday":
            console.log("starting off week");
            break;

        case "tuesday":
            console.log("study");
            break;

        case "wednesday":
            console.log("take test");
            break;
            //if thursday go through friday and saturday until a break hits
        case "thursday":
        case "friday":
        case "saturday":
            console.log("go to work");
            break;

        case "sunday":
            console.log("rest");
            break;
    }
}

// ternary operator (?) is used to make very quick if statment that 
//does not need much code
function ternary_operator() {
    age = 22;

    //test if driking age is 18 or up to see if it is legal or not legal
    // ? is used as the if statment to make decisions
    // : is used to seperate if or else if 
    const drink_age = age >= 18 ? 'legal' : 'not legal';
    console.log(drink_age);
}





////////////int main//////////
//think of this being int main in c++

//popup();

let nickname = "leo";
simple_math(nickname);

data_type();

basic_operators();

literals();

boolean_logic();

switch_statement();

ternary_operator();