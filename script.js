// Array of speacial characters to be included in password.
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

// Assignment Code (already in homework)
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button (already in homework)
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input   (already in homework)
function writePassword() {
  var password = generatePassword();
  var password = document.querySelector("#password");
  //  (already in homework - ask Tucker/TA)
   passwordText.value = password;   


}

function generatePassword(){
  var passwordLength = prompt("How Long Would You Like The Password To Be? Choose 8-128 Characters")
  var isSpecialCharacters = confirm("Would You Like To Include Special Characters?")
  var isNumericCharacters = confirm("Would You Like To Include Numbers?")
  var isUpperCharacters = confirm("Would You Like To Include Upper Case Letters?")
  var isLowerCharacters = confirm("Would You Like To Include Lower Case Letters?")

  console.log(passwordLength, isSpecialCharacters, isNumericCharacters, isUpperCharacters, isLowerCharacters)

  for (var i = 0; i < 10; i++) {
  var myBigArray = [];
  var length = parseInt(passwordLength)
  if (length <8 || length > 128 === true){
      length === false
     }
  if (length === false){
    alert("Invalid number chosen. Must Choose Between 8-128 Characters.")
  }   
  if (isNumericCharacters === true){
    myBigArray.concat(numericCharacters)
  }
  if (isSpecialCharacters === true) {
    myBigArray.concat(isSpecialCharacters)
    }
  if (isUpperCharacters ===true){
    myBigArray.concat(isUpperCharacters)
  } 
  if(isLowerCharacters === true){
    myBigArray
  } else prompt

  console.log(myBigArray)
}

}
  
 

// 

  //  password

  // var password = generatePassword();
  
// var password;
  // var isValid = validation(passwordLength, isSpecialCharacters,isNumericCharacters,isUpperCharacters,isLowerCharacters);

  // if (isValid === true) {
  //   password = generatePassword()  
  //  }
 
  
  
  

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// function validation(passwordLength, isSpecialCharacters,isNumericCharacters,isUpperCharacters,isLowerCharacters) {
//      var length = parseInt(passwordLength)
//      if(length < 8 || length > 128){
//        return false;
//      }
//      if (length ===false) {
//       alert("Number of Characters Must be Between 8-128.")
//      }

//      if(isSpecialCharacters||isNumericCharacters||isUpperCharacters||isLowerCharacters){
//        return true
//      }
//      else{
//       return false
//      }

     

// }

// ref Tucker

// function ge


//ref Ofc Hours

// var password=""
// for(var i = 0; i < 10; i++) {
//   password += getRandomItem (specialCharacters);
//   password += getRandomItem (numericCharacters);
//   password += getRandomItem (lowerCasedCharactersCharacters);
//   password += getRandomItem (upperCasedCharacters);

// }


// var pets = ["Avery", "Deku", "Meems", "Ruger", "Bane"];
// // Retrieve a random item from the provided array
// function getRandomItem(arr) {
// // Generate a random index from 0 to the length - 1 of our array
// var randomIndex = Math.random() * arr.length;
// // round down our random index
// randomIndex = Math.floor(randomIndex);
// // return the random item based off of our random index
// return arr[randomIndex];

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
// THEN the password is either displayed in an alert or written to the page.
