function konversi(menit){
    var jam = (menit / 60);
    var pembulatanJam = Math.floor(jam);
    var nMenit = (jam - pembulatanJam) * 60;
    var pembulatanNMenit = Math.round(nMenit);
    if(pembulatanNMenit < 10){
        iMenit = '0' + pembulatanNMenit;
    } else {
        iMenit = pembulatanNMenit
    }
    return pembulatanJam + ':' + iMenit;
}

console.log(konversi(63));
console.log(konversi(124));
console.log(konversi(53));
console.log(konversi(88));
console.log(konversi(120));