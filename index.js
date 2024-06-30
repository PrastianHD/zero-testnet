// Import modul dotenv untuk memuat variabel lingkungan
require('dotenv').config();

// Import fungsi-fungsi dari folder src
const depositFunction = require('./src/deposit');
const withdrawFunction = require('./src/withdraw');
const transferethFunction = require('./src/transfereth');
const transferdocsFunction = require('./src/transferdocs');

// Fungsi untuk menunggu beberapa milidetik
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Fungsi untuk menjalankan operasi secara acak
async function randomOperation() {
    const operations = [depositFunction, withdrawFunction, transferethFunction, transferdocsFunction];
    const randomIndex = Math.floor(Math.random() * operations.length);
    await operations[randomIndex]();
}

// Fungsi utama
async function main() {
    console.log(`
    ███    ██  ██████  ██████  ███████ ██ ███    ██ ████████ ███████ ██████  
    ████   ██ ██    ██ ██   ██ ██      ██ ████   ██    ██    ██      ██   ██ 
    ██ ██  ██ ██    ██ ██   ██ █████   ██ ██ ██  ██    ██    █████   ██████  
    ██  ██ ██ ██    ██ ██   ██ ██      ██ ██  ██ ██    ██    ██      ██   ██ 
    ██   ████  ██████  ██████  ███████ ██ ██   ████    ██    ███████ ██   ██ 
    `);

    console.log('Authors : Prastian Hidayat')
    for (let i = 0; i < 1000; i++) {
        try {
            await randomOperation();
            console.log(`====================`);
            console.log(`Operasi ke-${i + 1} selesai.`);
            console.log(`====================`);
            // Tunggu beberapa saat sebelum melakukan operasi berikutnya (5 detik)
            await delay(1000);
        } catch (error) {
            console.error(`Error pada operasi ke-${i + 1}: ${error}`);
        }
    }
    console.log(`Proses selesai untuk ${tx_amount} operasi.`);
}

// Panggil fungsi utama
main().catch(error => console.error(error));
