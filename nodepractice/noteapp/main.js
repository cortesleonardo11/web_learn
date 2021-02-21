// this is how we can get user input in the terminal
//we can terminal type(node main.js leo) recieve leo as input
// we start from the secong position to omit all the unneccesary string 
console.log(process.argv[2]);

// we make userinput = to command to use it
const command = process.argv[2];

if (command === 'add') console.log(`adding notes test`);
else if (command === 'remove') console.log(`removing notes test`);