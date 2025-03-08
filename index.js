const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let randomEl = document.getElementById("box1")
let randomEl2 = document.getElementById ("box2")

function genPassword() {
    randomEl.innerText = ""
    for (i = 0; i<15; i++) {
        let randomItem = Math.floor(Math.random()*characters.length)+1
        randomEl.innerText += characters [randomItem]
        }
    randomEl2.innerText = ""
    for (i = 0; i<15; i++) {
        let randomItem = Math.floor(Math.random()*characters.length)+1
        randomEl2.innerText += characters [randomItem]
        }
}


function copyText() {
  // Get the text field
  var copyText = document.getElementById("box1");
  // Copy the text inside the text field
  //To remember, used .innerText instead of .value to get the password since password-box in itself doesn't have any value
  navigator.clipboard.writeText(copyText.innerText);
  // Alert the copied text
  alert("Copied the text: " + copyText.innerText);
}
 
function copyText() {
  // Get the text field
  var copyText = document.getElementById("box2");
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.innerText);
  // Alert the copied text
  alert("Copied the text: " + copyText.innerText);
}



