const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12
let textDisplay = document.getElementById('oneEl');
let textDisplayTwo = document.getElementById('twoEl')


function randomPasswordCharacter(){
let randomChar = Math.floor(Math.random() * characters.length)
return characters[randomChar]
}

function passwordGenerationOne(){
  let code = "";
  for (let i = 0; i < passwordLength; i++) {
    code += randomPasswordCharacter()
  }
  return code
}

function passwordGenerationTwo(){
  let code = "";
  for (let i = 0; i < passwordLength; i++) {
    code += randomPasswordCharacter()
  }
  return code
}

function generateDisplayPassword(){
    let passwordOne = passwordGenerationOne();
    let passwordTwo = passwordGenerationTwo();
    textDisplay.textContent = passwordOne;
    textDisplayTwo.textContent = passwordTwo;
}

let generateButton = document.getElementById('passGenerate');
generateButton.onclick = generateDisplayPassword;


// console.log(password);


