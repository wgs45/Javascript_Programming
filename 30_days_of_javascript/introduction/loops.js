console.log("loops");

// initialize variables
let i = 0;

for (i = 0; i <= 5; i++) {
    console.log("Increment loops:", i);
}

console.log("---------------");

for (i = 5; i >= 0; i--) {
    console.log("Decrement loops:", i);
}

console.log("---------------");

for (i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}

console.log("---------------");

const countries = ['Finland', 'Japan', 'China', 'Thailand', 'Indonesia', 'Malaysia', 'Vietnam', 'Korea'];
console.log(countries);
const new_arr_1 = [];
for (i = 0; i < countries.length; i++) {
    new_arr_1.push(countries[i].toUpperCase());
}
console.log(new_arr_1);

console.log("---------------");

const num_1 = [1, 2, 3, 4, 5];
console.log(num_1);
let sum_1 = 0;
for (i = 0; i < num_1.length; i++) {
    sum_1 += num_1[i];
}
console.log('The sum of total value in the array:', sum_1);

console.log("---------------");

// Creating a new array based on the existing array
const num_2 = [1, 2, 3, 4, 5];
console.log(num_2);
const new_arr_2 = [];
let sum = 0;
for(i = 0; i < num_2.length; i++) {
    new_arr_2.push(num_2[i] ** 2); // The symbol ** is equivalent to pow() in Math.
}
console.log(new_arr_2);

console.log("---------------");

// while loop
let x = 0;
while (x <= 5) {
    console.log(x);
    x++;
}

console.log("---------------");

// do while loop
let y = 0;
do {
    console.log(y);
    y++;
} while (y < 5);

console.log("---------------");


const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

console.log("---------------");

for (const num of numbers) {
  console.log(num * num)
}

// 1 4 9 16 25

console.log("---------------");

// adding all the numbers in the array
let sum_3 = 0
for (const num_3 of numbers) {
  sum_3 += num_3  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum) // 15

console.log("---------------");

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

console.log("---------------");

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}
