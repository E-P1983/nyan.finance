/** All interations with the contracts */
import { Web3 } from './index';

import NyanToken from "../contracts/NyanToken.json";
import CatnipToken from "../contracts/CatnipToken.json";
import DarkNyan from "../contracts/DarkNyan.json";
 
async function getNyanContractInstance(){
    if(!window.nyanCI) {
        const instance = await Web3.getInstance();
        window.nyanCI = new instance.eth.Contract(
            NyanToken.abi,
            process.env.REACT_APP_NYAN_TOKEN_CONTRACT_ADDRESS
        );
    }
    return window.nyanCI
}

 
async function getCatnipContractInstance(){
    if(!window.catnipCI) {
        const instance = await Web3.getInstance();
        window.catnipCI = new instance.eth.Contract(
            CatnipToken.abi,
            process.env.REACT_APP_CATNIP_TOKEN_CONTRACT_ADDRESS
        );
    }
    return window.catnipCI
}

async function getDarkNyanContractInstance(){
    if(!window.dNyanCI) {
        const instance = await Web3.getInstance();
        window.dNyanCI = new instance.eth.Contract(
            DarkNyan.abi,
            process.env.REACT_APP_DARKNYAN_TOKEN_CONTRACT_ADDRESS
        );
    }
    return window.dNyanCI
}

async function checkApproval(){
    
}

 // Export each function
 export {
    getNyanContractInstance,
    getCatnipContractInstance,
    getDarkNyanContractInstance
 };