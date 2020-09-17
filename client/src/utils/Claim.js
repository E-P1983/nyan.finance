/** All interations with the contracts */
import { Accounts, Contracts } from './index';
 
async function unstakeMyNyan(amount){
    let instance = await Contracts.getCatnipContractInstance();
    let formattedAmount = this.web3.utils.toWei(amount.toString());

    try {
        let unstakeRes = await instance.methods.withdraw(formattedAmount).send({
            from: this.accounts[0]
        });
    
        if (unstakeRes["status"]) {
            this.setState({isWithdrawing: false, stakeAmount: 0});
            this.getMyStakeAmount();
        } else {
            this.setState({isWithdrawing: false});
        }
    } catch (error) {
        console.log(error);
    }
}

async function harvestMyCatnipRewards(){
    let instance = await Contracts.getCatnipContractInstance();
    let currentAccount = await Accounts.getCurrentAccount();
    instance.methods.getReward().send({
        from: currentAccount
    });
}



// Export each function
export {
    harvestMyCatnipRewards
 };