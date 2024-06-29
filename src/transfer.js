require('dotenv').config(); // Memuat variabel lingkungan dari file .env
const { exec } = require('child_process');
const { ethers } = require('ethers');

// Fungsi untuk menghasilkan alamat EVM acak
function generateRandomAddress() {
    const wallet = ethers.Wallet.createRandom();
    return { address: wallet.address };
}

// Fungsi untuk menghasilkan 100 alamat acak
function generateMultipleRandomAddresses(count) {
    const addresses = [];
    for (let i = 0; i < count; i++) {
        addresses.push(generateRandomAddress());
    }
    return addresses;
}

// Fungsi untuk melakukan transfer menggunakan zksync-cli
function transferEther(receiverAddress, PrivateKey) {
    return new Promise((resolve, reject) => {
        const amount = process.env.AMOUNT;
        const chain = 'zero-sepolia';
        const command = `zksync-cli wallet transfer --amount ${amount} --chain ${chain} --to ${receiverAddress} --pk ${PrivateKey}`;

        exec(command, (error, stdout) => {
            if (error) {
                reject(`Error: ${error.message}`);
                return;
            }
            if (stdout.includes('Sending transfer...')) {
                resolve(`Transfer to ${receiverAddress} successful`);
            } else {
                reject(`Transfer to ${receiverAddress}`);
            }
        });
    });
}

// Fungsi untuk menunda eksekusi selama waktu yang ditentukan
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = async function transferFunction() {
    const tx_amount = parseInt(process.env.TX_AMOUNT); // Ambil TX_AMOUNT dari .env dan konversi ke integer
    const addresses = generateMultipleRandomAddresses(tx_amount);

    // Informasi untuk melakukan transfer
    const PrivateKey = process.env.PRIVATE_KEY; // Menggunakan private key dari variabel lingkungan

    for (let i = 0; i < addresses.length; i++) {
        const receiverAddress = addresses[i].address;
        try {
            const result = await transferEther(receiverAddress, PrivateKey);
            console.log(result);
            // console.log(`[ ${new Date().toLocaleString()} ] ${result.toString()}`);
        } catch (error) {
            console.error(error);
        }
        console.log(`Success Transfer to ${addresses[i].address}`);
        console.log('.....')
        await delay(1000); // Jeda 1 detik sebelum transfer berikutnya
    }
}

