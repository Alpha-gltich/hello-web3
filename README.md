# HelloWeb3

A simple full-stack dApp demonstrating core Web3 development skills: a Solidity smart contract, automated tests, local deployment, and a frontend that connects to a wallet and interacts with the contract on-chain.

## What it does

- Stores a public message on-chain, set at deployment
- Only the contract owner can update the message
- A browser frontend connects via MetaMask, reads the current message, and lets the owner submit a new one

## Features

- **Smart contract** (`contracts/HelloWeb3.sol`) — constructor-set initial message, owner-gated `setMessage()`, public getters for `message` and `owner`
- **Automated tests** (`test/HelloWeb3.ts`) — verifies deployment state, message updates, and access control (non-owner writes are rejected)
- **Local deployment** via Hardhat Ignition (`ignition/modules/HelloWeb3.ts`)
- **Frontend** (`frontend/index.html`) — single-file dApp using ethers.js v6, connects MetaMask, reads and writes the on-chain message

## Tech stack

- Solidity ^0.8.28
- Hardhat 3 (node:test runner + viem)
- Hardhat Ignition (deployment)
- ethers.js v6 (frontend)
- MetaMask (wallet connection)

## Running it locally

**1. Install dependencies**

    npm install

**2. Compile the contract**

    npx hardhat compile

**3. Run the tests**

    npx hardhat test nodejs

**4. Start a local blockchain** (keep this terminal running)

    npx hardhat node

**5. Deploy the contract** (in a separate terminal)

    npx hardhat ignition deploy ignition/modules/HelloWeb3.ts --network localhost

**6. Run the frontend**

Open `frontend/index.html` with a local server (e.g. VS Code's Live Server extension). Opening the file directly (`file://`) will not work — MetaMask requires `http://`.

**7. Connect MetaMask**

- Add a custom network: RPC URL `http://127.0.0.1:8545`, Chain ID `31337`
- Import one of the test accounts printed by `npx hardhat node` (e.g. Account #0) using its private key
- Click "Connect Wallet" on the page

## Known limitations

- Deployed only to a local Hardhat network — not yet deployed to a public testnet
- No frontend styling beyond basic layout

## Future improvements

- Deploy to a public testnet (e.g. Sepolia)
- Add event listening so the UI updates in real time when the message changes
- Improve UI styling