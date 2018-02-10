var EventEmitter = artifacts.require("./EventEmitter.sol");
module.exports = function(deployer) {
  deployer.deploy(EventEmitter);
};

