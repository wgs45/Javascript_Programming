// Different javascript data types
// Let's declare different data types

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

// string to int
let num = '10';
// let num_int = parseInt(num);
// let num_int = Number(num);
let num_int = +num;
console.log("+num: ", num_int);

// string to float
let num_1 = '9.81';
// let num_float = parseInt(num_1);
// let num_float = Number(num_1);
let num_float = +num_1;
console.log("+num_1: ", num_float);

// float to int
let float_int_num = parseInt(num_1);
console.log("float_int_num: ", float_int_num);
