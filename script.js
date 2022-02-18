// Assignment code here
const aplha = 'abcdefghijklmnopqrstuvwxyz';
const num = '1234567890';
const special = '!@#$%^&*?~_-'
let len = 0;
//empty password variable
let temp = '';


function generatePassword () {
  console.log ("CLICK ACCEPTED!")
  len= prompt('How long would you like your password to be? (8-128)');
const caps = confirm('Do you want caps?')
const lower = confirm('Do you want lowercase?')
const spChar = confirm('Do you want special characters?')
const numbers = confirm('Do you want numbers?')

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

//Start Function
//Prompt user input
//if no answer
//4 true choices
//3 true choices
//2 true choices
//1 true choice

//create a loop for random password
for (var i = 0; i< len; i++) {
  var chosen = userSelections[Math.floor(Math.random() * userSelections.length)];
  temp.push(chosen);
  console.log(chosen);
}

//provide the password