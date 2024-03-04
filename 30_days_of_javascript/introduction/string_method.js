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
