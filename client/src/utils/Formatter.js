const Web3Utils = require('web3-utils');

function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

function fromWei(amount){
    return Web3Utils.fromWei(amount)
}

function getRoundedBalance(amount, precision=2){   
    let weiAmount = Web3Utils.fromWei(amount);
    return toFixed(weiAmount, precision);
}

// Export each function
export {
    getRoundedBalance,
    fromWei,
    toFixed
 };
