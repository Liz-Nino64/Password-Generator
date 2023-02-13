// Assignment code here -- Prompts for password criteria
var Prompt1 = prompt("Please enter the desired length of the password.")


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
    length = Prompt1
    charset = abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890
    retval = " "
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
    };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
