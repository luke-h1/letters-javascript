const letters = ["a", "b", "c", "d"] 
function getLetter() { 
    let randomNumber = Math.floor(Math.random() * letters.length); 
    document.getElementById('section').innerHTML = letters[randomNumber]; 
    }
