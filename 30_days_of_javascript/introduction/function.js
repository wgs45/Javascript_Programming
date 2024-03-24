console.log("Functions");

function square() {
    let num = 2;
    let sq = num * num;
    // return sq;
    console.log(sq);
}
square();

function add_two_numbers() {
    let num_1 = 10, num_2 = 20;
    let sum = num_1 + num_2;
    // return sum;
    console.log(sum);
}
add_two_numbers();

function print_full_name() {
    let first_name = 'Alpha', last_name = 'Beta', space = ' ';
    let full_name = first_name + space + last_name;
    // return full_name;
    console.log(full_name);
}
print_full_name();

function area_of_circle(radius) {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(area_of_circle(10));

function square(number) {
    let result = number * number;
    return result;
}
console.log(square(10));

function two_sum_number(num_1, num_2) {
    let result = num_1 + num_2;
    return result;
}
console.log(two_sum_number(1, 1));

function print_full_name_2(first_name, last_name) {
    return `${first_name} ${last_name}`;
}
console.log(print_full_name_2('Hello', 'world'));

function sum_array_values(arr_1) {
    let sum = 0, i = 0;

    for (i = 0; i < arr_1.length; i++) {
        sum += arr_1[i];
    }
    return sum;
}

const num_1 = [1, 2, 3, 4, 5];
console.log(sum_array_values(num_1));

// regular function with unlimited parameters
// A function declaration provides a function scoped arguments array like object. 
// Any thing we passed as argument in the function can be accessed from arguments object inside the functions.
function sum_all_numbers() {
    let sum = 0, i = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log("Regular function:",sum_all_numbers(1, 2, 3, 4, 5));
console.log("Regular function:", sum_all_numbers(11, 20, 22, 13, 40));

// arrow function with unlimited parameters
// Arrow function does not have the function scoped arguments object. 
// To implement a function which takes unlimited number of arguments in an arrow function 
// we use spread operator followed by any parameter name. Any thing we passed as argument in the function can be 
// accessed as array in the arrow function.
const sum_all_numbers_1 = (...args) => {
    let sum = 0;
    for (const elements of args) {
        sum += elements;
    }
    return sum;
}
console.log("Arrow function:", sum_all_numbers_1(1, 2, 3, 4));
console.log("Arrow function:", sum_all_numbers_1(10, 20, 22, 13, 240));

// anonymous function
const anonymous_func = function() {
    console.log("This is an anonymous function.");
}

// expression function 
// Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. 
// To return a value from the function we should call the variable. 
const square_1 = function(n) {
    return n * n;
}
console.log("Expression function:", square_1(10));

// self invoking function
// Self invoking functions are anonymous functions which do not need to be called to return a value.
(function(n) {
    console.log("Self invoking function:", n * n);
})(2);

let squared_num_1 = (function(n) {
    return n * n;
})(10);
console.log("Self invoking function:", squared_num_1);

// Arrow function
// Arrow function is an alternative to write a function, however function declaration and arrow function have 
// some minor differences.
// Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function 
// declaration and arrow function.
const square_2 = n => {
    return n * n;
}
console.log("Arrow function:", square_2(4));

// shortcut to write an arrow function
const square_3 = n => n * n;
console.log("alternative arrow function:", square_3(5));

const change_to_upper_case_1 = arr_1 => {
    const new_arr = [];
    for (const elements of arr_1) {
        new_arr.push(elements.toUpperCase());
    } 
    return new_arr;
}
const countries_1 = ['Indonesia', 'Malaysia', 'Vietnam', 'Korea', 'Japan', 'China', 'Taiwan'];
console.log(change_to_upper_case_1(countries_1));

const print_full_name_3 = (first_name, last_name) => `${first_name} ${last_name}`;
console.log('Arrow functions:', print_full_name_3('Alpha', 'Beta'));

// function with default parameters
// Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument 
// the default value will be used. Both function declaration and arrow function can have a default value or values.
function greetings(name = 'Alpha') {
    let message = `${name}, welcome to this Javascript course`;
    return message;
}
console.log('Function with default parameters:', greetings());

const object_weight = (mass, gravity = 9.81) => mass * gravity + ' N';
console.log('Weight of an object in Newton:', object_weight(100));
