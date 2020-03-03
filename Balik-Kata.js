function balikKata(kata){
    var letter = '';
    for (var i = kata.length - 1; i >= 0; i--){
        letter += kata[i];
    } return letter;
}

console.log(balikKata('andrean'));
