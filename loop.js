// Soal Pertama

console.log('LOOPING PERTAMA')

var pengulangan = 2
while(pengulangan <= 20) {
    console.log(pengulangan + '- I love coding');
    pengulangan += 2;
}

console.log('LOOPING KEDUA')

var pengulangan2 = 20
while(pengulangan2 >= 2) {
    console.log(pengulangan2 + '- I will become fullstack developer');
    pengulangan2 -= 2;
}

// Soal Kedua

console.log('LOOPING PERTAMA')

for(var pengulangan1 = 1; pengulangan1 <= 20; pengulangan1++){
    console.log(pengulangan1 + '- I love coding')
}

console.log('LOOPING KEDUA')

for(var pengulangan1 = 20; pengulangan1 >= 1; pengulangan1--){
    console.log(pengulangan1 + '- I will become fullstack developer')
}

// Soal Ketiga

console.log('Perulangan 1')
var counter = 1;

while(counter <= 100){
  if(counter % 2 === 0){
    console.log('GENAP');
  }  else console.log('GANJIL')
  counter++;
}

console.log('Perulangan 2')
var counter1 = 1;
//masih belum benar
while(counter1 <= 100){
  if(counter1 % 3 === 0){
    console.log('3 Kelipatan 3');
  } else console.log('""');
  counter1 += 2;
}


console.log('Perulangan 3')
var counter2 = 1;

while(counter2 <= 100){
  if(counter2 % 6 === 0){
    console.log('6 Kelipatan 6');
  } else console.log('""')
  counter2 += 5;
}

console.log('Perulangan 4')
var counter3 = 1;

while(counter3 <= 100){
  if(counter3 % 10 === 0){
    console.log('10 Kelipatan 10');
  } else console.log('""')
  counter3 += 9;
}