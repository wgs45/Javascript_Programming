const PI = Math.PI;

let arr_1 = [1, 2, 3, 4, 5, -5];
let arr_2 = [2, 3, 4, 5, 100, 11];

console.log(PI);

console.log("Rounding PI: ", Math.round(PI));
console.log("Rounding 9.81: ", Math.round(9.81));
console.log("Floor PI: ", Math.floor(PI));
console.log("Ceiling PI: ", Math.ceil(PI));
console.log("Minimum value: ", Math.min(arr_1));
console.log("Minimum value: ", Math.min(1, 2, 3, 4, 5, -100));
console.log("Maximum value: ", Math.max(arr_2));
console.log("Maximum value: ", Math.max(1, 2, 3, 4, 5, 100, 11));

const random_number = Math.random(); // ? Generate random number
console.log(random_number);

const num = Math.floor(Math.random() * 11); // ? Generate random number from 0 to 10
console.log("Generated random number: ", num);

console.log("Absolute value of -10 becomes", Math.abs(-10)); // ? absolute value

console.log("Square root of 100:", Math.sqrt(100)); // ? square root

console.log("Square root of 2:", Math.sqrt(2)); // ? square root

console.log("3 to the power of 2:", Math.pow(3, 2)); // ? 3 to the power of 2
console.log("3^2:", Math.pow(3, 2)); // ? 3 to the power of 2

console.log("Value of E:", Math.E); // ? Value of E (Euler's number)

// ? logarithm
// ! returns the natural logarithm with base E of x, Math.log(x)
console.log("log(2):", Math.log(2));
console.log("log(10):", Math.log(10));

// ! returns the natural logarithm of 2 and 10
console.log("Natural log of 2:", Math.LN2);
console.log("Natural log of 10:", Math.LN10);

// ? Trigonometry
console.log("sin(60):", Math.sin(60));
console.log("cos(60):", Math.cos(60));
console.log("tan(60):", Math.tan(60));