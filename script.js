// Assignment code here
function generatePassword() {
  var PWLength = prompt("How many characters?");
  console.log(PWLength)

  var Uppercase = confirm("Do you want to include Uppercase Characters?")

  var Lowercase = confirm("Do you want to include Lowercase Characters?")

  var Numbers = confirm("Do you want to include numbers?")

  var Symbols = confirm("Do you want to include symbols?")
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
