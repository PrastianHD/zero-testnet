## Langkah-langkah
Script ini untuk Interaksi di Zero Testnet atau Zerion Testnet

====== Menu ======
1. Deposit Bridge from Sepolia to Zero Testnet
2. Withdraw Bridge from Zero Testnet to Sepolia
3. Transfer $ETH to Random Address
4. Transfer $DOCS to Random Address
   
### Clone Repositori
```
git clone https://github.com/PrastianHD/zero-testnet.git
```

### Masuk ke Directory
```
cd zero-testnet
```

### Instal Dependensi
```
npm install
```
### Konfigurasi .env File

- Edit your Private Key

### Konfigurasi Chain
```bash
npm i -g zksync-cli
zksync-cli config chains
--------------
? Select a chain Add new chain
? Chain id 4457845
? Chain name zero-sepolia
? Chain key zero-sepolia
? Chain RPC URL https://rpc.zerion.io/v1/zero-sepolia
? Chain explorer URL (optional) https://explorer.zero.network/
? Is this chain connected to L1 Yes
? L1 Chain id 11155111
? L1 Chain name sepolia
? L1 Chain key sepolia
? L1 Chain RPC URL https://1rpc.io/sepolia
? L1 Chain explorer URL https://sepolia.etherscan.io/
✔ Chain "zerion-testnet" saved
---------------
```

### Run script
```
npm run start
```
