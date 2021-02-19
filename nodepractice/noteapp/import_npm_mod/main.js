// here we call the package we installed in the terminal
const validator = require(`validator`);

// were calling in function in validator and displaying result
// check if email is valid, will print true
console.log(validator.isEmail('cortesleonardo333@gmail.com'));

// produce false
console.log(validator.isEmail('tdhnei12345'));

//another example using validator
//test if input is URL
console.log(validator.isURL('https://www.npmjs.com/package/validator'));