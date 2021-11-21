// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // add console.log(password);

  passwordText.value = password;
  console.log(password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
