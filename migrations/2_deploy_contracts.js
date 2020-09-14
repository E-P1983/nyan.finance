var NyanToken = artifacts.require("NyanToken.sol");
var CatnipToken = artifacts.require("CatnipToken.sol");
var DarknipToken = artifacts.require('DarkNyan.sol');

module.exports = async function(deployer) {
    await deployer.deploy(NyanToken, { gas: 17000000 })
    await deployer.deploy(CatnipToken, { gas: 17000000 })
    await deployer.deploy(DarknipToken, { gas: 17000000 })
}