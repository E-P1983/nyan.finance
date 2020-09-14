import { Formatter, Contracts, Accounts } from './index';

/** Helper methods for everything Balances related */

/***
 * Convenience methods for current account
 */
async function getMyNyanBalance(){
    let account = await Accounts.getCurrentAccount();
    return getNyanBalance(account);
}

async function getMyCatnipBalance(){
    let account = await Accounts.getCurrentAccount();
    return getCatnipBalance(account);
}

async function getMyDarkNyanBalance(){
    let account = await Accounts.getCurrentAccount();
    return getDarkNyanBalance(account);
}

/***
 * Convenience methods for current account (staked)
 */
async function getMyStakedNyanAmount(){
    let account = await Accounts.getCurrentAccount();
    return getStakedNyanAmount(account);
}

async function getMyStakedNipUniAmount(){
    let account = await Accounts.getCurrentAccount();
    return getStakedNipUniAmount(account);
}

/**
 * Function to fetch the Nyan balance for a given account
 * @param {string} account 
 */
async function getNyanBalance(account){
    let instance = await Contracts.getNyanContractInstance();
    let nyanBalance = await instance.methods.balanceOf(account).call();
    return Formatter.getRoundedBalance(nyanBalance);
}

/**
 * Function to fetch the Catnip balance for a given account
 * @param {string} account 
 */
async function getCatnipBalance(account){
    let instance = await Contracts.getCatnipContractInstance();
    let CatnipBalance = await instance.methods.balanceOf(account).call();
    return Formatter.getRoundedBalance(CatnipBalance);
}

/**
 * Function to fetch the DarkNyan balance for a given account
 * @param {string} account 
 */
async function getDarkNyanBalance(account){
    let instance = await Contracts.getDarkNyanContractInstance();
    let darkNyanBalance = await instance.methods.balanceOf(account).call();
    return Formatter.getRoundedBalance(darkNyanBalance);
}

/**
 * Function to fetch the staked Nyan amount for a given account
 * @param {string} account 
 */
async function getStakedNyanAmount(account){
    let instance = await Contracts.getCatnipContractInstance();
    let stakedNyanBalance = await instance.methods.getAddressStakeAmount(account).call();
    return Formatter.getRoundedBalance(stakedNyanBalance);
}

/**
 * Function to fetch the staked NipUni amount for a given account
 * @param {string} account 
 */
async function getStakedNipUniAmount(account){
    let instance = await Contracts.getDarkNyanContractInstance();
    let stakedDNyanBalance = await instance.methods.getNipUniStakeAmount(account).call();
    return Formatter.getRoundedBalance(stakedDNyanBalance);
}

 // Export each function
 export {
    getMyNyanBalance,
    getMyCatnipBalance,
    getMyDarkNyanBalance,
    getMyStakedNyanAmount,
    getMyStakedNipUniAmount,
    getNyanBalance,
    getCatnipBalance,
    getDarkNyanBalance,
    getStakedNyanAmount,
    getStakedNipUniAmount,
 };