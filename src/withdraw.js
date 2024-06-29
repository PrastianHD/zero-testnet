// Import modul child_process untuk mengeksekusi perintah shell
require('dotenv').config();
const { execSync } = require('child_process');

// Fungsi untuk melakukan Withdraw
module.exports = async function withdrawFunction() {
    // Parse tx_amount sebagai bilangan bulat
    const tx_amount = parseInt(process.env.TX_AMOUNT);

    for (let i = 1; i <= tx_amount; i++) {
        try {
            // Mengeksekusi perintah zksync-cli withdraw
            const PrivateKey = process.env.PRIVATE_KEY;
            const amount = process.env.AMOUNT;
            const address = process.env.ADDRESS;
            const command = `zksync-cli bridge withdraw --amount ${amount} --chain zero-sepolia --to ${address} --pk ${PrivateKey}`;
            
            // Jalankan perintah shell
            const output = execSync(command);
            console.log(`Withdraw ${i}/${tx_amount}: ${output.toString()}`);

            // Tunggu beberapa saat sebelum melakukan withdraw berikutnya (5 detik)
            await new Promise(resolve => setTimeout(resolve, 5000));
            console.log('Success Withdraw from Zero Testnet to Sepolia');
        } catch (error) {
            console.error(`Error pada withdraw ke-${i}: ${error}`);
        }
    }
    console.log(`Proses withdraw selesai untuk ${tx_amount} transaksi.`);
}

