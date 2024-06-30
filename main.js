// Import modul dotenv untuk memuat variabel lingkungan
require('dotenv').config();

// Import fungsi-fungsi dari folder src
const depositFunction = require('./src/deposit');
const withdrawFunction = require('./src/withdraw');
const transferethFunction = require('./src/transfereth');
const transferdocsFunction = require('./src/transferdocs');

// Fungsi untuk menampilkan menu
async function showMenu() {
    const chalk = await import('chalk');
    const figlet = await import('figlet');

    // console.log(chalk.default.blue(figlet.default.textSync('NodeInter', { horizontalLayout: 'full' })));
    console.log(chalk.default.blue(figlet.default.textSync('Zero Testnet', { horizontalLayout: 'full' })));
    console.log(chalk.default.green("====== Menu ======"));
    console.log(chalk.default.yellow("1. Deposit: Bridge from Sepolia to Zero Testnet"));
    console.log(chalk.default.yellow("2. Withdraw: Bridge from Zero Testnet to Sepolia"));
    console.log(chalk.default.yellow("3. Transfer ETH to Random Address"));
    console.log(chalk.default.yellow("4. Transfer DOCS to Random Address"));
    console.log(chalk.default.yellow("5. Keluar"));
}

// Fungsi utama
async function main() {
    let choice = 0;

    // Loop untuk menampilkan menu dan memproses pilihan
    while (choice !== 5) {
        await showMenu();

        // Mendapatkan pilihan dari pengguna
        const chalk = await import('chalk');
        choice = parseInt(await getUserInput(chalk.default.blue("Masukkan pilihan Anda: ")));

        // Menjalankan fungsi sesuai pilihan
        switch (choice) {
            case 1:
                await depositFunction(); // Memanggil fungsi deposit
                break;
            case 2:
                await withdrawFunction(); // Memanggil fungsi withdraw
                break;
            case 3:
                await transferethFunction(); // Memanggil fungsi transfer
                break;
            case 4:
                await transferdocsFunction(); // Memanggil fungsi transfer
                break;
            case 5:
                console.log(chalk.default.red("Keluar dari menu."));
                break;
            default:
                console.log(chalk.default.red("Pilihan tidak valid. Silakan pilih kembali."));
                break;
        }
    }
}

// Fungsi bantu untuk mengambil input dari pengguna
function getUserInput(prompt) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        readline.question(prompt, (input) => {
            readline.close();
            resolve(input);
        });
    });
}

// Fungsi untuk menunda eksekusi selama waktu yang ditentukan
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Panggil fungsi utama untuk memulai menu
main().catch(error => console.error(error));
