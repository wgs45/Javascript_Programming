let firstName = "alpha", lastName = "beta";
let country = "finland", city = "Helsinki";
let age = 100, isMarried = true;

const gravity = 9.81, boilingPoint = 100, PI = 3.14;

console.log(firstName, lastName, country, city, age, isMarried);
console.log(typeof("hello"));
console.log(typeof(5));
console.log(typeof(true));
console.log(typeof(null));
console.log(typeof(undefined));

console.log(gravity, boilingPoint, PI);

// * data types
console.log("------------------------------------------------");

let first = 3, second = 3;
let js = 'javascript', py = 'python';
let lightOn = true, lightOff = false;
let number = [1, 2, 3];
console.log(number);
number[0] = 10;
let other_number = [1, 2, 3];

let user_one = {
    name:"Alpha",
    role: "Teaching",
    age: "100",
};

let user_two = {
    name: "Beta",
    role: "Research",
    age: "100",
}

console.log(first == second, js == py, lightOn == lightOff);
console.log(number);
console.log(number == other_number);
console.log(user_one);
console.log(user_two);
console.log("compare: ", user_one == user_two);

let space = ' ';
let fullName = firstName + space + lastName;
let personal_info = fullName + '. I am ' + age + '. I lived in ' + country;

console.log("Full name:", fullName);
console.log("Personal info:", personal_info);

// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// ? string interpolation

console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b} by injecting the data dynamically`) // injecting the data dynamically

let language = 'JavaScript'
let job = 'teacher'

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

console.log(`${a} is greater than ${b}: ${a > b}`)