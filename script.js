// Assignment Code WHAT IS THIS?
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How Long Would You Like The Password To Be? Choose 8-128 Characters")
  var isSpecialCharacters = confirm("Would You Like To Include Special Characters?")
  var isNumericCharacters = confirm("Would You Like To Include Numbers?")
  var isUpperCharacters = confirm("Would You Like To Include Upper Case Letters?")
  var isLowerCharacters = confirm("Would You Like To Include Lower Case Letters?")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var isValid = validation(passwordLength, isSpecialCharacters,isNumericCharacters,isUpperCharacters,isLowerCharacters)
  if (isValid === true) {
    password = generatePassword  
  }
  if (length ===false) {
    alert("Number of Characters must be between 8-128.")
  }
   if (isSpecialCharacters === false) {
     var noSpecial = isNumericCharacters.concat(isUpperCharacters.isLowerCharacters);
   }
   if (isNumericCharacters === false) {
     var noNumbers = isSpecialCharacters.concat(isUpperCharacters.isLowerCharacters);
   }
   if (isUpperCharacters ===false) {
     var noUpper = isSpecialCharacters.concat(isNumericCharacters.isLowerCharacters)
   }
  // if (multiple booleans) === false) {
    // var whatever = whatLeft.concat(theOther)

    // if (multiple booleans) === false) {
    // var whatever = whatLeft.concat(theOther)
    // etc

  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function validation(passwordLength, isSpecialCharacters,isNumericCharacters,isUpperCharacters,isLowerCharacters) {
     var length = parseInt(passwordLength)
     if(length < 8 || length > 128){
       return false;
     }
     if(isSpecialCharacters||isNumericCharacters||isUpperCharacters||isLowerCharacters){
       return true
     }
     else{
      return false
      
     }

}

// ref Tucker

var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_', '.'
];
// Array of numeric characters to be included in password
var numericCharacters = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];


//ref Ofc Hours

// var password=""
// for(var i = 0; i < 10; i++) {
//   password += getRandomItem (specialCharacters);
//   password += getRandomItem (numericCharacters);
//   password += getRandomItem (lowerCasedCharactersCharacters);
//   password += getRandomItem (upperCasedCharacters);

// }


// for (var i = 0; i < 10; i++) {
//   var password = array.length[i];
  
// }

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
