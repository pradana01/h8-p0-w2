let nama = 'Andrean'
let peran = 'Ksatria'
// You have 3 available 'peran': 'Ksatria', 'Tabib' and 'Penyihir'
peran = 'Ksatria'
peran = 'Penyihir'

if (nama == 'Andrean' && peran == 'Ksatria') {
    console.log('Halo, ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (nama == 'Andrean' && peran == 'Tabib') {
    console.log('Halo, ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.');
} else if (nama == 'Andrean' && peran == 'Penyihir') {
    console.log('Halo,, ' + nama + ' ' + peran + ', ciptakan keajaiban yang membantu kemenanganmu!');
} else if (nama == 'Andrean') {
    console.log('Halo ' + nama + '. Pilih peranmu untuk memulai game.');
} else {
    console.log('Nama harus diisi!')
}
