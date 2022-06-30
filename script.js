//Variables for password criteria
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//Password length function
function passLength(){
  passwordLength = prompt("How many characters would you like your password to be? (between 8-128 characters): ");

    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      passLength();
    }
    else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      passLength();
    }
    else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      passLength();
    }
    return passwordLength;
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
