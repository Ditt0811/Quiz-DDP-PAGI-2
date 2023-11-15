const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    {
        "q" : "Character utama dari Jujutsu Kaisen adalah...",
        "o" : [
            'Hinata',
            'Gojo Satoru',
            'Itadori Yuuji',
            'Fushiguro Toji',
        ],
        "a" : 2
    },
    {
        "q" : "Nama lengkap dari tom SI Pagi 2 yang benar...",
        "o" : [
            'Surya Adi Darmawan',
            'Asep Aseh jantaka',
            'Osvaldo pailing',
            'Harsa dewi'
        ],
        "a" : 0
    },
    {
        "q" : "kepanjangan dari DDP adalah...",
        "o" : [
            'Dasar Deposit Pemula',
            'Deposit Deposit Pelajar',
            'Dasar Dasar Pemrograman',
            'Dasar Dasar Pelajaran',
        ],
        "a" :  2
    }
     
]
// Meminta User Memasukan Nama
let nama = prompt('Input nama: ')


for (let i = 0; i < soal.length; i++) {
    console.log('\nSoal ' + 'No ' + (i + 1) + ': ' + soal[i].q);
    
    // Memunculkan pilihan jawaban
    for (let j = 0; j < soal[i].o.length; j++) {
        console.log(j + '. ' + soal[i].o[j]);
    }

    // Meminta User untuk menginput jawaban 
    let jawaban = prompt('Jawaban Anda (0,1,2,3): ');

    // Memasukan nilai jika jawaban benar
    if (parseInt(jawaban) === soal[i].a) {
        console.log('Jawaban Anda benar!');
        score += point_per_soal;
        jawaban_benar++;

    // Memberitahu jika Jawaban salah
    } else {
        console.log('Jawaban Anda salah. Jawaban yang benar adalah: ' + soal[i].o[soal[i].a]);
        jawaban_salah++;
    }
}

console.log("Kuis selesai")
console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah)