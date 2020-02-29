// Soal 1
var rows1 = 1

while(rows1 <= 5) {
    rows1++;
    console.log('*')
}

console.log('--------------------------------------------')
// Soal 3
var rows2 = 5;
var display = '';

for(var counter = 1; counter <= rows2; counter++){
    for(var jumlah = 5; jumlah <= rows2; jumlah++){
        display += '*';
    }
    console.log(display);
}


console.log('--------------------------------------------------')
// Soal 2
var rows3 = 5;


for(var counter1 = 1; counter1 <= rows3; counter1++){
    var display1 = '';
    for(var jumlah1 = 1; jumlah1 <= rows3; jumlah1++){
        display1 += '*';
    }
    console.log(display1);
}