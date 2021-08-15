// Assignment code here
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers ="0123456789";
const symbols = '!@#$%^&*(),.?';

function generatePassword() {
  var pwLength = (Number(prompt("How many characters would you like? Please choose a number between 8 and 128.")));
  if (!pwLength || pwLength < 8 || pwLength >128) {
    alert("You need to choose a number between 8 & 128!");
    return generatePassword();
  }

  var upperCase = confirm("Do you want to include Uppercase Characters?")
    
  var lowerCase = confirm("Do you want to include Lowercase Characters?")

  var numbers = confirm("Do you want to include numbers?")

  var symbols = confirm("Do you want to include symbols?")

  if (upperCase === false && lowerCase === false && numbers === false && symbols === false) {
    alert("Please choose at least one character type!");
    return generatePassword();
  }

  let text =['upperCase', 'lowerCase', 'numbers', 'symbols']
 
  for (i=0; i < pwLength; i++) {
    let character = generateCharacter(text, upperCase, lowerCase, numbers, symbols);
    console.log(character);
  }
  return "generatePassword"
}

function generateCharacter(text, upperCase, lowerCase, numbers, symbols) {
    var charType = Math.floor(Math.random() * (text.length) );
   if (charType === 0) {
    if (upperCase === false) {
      return generateCharacter(text, upperCase, lowerCase, numbers, symbols);
    }
   return generateUppercaseLetter();
   }
  
   if (charType === 1) {
    if (lowerCase === false){
      return generateCharacter(text,upperCase, lowerCase, numbers, symbols);
    }
   return generateLowercaseLetter();
   }

   if (charType === 2) {
    if (numbers === false) {
      return generateCharacter(text, upperCase, lowerCase, numbers, symbols);
    }
   return generateNumber();
   }

   if (charType === 3) {
    if (symbols === false){
      return generateCharacter(text, upperCase, lowerCase, numbers, symbols);
    }
   return generateSymbols();
   }
}

function generateUppercaseLetter() {
  let letterPosition = Math.floor(Math.random() * (letters.length));
  return letters.charAt(letterPosition);
}

function generateLowercaseLetter() {
  let letterPosition = Math.floor(Math.random() * (letters.length));
  return letters.charAt(letterPosition).toLowerCase();
}

function generateNumber() {
  let numberPosition = Math.floor(Math.random() * (numbers.length));
  return numbers.charAt(numberPosition);
}

function generateSymbols() {
  let symbolPosition = Math.floor(Math.random() * (symbols.length));
  return symbols.charAt(symbolPosition);
}
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
