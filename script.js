// Assignment code here
function generatePassword() {
  var PWLength = (Number(prompt("How many characters?")));
  console.log(PWLength)

  var upperCase = confirm("Do you want to include Uppercase Characters?")
    if (upperCase === true) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

  var lowerCase = confirm("Do you want to include Lowercase Characters?")
  if (lowerCase === true) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  var numbers = confirm("Do you want to include numbers?")
  if (numbers === true) {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  var symbols = confirm("Do you want to include symbols?")
  if (symbols === true) {
    const symbols = '!@#$%^&*(),.?';
    return symbols[Math.floor(Math.random() * symbols.length)]
  }

  let text ="upperCase, lowerCase, numbers, symbols"
  for (i=0; i < PWLength; i++) {

  }

  return "generatePassword"
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


//concat arrays-string js
