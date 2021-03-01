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
  var passwordText = document.querySelector("#password");
      password = password.slice(0,isPasswordLength)
      passwordText.value = password;  
       //  (already in homework - ask Tucker/TA)
}

// writePassword()
 isPasswordLength = ""
 function generatePassword(){
  // window.prompt (courtesy of MDN via Scott Ray) changes a string value to an integer
    isPasswordLength = window.prompt("How Long Would You Like The Password To Be? Choose 8-128 Characters")
    if(isPasswordLength < 8 || isPasswordLength > 128 === true){
         alert("Dial it back and read the instructions. Choose Between 8-128 Characters.");
    
           Return
    }
    var isSpecialCharacters = confirm("Would You Like To Include Special Characters?")
    var isNumericCharacters = confirm("Would You Like To Include Numbers?")
    var isUpperCasedCharacters = confirm("Would You Like To Include Upper Case Letters?")
    var isLowerCasedCharacters = confirm("Would You Like To Include Lower Case Letters?")
     
    console.log(isPasswordLength, isSpecialCharacters, isNumericCharacters, isUpperCasedCharacters, isLowerCasedCharacters)
    debugger
         password = ""
        // ref W3 schools for substitution of an array in "for Loop"
        //This For Loop was covered in morning office hours on either 2/25 or 2/26.
        // The logic I tried was fatally flawed because of the array it created.
        // Collaberation with Scott Ray led me back to what was covered. Use of the Assignmet operand += allows for data to be merged in this instance w/o a lot of code.
    for (let i= 0; i< isPasswordLength; i++) {
      if (isSpecialCharacters ===true){
        password += getRandomItem(specialCharacters)
      }
      if (isNumericCharacters ===true){
        password += getRandomItem(numericCharacters)
      }
      if (isLowerCasedCharacters ===true){
        password += getRandomItem(lowerCasedCharacters)
      }
      if (isUpperCasedCharacters ===true){
        password += getRandomItem(upperCasedCharacters)
      } 
    }return(password)
  }

    
        // comments left in from Instructor
    function getRandomItem(arr) {
      // Generate a random index from 0 to the length - 1 of our array
      var randomIndex = Math.random() * arr.length;
      // round down our random index
      randomIndex = Math.floor(randomIndex);
      // return the random item based off of our random index
      return arr[randomIndex];
      // One liner of the above code
      // return arr[Math.floor(Math.random() * arr.length)];
    }

//  }

   




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


