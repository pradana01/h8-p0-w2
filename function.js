// Soal Nomor 1

function shoutOut (){
    return 'Halo Function!';
}
console.log(shoutOut());

// Soal Nomor 2

function calculateMultiply(num1, num2){
    return num1 * num2;
}
var hasilPerkalian = calculateMultiply(5, 6);
console.log(hasilPerkalian);

// Soal Nomor 3

function processSentence(name, age, address, hobby){
    return 'Nama saya ' + name + ', umur saya ' + age + ', alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!';
}

var name = 'Agus';
var age = '30';
var address = 'Jln. Malioboro, Yogyakarta';
var hobby = 'gaming';

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);

// 'Nama Saya ' += name += ', umur saya ' += age += ', alamat saya di ' += address += ', dan saya punya hobby yaitu '