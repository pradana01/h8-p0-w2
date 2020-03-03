function balikKata(kata){
    var letter = '';
    for (var i = kata.length - 1; i >= 0; i--){
        letter += kata[i];
    } return letter;
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));