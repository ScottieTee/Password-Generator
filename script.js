// Assignment code here
//define variables
const aplha = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const num = '1234567890';
const special = '!@#$%^&*?~_-'
let len = 0;
//empty password variable
let temp = '';

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
} else if (caps && lower && spChar && numbers)
userSelections = aplha.concat(upper, num, special);
console.log(userSelections)






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