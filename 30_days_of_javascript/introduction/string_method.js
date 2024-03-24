let js = "javascript";
console.log("the string len of '%s' is %d\n", js, js.length);
let first_name = "Alpha";
console.log("the string length of '%s' is %d\n", first_name, first_name.length);

// ? accessing string using index
let string = "Javascript";
let country = "Finland";
let first_letter = string[0];

console.log("The first letter of the string '%s' is %s\n", string, first_letter);

let second_letter = string[1];
let third_letter = string[2];
let last_letter = string[9];

console.log("The second, third, and the last letters of the string '%s' are %s, %s, and %s\n", string, second_letter, third_letter, last_letter);

let last_index = string.length - 1;
console.log("The last index of the string '%s' is %d\n", string, last_index);
console.log("The last letter of the string '%s' is %s\n", string, string[last_index]);

console.log("Convert lower case letter to upper case letter: %s\n", string.toUpperCase());
console.log("Convert upper case letter to lower case letter: %s\n", string.toLowerCase());

// ! substr(): It takes two arguments, the starting index and number of characters to slice. (deprecated)

// ? substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log("The substring(0, 4) of the string '%s' is %s\n", string, string.substring(0, 4));
console.log("The substring(4, 10) of the string '%s' is %s\n", string, string.substring(4, 10));
console.log("The substring(4) of the string '%s' is %s\n", string, string.substring(4));

// ? split(): The split method splits a string at a specified place.
let introduction = "30 Days of Javascript"
console.log("The split method splits a string %s at a specified place: %s\n", introduction, introduction.split(""));
console.log("The split method splits a string %s at a specified place: %s\n", introduction, introduction.split(" "));
console.log("The split method splits a string %s at a specified place: %s\n", first_name, first_name.split(""));
console.log("The split method splits a string %s at a specified place: %s\n", first_name, first_name.split(" "));

// ? trim(): Removes trailing space in the beginning or the end of a string.
let trim_words = "   30 Days Of JavaScript   ";
console.log("The original words: %s\n", trim_words);
console.log("The trim method splits a string '%s' at a specified place: %s\n", trim_words, trim_words.trim());

// ? includes(): It takes a substring argument and it checks if substring argument exists in the string.
// ? includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

// ? includes(): requires only 1 parameter
let string_1 = "30 Days Of JavaScript"

console.log(string_1.includes('Days')); //true
console.log(string_1.includes('days')); //false
console.log(string_1.includes('Script')); // true 
console.log(string_1.includes('script')); // false

// replace(): takes as a parameter the old substring and a new substring
// example: replace(old_subtring, new_substring);
console.log("replace javascript word with python:", string_1.replace('JavaScript', 'Python'));

// charAt(): takes a index then return the value of that index
// example: charAt(index);
console.log("find the 0 index of string_1 variable:", string_1.charAt(0));

let last_index_1 = string_1.length - 1;
console.log("Find the last index of string_1 variable:", string_1.charAt(last_index_1));

// charCodeAt(): takes a index then return the value of that index in ASCII code
console.log("Find the third index of string_1 variable in ASCII code format:", string_1.charCodeAt(3));
console.log("Find the last index of string_1 variable in ASCII code format:", string_1.charCodeAt(last_index_1));

// indexOf(): takes a substring, then return the index of that substring. If the substring doesn't exist, it will return -1.
console.log(string_1.indexOf('D'));
console.log(string_1.indexOf('Java'));
console.log(string_1.indexOf('script'));

// lastIndexOf(): takes a substring, then return the last index of that substring. If the substring doesn't exist, return -1.
console.log(string_1.lastIndexOf('JavaScript'));
console.log(string_1.lastIndexOf('Of'));
console.log(string_1.lastIndexOf('happy'));

// concat(): takes many substring then joins them together
let concat_string = "hello world ";
console.log("concat() string: ", concat_string.concat("testing", "123", "yeyy"));

// startsWith(): takes a substring as an argument then checks if the string start with the specified substring. If valid, return true else return false.
console.log("Startswith(): ", string_1.startsWith("30"));
console.log("StartsWith(): ", string_1.startsWith("hello"));

// endsWith(): takes a substring as an argument then checks if the string ends with the specified substring. If valid, return true else return false
console.log("endsWith(): ", string_1.endsWith("JavaScript"));
console.log("endsWith(): ", string_1.endsWith("30"));

// search(): takes a substring as an argument then search the string that a value matches the substring. If valid, returns the index else return -1. The search value can be a string or regular expression patterns.
console.log("search(): ", string_1.search("30"));
console.log("search(): ", string_1.search(/javscript/gi)); // search using regular expression. g = global (search whole text), i = case-insensitive
console.log("search(): ", string_1.search("hello"));

// match(): tkaes a substring as an argument then return an array if there is a match in the string. 
// if true, return an array else return null
// It can also used regular expression
console.log("match(): ", string_1.match("JavaScript"));
console.log("match(): ", string_1.match("hello"));

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge';
let regEx = /\d+/;

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log("Regular expression: ", txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"];
console.log("find text using match: ", txt.match(/\d+/g)) // ["2019", "30", "2020"];

// repeat(): takes an argument of string, then repeats it based on the number of input by user
let repeat_string = "hello";
console.log("repeat(): ", repeat_string.repeat(10));
