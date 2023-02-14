// Assignment code here -- Prompts for password criteria
var passwordText = document.querySelector("#password");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Groups characters based on character type
var charset = "!"
var charset1 = "abcdefghijklmnopqrstuvwxyz"
var charset2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charset3 = "1234567890"
var charset4 = "#$%&'()*+,-./:;<=>?@[]^_`{|}~"

// Write password to the #password input
function writePassword() {
  var prompt1 = prompt("Please enter the desired length of the password.");
  console.log(prompt1);
  var prompt2 = confirm("Would you like to use lowercase letters? (a, b, c, d, etc)");
  console.log(prompt2);
  if (prompt2 == true) {
    var newcharset = charset.concat(charset1)
    console.log(newcharset)
  }
  var prompt3 = confirm("Would you like to use uppercase letters? (A, B, C, D, etc)");
  console.log(prompt3);
  if (prompt2 == true) {
    var newercharset = newcharset.concat(charset2)
    console.log(newercharset)
  }
  var prompt4 = confirm("Would you like to use numbers? (1, 2, 3, 4, etc)");
  console.log(prompt4);
  if (prompt2 == true) {
    var evennewercharset = newercharset.concat(charset3)
    console.log(evennewercharset)
  }
  var prompt5 = confirm("Would you like to use special characters? (!, @, #, $, etc)");
  console.log(prompt5);
  if (prompt2 == true) {
    var newestcharset = evennewercharset.concat(charset4)
    console.log(newestcharset)
  }
    var length = prompt1
    var retVal = " "
    for (var i = 0, n = newestcharset.length; i < length; ++i) {
      retVal += newestcharset.charAt(Math.floor(Math.random() * n));
    }
    passwordText.value = retVal;
    };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
