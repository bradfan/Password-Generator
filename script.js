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
// everything above are the variables chosen by user

// Assignment Code (already in homework)
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button (already in homework)
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input   (already in homework)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
       password = password.slice(0,isPasswordLength)
      passwordText.value = password;  
      
}

// writePassword()
 isPasswordLength = ""
 function generatePassword(){
  // window.prompt api (MDN) converts a string to a number.
    isPasswordLength = window.prompt("How Long Would You Like The Password To Be? Choose 8-128 Characters")
    if(isPasswordLength < 8 || isPasswordLength > 128 === true){
         alert("Please click the 'Generate Password' button again and choose Between 8-128 Characters.");
    
           return
    }
    var isSpecialCharacters = confirm("Would You Like To Include Special Characters?")
    var isNumericCharacters = confirm("Would You Like To Include Numbers?")
    var isUpperCasedCharacters = confirm("Would You Like To Include Upper Case Letters?")
    var isLowerCasedCharacters = confirm("Would You Like To Include Lower Case Letters?")
     

         password = ""
        // ref W3 schools for substitution of an array in "for Loop"
        // this abbreviated for loop determines how many times the if satement is run. covered in ofc hours.
       for (let i= 0; i< isPasswordLength; i++) {
      if (isSpecialCharacters === true){
        password += getRandomItem(specialCharacters)
      }
      if (isNumericCharacters === true){
        password += getRandomItem(numericCharacters)
      }
      if (isLowerCasedCharacters === true){
        password += getRandomItem(lowerCasedCharacters)
      }
      if (isUpperCasedCharacters === true){
        password += getRandomItem(upperCasedCharacters)
      } 
     }
    return(password)
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




