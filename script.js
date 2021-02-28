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

console.log(specialCharacters,numericCharacters,lowerCasedCharacters,upperCasedCharacters)
// everything above are the variables chosen by user


// Assignment Code (already in homework)
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button (already in homework)
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)
// Write password to the #password input   (already in homework)
function writePassword() {
  var password = generatePassword();
  var password = document.querySelector("#password");
  //  (already in homework - ask Tucker/TA)
       passwordText.value = password;  
}
// writePassword()

function generatePassword(){
    var isPasswordLength = prompt("How Long Would You Like The Password To Be? Choose 8-128 Characters")
    var isSpecialCharacters = confirm("Would You Like To Include Special Characters?")
    var isNumericCharacters = confirm("Would You Like To Include Numbers?")
    var isUpperCasedCharacters = confirm("Would You Like To Include Upper Case Letters?")
    var isLowerCasedCharacters = confirm("Would You Like To Include Lower Case Letters?")

    console.log(isPasswordLength, isSpecialCharacters, isNumericCharacters, isUpperCasedCharacters, isLowerCasedCharacters)
  
    //  var numberOfCharacters = parseInt(isPasswordLength)
    //  if ( isPasswordLength< 8 || isPasswordLength > 128 === true){
    //   isPasswordLength === false
    //   }
    //  if (isPasswordLength === false){
    //      alert("Invalid number chosen. Must Choose Between 8-128 Characters.")
    //     } 
    
    
    // ref 2ality for .push
    var available = []
    if (isSpecialCharacters === true) {
      available.push(specialCharacters)
    }
    
    if (isNumericCharacters === true){
      available.push(numericCharacters)
     }
     
    if (isUpperCasedCharacters ===true){
      available.push(upperCasedCharacters)
   } 
   
    if(isLowerCasedCharacters === true){
      available.push(lowerCasedCharacters)
   } 
   console.log(available)
   var available

//        function getRandomCharacters(arr) {
//          var available = Math.random() * arr.length
//         var available = Math.floor(available)
//         return arr [available]
//       }
// getRandomCharacters()
// for (var i = 0; i < isPasswordLength; i++) {
//   var i = Math.floor(Math.random()*available.length);
    // return password.slice(0,length)

// }


}
generatePassword()


        


// swapping "passwordLength" for a digit found on W3 Schools

   




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


