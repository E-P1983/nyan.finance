/** All interations with the contracts */
import { Web3 } from './index';

 
async function getCurrentAccount(){
    if(window.account){
        return window.account;
    } else {
        let accounts = await Web3.getAccounts();
        window.account = accounts[0];
        return accounts[0];
    }
}

// Export each function
export {
    getCurrentAccount
 };