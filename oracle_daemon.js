// Load Ethereum
const Web3 = require('web3');
const fs = require('fs');
const provider = 'ws://localhost:8545';

const web3 = new Web3(new Web3.providers.WebsocketProvider(provider));
const eth = web3.eth;

/*
provider account
*/

//create account object from private key string
const account_number = "0x2592a882499edf8897256f95c2c50d689ce2657b";

/*
contract
*/

//load contract interface file
const eventEmitterFile = fs.readFileSync("event_emitter_abi.json");

//parse interface text to json object
const emitterAbi = JSON.parse(eventEmitterFile);

//contract address(deployed to rinkeby testnet)
const emitterAddress = "0x43fb05b642a784c882a59914cdab572aeb04a953";

//instantiate contract object
const eventEmitterContract = new eth.Contract(emitterAbi, emitterAddress);

//make contract fire desired query with oracleAddress
function triggerContractQuery(queryString, oracleAddress){

    //call contract fireEvent method
    eventEmitterContract.methods.fireEvent(queryString, oracleAddress)
        .send({from: account_number})
}

//respond to contract query
function respondContractQuery(responseString){

    //call contract callback method
    eventEmitterContract.methods.callBack(responseString)
        .send({from: account_number})
}

/*
Handle Query events from EventEmitter contract
event Query(string queryString, address queryAddress);
*/

const queryEvent = eventEmitterContract.events.Query();
queryEvent.on("data", callback);

function callback(q) {
    console.log(q);
    // do something
}

triggerContractQuery("1234", "0x8cc628f5492ca0cef7918e5bf9554800c4d01760");
