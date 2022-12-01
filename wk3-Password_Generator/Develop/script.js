// Assignment Code
var generateBtn = document.querySelector("#generate");

const number = "0123456789";
const special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const lowercase = "qwertyuiopasdfghjklzxcvbnm";
const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var total = "";

// Write password to the #password input
function writePassword() {
  var numChar = prompt("How many characters would you like your password to contain?");
  numChar = parseInt(numChar);
  if (typeof numChar !== typeof 1) {
    return;
  }

  if (numChar < 8) {
    alert("Password length must be at least 8 characters");
    return;
  } else if (numChar > 128) {
    alert("Password length must be less than 129 characters");
    return;
  } 
  
  var specialChar = confirm("Click OK to confirm including special characters.");
  if (specialChar) {
    total += special;
  }

  var numericChar = confirm("Click OK to confirm including numeric characters.");
  if (numericChar) {
    total += number;
  }

  var lowerChar = confirm("Click OK to confirm including lowercase characters.");
  if (lowerChar) {
    total += lowercase;
  }

  var upperChar = confirm("Click OK to confirm including uppercase characters.");
  if (upperChar) {
    total += uppercase;
  }
  // console.log(total);
  var password = generatePassword(numChar);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(numChar) {
  var password = "";
  for (var i=0; i < numChar; i++) {
    var index = Math.floor(Math.random() * total.length);
    password += total[index];
  }
  return password;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
