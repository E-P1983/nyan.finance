import React, { Component } from "react";

import { Container, Row, Col } from 'react-bootstrap';

import Staking from "./Staking";
import Pump from "./Pump";
import Mine from "./Mine";

import "./App.css";

import nyanGif from './assets/nyan-small.gif';

import { Web3, Contracts, Balances, Supply } from './utils';

class App extends Component {
  state = {
    accounts: null,
    isViewingStaking : false,
    isViewingPump: false,
    isViewingGifts: false,
    isViewingMine: false,
    nyanBalance: 0,
    darkNyanBalance: 0,
    catnipBalance: 0,
    totalNyanSupply: 0,
    totalNyanStaked: 0,
    totalCatnipSupply: 0,
    totalDNyanSupply: 0,
    myStakedNyanAmount: 0,
    myStakedDNyanAmount: 0
   };

   /*
   mediaQuery = {
    desktop: 1200,
    tablet: 768,
    phone: 576,
  };*/

  toggleStakingView = () => {
    this.setState({
      isViewingStaking: !this.state.isViewingStaking
    });
  };


  togglePumpView = () => {
    this.setState({
      isViewingPump: !this.state.isViewingPump
    })
  }

  toggleMineView = () => {
    this.setState({
      isViewingMine: !this.state.isViewingMine
    })
  }

  _getWeb3 = () => {
    return this.web3;
  }


  componentDidMount = async () => {
    document.title = "Nyan.finance";

    this.web3 = await Web3.getInstance();
    
    // get accounts
    this.setState({accounts: Web3.getAccounts()});

    // Get the contract instance.
    this.networkId = await Web3.getNetworkId();

    this.setState({
      nyanBalance: await Balances.getMyNyanBalance(),
      catnipBalance: await Balances.getMyCatnipBalance(),
      darkNyanBalance: await Balances.getMyDarkNyanBalance(),
      stakedNyanAmount: await Balances.getMyStakedNyanAmount(),
      stakedNipUniAmount: await Balances.getMyStakedNipUniAmount(),
      totalNyanSupply: await Supply.getNyanSupply(),
      totalCatnipSupply: await Supply.getCatnipSupply(),
      totalDNyanSupply: await Supply.getDarkNyanSupply()
    })
  };


