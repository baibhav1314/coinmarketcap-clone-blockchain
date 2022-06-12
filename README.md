# Amazon Clone Blockchain

a decentralised app that let users get information about the top 10 cryptocurrencies from Coinmarketcap API and allow them to swap
tokens.

## Tech Stack

**Client:** Next.js, Context API, TailwindCSS, Web3.js, Web3UiKit

**Server:** Moralis

**Smart Contract:** Solidity, Hardhat

## Screenshots

![coin1](https://user-images.githubusercontent.com/60654743/173233498-a8450f62-8a86-4eea-9136-50ac2117cfe7.png)

![coin2](https://user-images.githubusercontent.com/60654743/173233508-3f89a2dd-de87-4ad8-810d-4d6abff0e932.png)

## Run Locally

Clone the project

```bash
  git clone https://github.com/baibhav1314/coinmarketcap-clone-blockchain.git
```

Go to the project directory

```bash
  cd coinmarketcap-clone-blockchain
```

Install dependencies

```bash
  npm install
```

Go to the smart-contract directory

```bash
  cd smart-contract
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  cd ..
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_MORALIS_SERVER` = Your Moralis ServerUrl

`NEXT_PUBLIC_MORALIS_APPID` = Your Moralis appId

Then add a .env file inside the smart-contract folder

```bash
cd smart-contract
```

`SPEEDY_NODE` = Your speedy node url from Moralis Speedy Nodes

`ACCOUNT`= Your private key

## Deploying Smart Contract

To deploy the smart contract run

```bash
  cd smart-contract
  npx hardhat run --network <your-network> scripts/deploy.js
```

Note the deployed contract address and update it in the `coinmarketcap-clone-blockchain/lib` folder along with the contract `abi`

## Deploying Project

Set up the netlify and then run

```bash
netlify deploy
```
