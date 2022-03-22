// Assignment Code
var generateBtn = document.querySelector("#generate");

// // WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered

function generatePassword() {
  var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()<>?'"
  // This is a variable with nothing inside it, meaning it will be used later to store random characters
  var storedPassword = ""

  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numerals = "0123456789"
  var specialcharacters = "!@#$%^&*()<>?'"

// The user must enter an interger to continue generating a password

  var AskForaPassword = prompt('Your password must contain between 8 and 128 characters.\n Enter a number of how many characters you would like to include in your password')
  if (AskForaPassword <= 7) {
    window.alert("Your entry is invalid. Try again");
    return
  }

  if (AskForaPassword >= 129) {
    window.alert("Your entry is invalid. Try again")
    return
  }

  else {
    window.alert("Your entry is accepted. Please continue")
  }
  // Prompts for the user
  var askLowerCase = confirm('Would you like lower case letters? \n Click \"ok\" to confirm and \"cancel\" for no')
  var askUperCase = confirm('Would you like upper case letters?\n Click \"ok\" to confirm and \"cancel\" for no')
  var askNumericvalues = confirm('Would you like numeric values?\n Click \"ok\" to confirm and \"cancel\" for no')
  var askSpecialcharacters = confirm('Would you like special characters?\n Click \"ok\" to confirm and \"cancel\" for no')
  

// creating a for loop, until Askforpassword stops to meet the requirment

  for (var i = 0; i < AskForaPassword; i++) {



    if (askLowerCase && storedPassword.length < AskForaPassword) {
      var index = Math.floor(Math.random() * lowercase.length);
      storedPassword = storedPassword + lowercase[index]
    }


    if (askUperCase && storedPassword.length < AskForaPassword) {
      var index = Math.floor(Math.random() * uppercase.length);
      storedPassword = storedPassword + uppercase[index]
    }


    if (askNumericvalues && storedPassword.length < AskForaPassword) {
      var index = Math.floor(Math.random() * numerals.length);
      storedPassword = storedPassword + numerals[index]
    }



    if (askSpecialcharacters && storedPassword.length < AskForaPassword) {
      var index = Math.floor(Math.random() * specialcharacters.length);
      storedPassword = storedPassword + specialcharacters[index]
    }
  }


  // Notes: Mathfloor(Math.random() multiply with the varriable.length ( the nummber of characters in that length)


  // This is random character generator

  console.log(Math.floor(Math.random() * 10));
  return storedPassword
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
