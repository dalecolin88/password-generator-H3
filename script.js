//user may pick from passwordLength, uppercase, lowercase, number, specialCharacter
var beta = "abcdefghijklmnopqrstuvwxyz".split("");
var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = "!@#$%^&*". split("")


//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");


function generatePassword(){
    
    var passwordLength = promt("Choose a length between 8-128?");

    var upper = confirm("confrim upper?")
    var lower = confirm("confirm lower?")
    var num = confirm("do you want to include numbers?")
    var char = confirm("do you want to add special characters")

    var allOptions = []
    
    

//create global variables
    //passwordlength
    //lowercase array
    //uppercase array
    //possible characters array
    //variables for response to "confirms/promts"
    //final password

//display a promt asking user for password length 
// match edges cases = is a number && 1s > 0, <120
//ensure that they answered true ro each unconfirmed


//creat a variable that will hold the final password

//want to creat a loop for as long as passwordLength
    //for each iteration, select a random character
    //return the final password from the generation password



  return "extraSecretPassword"
}

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);
