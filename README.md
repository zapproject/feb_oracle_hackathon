**UPDATE**
There were several problems in the way ethjs library was presented. We are working out solutions currently.
Let us shift focus of challenge to the data curation itself, ie the problem of creating a worker script that the oracle_daemon.js can call to retrieve data in a trusted manner.

This may encompass SSL verification, integration of data from several sources( ala finance oracle worker retrieves data from 3 different exchanges to satisfy example query 'BINANCE_BTC_ETH'), or data signed by separate workers with separate wallets( could leverage ethereumjs-tx for instance to accomplish signing https://github.com/ethereumjs/ethereumjs-tx)

Once we have the contract interface working again, we can integrate the worker scripts for you. 
Thank you for your patience




**See Update Above**
Object: Build a Smart Contract Data-Oracle

Using provided smart contract, deploy contract using truffle and trigger query events. 
We will be using testrpc as local testnode, truffle framework for deploying to local testnode, and the ethjs npm package for interfacing with ethereum network(s).

A NodeJS script with requisite smart contract hooks has been provided, oracle_daemon.js.
Here 
connection to ethereum node is made 
private key is loaded into ethereum account object 
queries from the deployed contract can be triggered 
events emitted from the contract can be caught by listener
worker script can be run to retrieve data
	contract callback function can be sent oracle response data

Our emphasis will be on curating good data. According to example query event

        Query('BINANCE-BTC-ETH', 0xB6175d90EC8aEb7419cbE4359C1d2c0157849547);

Oracle with ethereum address 0xB6175d90EC8aEb7419cbE4359C1d2c0157849547 might tell worker script to fetch BTC-ETH spot price on binance crypto exchange.

Each team will fork this repo:
https://github.com/zapproject/feb_oracle_hackathon


Stage : End to End Proof of Concept

->contract query event  
-> NodeJS daemon 
-> worker script 
-> NodeJS daemon 
-> contract callback

Getting started:
	For the first stage of this challenge, complete the end to end proof of concept on local node using testrpc, truffle and the script/contract provided.

Download the repo and enter its root directory.

    npm install .

#install truffle for deploying contracts locally
    npm install -g truffle


#To deploy contract enter ./local_deploy

#compile contract in contracts folder
     truffle compile
     truffle migrate

     Deploying EventEmitter...
      ... 0x7d0b2bbfdc2e38d8626e18613e6ecf4a61a89fb84bed77bdc02c980acc4ab13d
      EventEmitter: 0x856171b4c83ac0a9dd78b8a1062f3ca878db6928

Take the address from the above log and add to oracle_daemon.js

    #run local test node
    testrpc --acount=”<team private key>, 100000000000000000000”

    #run oracle daemon script
    node oracle_dameon.js

https://medium.com/@gus_tavo_guim/using-truffle-to-create-and-deploy-smart-contracts-95d65df626a2


Criteria:
Submissions will each be presented briefly at close of hackathon.
    
    Functionality
    Mechanisms for data integrity(SSL,multiple sources, multiple signatures)
    Concept presentation
    Security
    Ingenuity

Stage 2:
Deploy contract to rinkeby testnet and attempt to improve the integrity of your team’s oracle, for example, gathering data from multiple sources, providing SSL functionality, etc.

In stage 2, use the following private keys which will be loaded with rinkeby test ether

Team Private Keys:

B335ab2e8fb969e83d766e1c1d310aba3791a92c9dedaedc45f2e817aba59cc8

3b29c8c785c3f8918f4c76238baadd33ff62930d30bae1683752ccb33909709f


6228d608a0ece994e1e4e672b0405e0cc07fb707785a6a6848fa416b6f61d3ec


686256982c6316d659c12ee49699032a15671aaf7e7ba05b313cb0d084a673af


c8d596651ba8f5ed56e23c3f0a9e5e29cda835d475182fb7e254dd5dc26c5e80


6bb560b5bafa5aee54c34bdacc6186e24d3ec89f641e52230ec3ea1ea7809622


27c916e81dfe12921f3a88e89430c426da09a4a676afc4f334eecb164af4edd3


8c1edf9bd01bb0adfe67fd2dc4a713becf78bc3338a9a3e70f0a9390ecd245a1


d3d3f01c13d7d28c50be4953061d97501ad4b8caa3d740df3e11d4ec1bf38fbf


964aa204f5d0ed8eb57e521387d41a7b3cc0a5f1ce1ee477ed8fd6811edd0bb9


Test ether sanity check:

At least 1 team member obtain chrome extension:
https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en

In upper left hand corner of extension, navigate toward Rinkeby testnet. Verify existing ether balance is > 0. (if it is not, follow the steps at https://faucet.rinkeby.io to obtain rinkeby testnet ether at your team’s address, which can be found by clicking the 3 dots above the ‘Send’ button)


Dependencies

We are using ethjs as our example api wrapper for talking to ethereum nodes
https://github.com/ethjs/ethjs/blob/master/docs/user-guide.md

Some examples of ethjs https://github.com/ethjs/examples
 used in several contexts hosted here http://ethjs-examples.surge.sh/

Accounts are separated
https://github.com/ethjs/ethjs-account