  render() {
    // if (!this.state.loaded) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (

      <Container fluid>

        <Row className="header">
          <Col sm={8}> 
            <div className="Logo">NYAN.FINANCE</div>
            <div styles={{backgroundImage: `url(${nyanGif})`}} className="Nyan-cat"></div>
          </Col>
          <Col sm={4}>
            <div className="ticker align-right">
              Balances: <b>{this.state.nyanBalance}</b> NYAN - <b>{this.state.catnipBalance}</b> NIP - <b>{this.state.darkNyanBalance}</b> dNYAN
              <br/>
              Staked: <b>{this.state.stakedNyanAmount}</b> NYAN - <b>{this.state.stakedNipUniAmount}</b> NIP/ETH
              <br/>
              Supply: <b>{this.state.totalNyanSupply}</b> NYAN - <b>{this.state.totalCatnipSupply}</b> NIP - <b>{this.state.totalDNyanSupply}</b> DNyan
            </div>
          </Col>
        </Row>

        <br/><br/>
        
        <Row className="justify-content-center align-items-center">
          <Col lg="auto"></Col>
          <Col lg={3} className="text-center">
            <div className="Option stake" onClick={this.toggleStakingView}>
              <h4>STAKE NYAN</h4>
            </div>
          </Col>
          <Col lg={3} className="text-center">
            <div className="Option mine" onClick={this.toggleMineView}>
              <h4>MINE NIP/ETH</h4>
            </div>
          </Col>
          <Col lg={3} className="text-center">
            <div className="Option pumped" onClick={this.togglePumpView}>
              <h4>PUMP</h4>
            </div>
          </Col>
          <Col lg="auto"></Col>
        </Row>

        
        <Row className="fixed-bottom">
          <Col lg={4}>
            <div className="links-box align-left">
              <a href="https://etherscan.io/token/0xc9ce70a381910d0a90b30d408cc9c7705ee882de">NYAN Token Etherscan</a> . <a href="https://uniswap.info/pair/0x544cd63c9a3363dab66733bf8073cb981db58cba">NYAN-ETH Uniswap</a>
            </div>
          </Col>
          <Col>{/*
              NYAN address: <p className="addr-pink">0xc9ce70a381910d0a90b30d408cc9c7705ee882de</p>
              CATNIP address: <p className="addr-pink">0xd2b93f66fd68c5572bfb8ebf45e2bd7968b38113</p>
          DARK NYAN address: <p className="addr-pink">0x23b7f3a35bda036e3b59a945e441e041e6b11101</p>*/}
          </Col>
          <Col lg={3}>
            <div className="social-box align-right">
                <a target="_blank" rel="noopener noreferrer" href={"https://github.com/geass-zero/nyan.finance"}>
                  <div className="social-icon git"></div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={"https://www.twitter.com/nyanfinance"}>
                  <div className="social-icon twit"></div>
                </a> 
                <a target="_blank" rel="noopener noreferrer" href={"https://t.me/nyanfinance"}>
                  <div className="social-icon tele"></div>
                </a>
            </div>
          </Col>
        </Row>
        
        {this.state.isViewingStaking ? <Staking toggle={this.toggleStakingView} /> : null}
        {this.state.isViewingPump ? <Pump toggle={this.togglePumpView} /> : null}
        {this.state.isViewingMine ? <Mine toggle={this.toggleMineView} /> : null}

      </Container>

      /*
      <div className="App">
        <div className="header">
          <div className="logo-container">
            <div className="Logo align-left">NYAN.FINANCE</div>
            <div className="ticker align-right">
              Balances: <b>{this.state.nyanBalance}</b> NYAN - <b>{this.state.catnipBalance}</b> NIP - <b>{this.state.darkNyanBalance}</b> dNYAN
              <br/>
              Staked: <b>{this.state.stakedNyanAmount}</b> NYAN - <b>{this.state.stakedNipUniAmount}</b> NIP/ETH
              <br/>
              Supply: <b>{this.state.totalNyanSupply}</b> NYAN - <b>{this.state.totalCatnipSupply}</b> NIP - <b>{this.state.totalDNyanSupply}</b> DNyan
            </div>
          </div>
          <div styles={{backgroundImage: `url(${nyanGif})`}} className="Nyan-cat"></div>
        </div>
        <div className="body"></div>
        <div className="footer"></div>
        
        <div className="Options-box">
          <div className="Option stake" onClick={this.toggleStakingView}>
            <h3>STAKE</h3>
          </div>
          <div className="Option mine" onClick={this.toggleMineView}>
          <h3>MINE</h3>
          </div>
          <div className="Option pumped" onClick={this.togglePumpView}>
          <h3>PUMP</h3>
          </div>
        </div>

        {this.state.isViewingStaking ? <Staking toggle={this.toggleStakingView} /> : null}
        {this.state.isViewingPump ? <Pump toggle={this.togglePumpView} /> : null}
        {this.state.isViewingMine ? <Mine toggle={this.toggleMineView} /> : null}

        <div className="address ny"><div className="addr-name">NYAN address:</div> <div className="addr-pink">0xc9ce70a381910d0a90b30d408cc9c7705ee882de</div></div>
        <div className="address ct"><div className="addr-name">CATNIP address:</div> <div className="addr-pink">0xd2b93f66fd68c5572bfb8ebf45e2bd7968b38113</div> </div>
        <div className="address dn"><div className="addr-name">DARK NYAN address:</div> <div className="addr-pink">0x23b7f3a35bda036e3b59a945e441e041e6b11101</div> </div>
        

        <div className="footer">
          <div className="links-box align-left">
            <a href="https://etherscan.io/token/0xc9ce70a381910d0a90b30d408cc9c7705ee882de">NYAN Token Etherscan</a> . <a href="https://uniswap.info/pair/0x544cd63c9a3363dab66733bf8073cb981db58cba">NYAN-ETH Uniswap</a>
          </div>
          <div className="social-box align-right">
              <a target="_blank" rel="noopener noreferrer" href={"https://github.com/geass-zero/nyan.finance"}>
                <div className="social-icon git"></div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={"https://www.twitter.com/nyanfinance"}>
                <div className="social-icon twit"></div>
              </a> 
              <a target="_blank" rel="noopener noreferrer" href={"https://t.me/nyanfinance"}>
                <div className="social-icon tele"></div>
              </a>
          </div>
          <div className="clear"></div>
        </div>
        {/* <div className="gift-icon"></div>
        <div className="gift-box">
          <textarea></textarea>
        </div> 
      </div>*/

    );
  }
}

export default App;
