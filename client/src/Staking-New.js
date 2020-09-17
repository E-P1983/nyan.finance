import React, { Component } from "react";
import NyanToken from "./contracts/NyanToken.json";
import CatnipToken from "./contracts/CatnipToken.json";
import {getWeb3Var} from "./shared";

import { Modal, Button, Row, Col} from 'react-bootstrap';
import { Web3, Balances, Supply } from './utils';

import nyanLogo from './assets/nyan-logo.png';

export default class Staking2 extends Component {

    state = {
        show: false
    };
    
    
    componentDidMount = async () => {

        this.web3 = await Web3.getInstance();

        // get accounts
        this.setState({accounts: Web3.getAccounts()});

        /*
        this.getAllowance();
        this.getNyanSupply();
        this.getNyanBalance();
        this.getMyStakeAmount();
        this.getCatnipRewards();
        */
        
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        this.setState({loaded: true});
       
    };
  
    render() {
        return (
            <h1>Staking page</h1>
        /*
        <div className="modal">
            <div className="modal_content">
            <span className="close" onClick={this.handleClick}>
                &times;
            </span>
            <h1>STAKE NYAN</h1>
            <div className="amount-staked-box">
                <div className="inline-block amount-staked-image">
                <img className="balance-logo-image" alt="nyan logo" src={nyanLogo}/>
                </div>
                <div className="inline-block">
                <div className="top-box-desc">Amount staked</div>
                <div className="top-box-val nyan-balance">{this.state.stakedAmount}</div>
                </div>
                <div className="inline-block">
                <div className="top-box-desc">Your  NYAN balance</div>
                <div className="top-box-val nyan-balance">{this.state.nyanBalance}</div>
                </div>
            </div>
                <div className="max-container">
                <button className="as-link" onClick={this.setMaxNyan.bind(this)}>Max amount</button>
                </div>
                <div>
                    <input 
                    className="input-amount" 
                    placeholder="Amount..."
                    value={this.setInputField()} 
                    onChange={this.updateStakingInput.bind(this)}
                    type="number"
                    autoFocus={true}>
                    </input>
                </div>
                <br />
                {!this.state.isApproved ? <div className="button stake-button" onClick={this.approveNyan}>
                    {!this.state.isApproving ? <div>STEP 1/2: APPROVE</div> : null}
                    {this.state.isApproving ? <div>APPROVING...</div> : null}
                </div> : null}
                {this.state.isApproved ? <div className={`button stake-button ${this.state.stakeAmount > 0 && this.state.stakeAmount < this.state.nyanBalance ? "" : "disabled"}`} onClick={this.stakeNyan}>
                    {!this.state.isStaking ? <div>STEP 2/2: STAKE</div> : null}
                    {this.state.isStaking ? <div>STAKING...</div> : null}
                </div> : null}
                <div className={`button withdraw-button ${(this.state.nyanBalance > 0 || this.state.stakeAmount > 0) && (this.state.stakeAmount <= this.state.stakedAmount) ? "" : "disabled"}`} onClick={this.withdrawNyan}>
                    {!this.state.isWithdrawing ? <div>WITHDRAW</div> : null}
                    {this.state.isWithdrawing ? <div>WITHDRAWING...</div> : null}
                </div>

                <div>
                <div className="align-left"><h1>GET CATNIP</h1></div>
                <div className="align-right max-container">
                    <button className="as-link" onClick={this.getCatnipRewards}>UPDATE</button>
                </div>
                <div className="clear"></div>
                </div>
                <div>
                <p>INFO: Catnip rewards grow per block and are updated on each transaction(send) to functions 
                    with the "updateStakingRewards" modifier.</p>
                </div>
                <div>
                    <input className="input" disabled 
                    value={this.state.catnipRewards}
                    placeholder={this.state.catnipRewards} type="number"></input>
                </div>
                <br />
                <div className={`button stake-button ${this.state.catnipRewards > 0 ? "" : "disabled"}`} onClick={this.claimRewards}>CLAIM</div>
            </div>
        </div>
        */
        );
    }
}