// Import modul child_process untuk mengeksekusi perintah shell
require('dotenv').config();
const { execSync } = require('child_process');

// Fungsi untuk melakukan deposit
module.exports = async function depositFunction() {
    // Parse tx_amount sebagai bilangan bulat
    const tx_amount = parseInt(process.env.TX_AMOUNT);

    for (let i = 1; i <= tx_amount; i++) {
        try {
            // Mengeksekusi perintah zksync-cli deposit
            const PrivateKey = process.env.PRIVATE_KEY;
            const amount = process.env.AMOUNT;
            const address = process.env.ADDRESS;
            const command = `zksync-cli bridge deposit --amount ${amount} --chain zero-sepolia --to ${address} --pk ${PrivateKey}`;

            // Jalankan perintah shell
            const output = execSync(command);
            console.log(`Deposit ${i}/${tx_amount}: ${output.toString()}`);

            // Tunggu beberapa saat sebelum melakukan deposit berikutnya (5 detik)
            await new Promise(resolve => setTimeout(resolve, 5000));
        } catch (error) {
            console.error(`Error pada deposit ke-${i}: ${error}`);
        }
    }
    console.log(`Proses deposit selesai untuk ${tx_amount} transaksi.`);
}

