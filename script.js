const fs = require('fs');

// read contents of the file
const quotesfile = fs.readFileSync('500quotes.txt', 'UTF-8');
const emojisfile = fs.readFileSync('emojis.txt', 'UTF-8');

// split the contents by new line
const quotes = quotesfile.split(/\r?\n/);
const emojis = emojisfile.split(/\r?\n/);

// print a random line
const displayMessage = () =>{
    let rand = Math.floor(Math.random() * 505);
    let randNumber = Math.floor(Math.random() * 17563);
    let randomEm = Math.floor(Math.random() * 46);
    console.log('Congratulations! You won Raffle number ' + randNumber + '!\nYour motivational quote for today is: ' + quotes[rand] + '\nNow go change the world, young padawan! ' + emojis[randomEm]);
}
displayMessage();