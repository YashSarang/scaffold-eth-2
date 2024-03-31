1. Initialize a Local Blockchain:
In the first terminal, run a local network:

yarn chain
starts a local Ethereum network using Hardhat


2. Deploy Your Smart Contract:
In the second terminal, deploy the test contract:

yarn deploy
deploys a test smart contract to the local network. The contract can be modified to suit your needs and can be found in:
Hardhat => packages/hardhat/contracts

3. Launch your NextJS Application:
In the third terminal, start your NextJS app:

yarn start

Visit your app on http://localhost:3000. 
You can interact with your smart contract using the contract component or the example ui in the frontend.