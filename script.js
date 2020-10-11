let numbers = ['1', '2' ,'3' ,'4', '5', '6', '7', '8', '9'];
let specialCharacters = ['!', '@','#','$','%','^','&','*','~','?','_'];
let lowerCaseLetters = ['a','s','d','f','g','h','j','k','l','q','w','r','t','y','p'];
let upperCaseLetters = ['A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
let otherSpecialCharacters = ['+','=','[','}','|','<','>'];


function getPasswordOptions() {
  let length = parseInt(
    prompt("How many characters would you like your password to be?")
  );
    
  if (isNaN(length) === true) {
    alert("Password length has to be a number between 10 and 100");
    return;
  }

  if (length < 8) {
  alert("Input not valid must be at least 10 characters");
  return;
  }

  if (length > 128){
  alert("input not valid must be less than 100 characters")
  return;
  }

  let hasNumbers = confirm(
  "Click ok to include Numbers"
  );

  let hasSpecialCharacters = confirm(
    "Click ok to include Special Characters"
  );
  let hasLowerCaseLetters = confirm(
    "Click ok to include Lower Case Letters"
  );
  let hasUpperCaseLetters = confirm(
    "Click ok to include Upper Case Letters!"
  );
  let hasOtherSpecialCharacters = confirm(
    "Click ok to include Other Special Characters"
  );
  if(
  hasNumbers === false &&
  hasSpecialCharacters === false &&
  hasUpperCaseLetters === false &&
  hasLowerCaseLetters === false &&
  hasOtherSpecialCharacters === false
) {
    alert('Must select at least one character type');
    return;
  }

let passwordOptions = {
  length: length,
  hasNumbers: hasNumbers,
  hasSpecialCharacters: hasSpecialCharacters,
  hasUpperCaseLetters: hasUpperCaseLetters,
  hasLowerCaseLetters: hasLowerCaseLetters,
  hasOtherSpecialCharacters: hasOtherSpecialCharacters,
};

return passwordOptions;
}

function getRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  let options = getPasswordOptions();
  let result = [];
  let possibleCharacters = [];
  let guaranteedCharacters = [];

  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasLowerCaseLetters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseLetters);
    guaranteedCharacters.push(getRandom(lowerCaseLetters));
  }

  if (options.hasUpperCaseLetters) {
    possibleCharacters = possibleCharacters.concat(upperCaseLetters);
    guaranteedCharacters.push(getRandom(upperCaseLetters));
  }
  if (options.hasOtherSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(otherSpecialCharacters);
    guaranteedCharacters.push(getRandom(otherSpecialCharacters));
  }
  
  for (let i = 0; i < options.length; i++) {
    let possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join('');
}

let generateBtn = document.querySelector("#generate");

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);
