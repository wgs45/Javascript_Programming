console.log("Arrays");

const arr = Array();
console.log(arr);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

const array = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
]
console.log(array);

let string_1 = 'JavaScript';
const split_string_1 = string_1.split('');
console.log("Split string: ", split_string_1);

let string_2 = 'I love to learn programming.';
const split_string_2 = string_2.split(' ');
console.log("Split string: ", split_string_2);

let string_3 = 'Facebook, Apple, Netflix, technologies';
const split_string_3 = string_3.split(',');
console.log("Split string: ", split_string_3);

const fruit_1 = ['banana', 'orange', 'apple', 'grape'];
console.log("fruit_1[0]: ", fruit_1[0]);
console.log("fruit_1[3]: ", fruit_1[3]);
let last_fruit_1 = fruit_1.length - 1;
console.log("Last index: ", fruit_1[last_fruit_1]);
console.log("Array length:", fruit_1.length);

const countries_1 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries_1[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndex = countries_1.length - 1
countries_1[lastIndex] = 'Korea' // Replacing Kenya by Korea

console.log(countries_1);

const empty_array_value = Array(8);
console.log("Empty array:", empty_array_value);

const filling_array_1 = Array(8).fill('X');
console.log("Filling array:", filling_array_1);

const filling_array_2 = Array(8).fill(4);
console.log("Filling array: ", filling_array_2);

const first_array = [1, 2, 3];
const second_array = [4, 5, 6];
const third_array = first_array.concat(second_array);
console.log('Array concat:', third_array);

const number_list_array = [1, 2, 3, 4, 5];
console.log(number_list_array);
console.log(number_list_array.indexOf(0));
console.log(number_list_array.indexOf(3));
console.log(number_list_array.indexOf(5));

const number_list_array_1 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(number_list_array_1);
console.log(number_list_array_1.lastIndexOf(2)) // 7
console.log(number_list_array_1.lastIndexOf(0)) // -1
console.log(number_list_array_1.lastIndexOf(1)) //  6
console.log(number_list_array_1.lastIndexOf(4)) //  3
console.log(number_list_array_1.lastIndexOf(6)) // -1

const web_tech = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(web_tech.includes('Node'))  // true
console.log(web_tech.includes('C'))     // false

const number_1 = [1, 2, 3, 4, 5];
console.log("Convert number_1 to string:",number_1.toString());

// join(): It is used to join the elements of the array, the argument we passed in the join method will be joined in 
// the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
const names = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo']
console.log(names.join()) 
console.log(names.join('')) 
console.log(names.join(' ')) 
console.log(names.join(', ')) 
console.log(names.join(' # ')) 

const web_tech_1 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

console.log(web_tech_1.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(web_tech_1.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// slice(): To cut out a multiple items in range. It takes two parameters:starting and ending position. 
// It doesn't include the ending position.
const number_2 = [1,2,3,4,5]

console.log(number_2.slice()) // -> it copies all  item
console.log(number_2.slice(0)) // -> it copies all  item
console.log(number_2.slice(0, numbers.length)) // it copies all  item
console.log(number_2.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

// Splice(): It takes three parameters:Starting position, number of times to be removed and number of items to be added.
const number_3 = [1, 2, 3, 4, 5];
console.log(number_3);
number_3.splice();
console.log("Remove number_3 elements:", number_3); 
number_3.splice(0, 1);
console.log("Remove number_3 elements: ", number_3);

// Push(): adding item in the end. To add item to the end of an existing array we use the push method.
const array_1 = ['item 1', 'item 2', 'item 3'];
console.log('Before push:', array_1);
array_1.push('item 4');
console.log('After push:',array_1);

// Pop() Removing item in the end.
const array_2 = [1, 2, 3, 4, 5];
console.log('Before pop:', array_2);
array_2.pop();
console.log('After pop:', array_2);

// Shift(): Removing one array element in the beginning of the array.
const array_3 = [1, 2, 3, 4, 5];
console.log('Before shift:', array_3);
array_3.shift();
console.log('After shift:', array_3);

// Unshift(): Adding array element in the beginning of the array.
console.log('Before unshift:', array_3);
array_3.unshift(0);
console.log('After unshift:', array_3);

// Reverse(): Reverse the order of the array
const array_4 = [1, 2, 3, 4, 5];
console.log('Before reverse:', array_4);
array_4.reverse();
console.log('After reverse:', array_4);

// Sort(): Sort an array to the right order
const web_tech_2 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

web_tech_2.sort()
console.log(web_tech_2) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

web_tech_2.reverse() // after sorting we can reverse it
console.log(web_tech_2) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
