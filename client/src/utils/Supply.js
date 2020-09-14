import { Formatter, Contracts } from './index';

/** Helper methods for everything Supply related */


/***
 * Convenience methods for current supply
 */
async function getNyanSupply() {

    let instance = await Contracts.getNyanContractInstance();
    let nyanSupply = await instance.methods.totalSupply().call();
    return Formatter.getRoundedBalance(nyanSupply);
}

async function getCatnipSupply() {
    let instance = await Contracts.getCatnipContractInstance();
    let catnipSupply = await instance.methods.totalSupply().call();
    return Formatter.getRoundedBalance(catnipSupply);
}

async function getDarkNyanSupply() {
    let instance = await Contracts.getDarkNyanContractInstance();
    let darkNyanSupply = await instance.methods.totalSupply().call();
    return Formatter.getRoundedBalance(darkNyanSupply);
}

// Export each function
export {
    getNyanSupply,
    getCatnipSupply,
    getDarkNyanSupply
 };

