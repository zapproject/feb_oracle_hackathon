// Load Ethereum
const Eth = require('ethjs');
const fs = require('fs');
const privateToAccount = require('ethjs-account').privateToAccount;//ethjs module for handling ethereum accounts
const provider = 'http://127.0.0.1:8545';//address of node

const eth = new Eth(new Eth.HttpProvider(provider));

/*
provider account
*/

//add ethereum private key(must have test ether. can export from metamask or myetherwallet. for public testnet, rinkeby faucet at https://www.rinkeby.io/#faucet)
const privateKeyString = "aa4b1ff1a70c4c55b9c5bd7bacb5fdd24dcc3e659f877faef7df3a34b0b5af98";

//create account object from private key string
const account = privateToAccount(privateKeyString);

/*
contract
*/

//load contract interface file
const eventEmitterFile = fs.readFileSync("event_emitter_abi.json");

//parse interface text to json object
const emitterAbi = JSON.parse(eventEmitterFile);

//contract address(deployed to rinkeby testnet)
const emitterAddress = "0x856171b4c83ac0a9dd78b8a1062f3ca878db6928";

//instantiate contract object
const eventEmitterContract = eth.contract(emitterAbi).at(emitterAddress);

//make contract fire desired query with oracleAddress
function triggerContractQuery(queryString, oracleAddress){

    //call contract fireEvent method
    EventEmitter.fireEvent(queryString, oracleAddress).then((success) =>{
        console.log(null, success);

    }).catch((err) => {
        console.log(err);
    });

}

//respond to contract query
function respondContractQuery(responseString){

    //call contract callback method
    EventEmitter.callback(responseString).then((success) =>{
        console.log(null, success);

    }).catch((err) => {
        console.log(err);
    });

}

/*
Handle Query events from EventEmitter contract
event Query(string queryString, address queryAddress);
*/

// Create the Event filter for solidity event
let filter = eventEmitterContract.Query().new((err, res) => {
    if ( err ) {
        throw err;
    }

});

// Watch the event filter
filter.watch().then((result) => {
    
    // execute oracle worker here

});


