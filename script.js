// Assignment code here
//define variables
const aplha = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const num = '1234567890';
const special = '!@#$%^&*?~_-'
let len = 0;
//empty password variable
let temp = '';

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Var To Upper Case ------------
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
caps = lower.map(toUpper);
//--------------------------------------
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var spChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//Start function
function generatePassword () {
  //Prompt user input
  console.log ("CLICK ACCEPTED!")
  len= prompt('How long would you like your password to be? (8-128)');
  console.log("Password length" + len);

  if(!len) {
    alert("Required input")
  
  }else if (len <8 || len > 128) {
  len = prompt("Must choose between 8 - 128 characters");
  console.log("Password length" + len);

} else {

const caps = confirm('Do you want caps?')
console.log("Caps" + caps);
const lower = confirm('Do you want lowercase?')
console.log("Lower" + lower);
const spChar = confirm('Do you want special characters?')
console.log("Special characters" + spChar);
const numbers = confirm('Do you want numbers?')
console.log("Numbers" + numbers);
};

//no answers
if (!caps && !lower && !spChar && !numbers) {
  userSelections = alert ("You must select at least one option!");

//4 true values
} else if (caps && lower && spChar && numbers) {
userSelections = aplha.concat(upper, num, special);
console.log(userSelections);
}
//3 true values
else if (caps && lower && spChar) {
  userSelections = aplha.concat(upper, special);
  console.log(userSelections);
} 
else if (caps && lower && numbers) {
  userSelections = aplha.concat(upper, num);
  console.log(userSelections);
}
else if (caps && spChar && numbers) {
  userSelections = upper.concat(num, special);
  console.log(userSelections);
}
else if (lower && spChar && numbers) {
  userSelections = aplha.concat(num, special);
  console.log(userSelections);
}
//2 true values
else if (lower && spChar) {
  userSelections = aplha.concat(special);
  console.log(userSelections);
}
else if (lower && num) {
  userSelections = aplha.concat(num);
  console.log(userSelections);
}
else if (lower && caps) {
  userSelections = aplha.concat(upper);
  console.log(userSelections);
}
else if (upper && spChar) {
  userSelections = caps.concat(special);
  console.log(userSelections);
}
else if (upper && numbers) {
  userSelections = caps.concat(num);
  console.log(userSelections);
}
else if (numbers && spChar) {
  userSelections = num.concat(special);
  console.log(userSelections);
}
//1 true value
else if (numbers) {
  userSelections = num;
  console.log(userSelections);
}
else if (upper) {
  userSelections = caps;
  console.log(userSelections);
}
else if (spChar) {
  userSelections = special;
  console.log(userSelections);
}
else if (lower) {
  userSelections = alpha;
  console.log(userSelections);
};


  return ("Your password here!")
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var userSelections;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create a loop for random password
for (var i = 0; i< len; i++) {
  var chosen = userSelections[Math.floor(Math.random() * userSelections.length)];
  temp.push(chosen);
  console.log(chosen);
}

//provide the password