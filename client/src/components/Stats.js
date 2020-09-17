import React, { Component } from "react";
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import "../App.css";

import nyanGif from '../assets/nyan-logo.png';
import nyanLogo from '../assets/nyan-logo.png';

import { Web3, Balances, Supply } from '../utils';

export default class Stats extends Component {

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
        
        <Row className="justify-content-center align-items-center">

            <Col lg="auto">
                <div styles={{backgroundImage: `url(${nyanGif})`}}></div>
                <h1 className="title">NYAN.FINANCE</h1>
                <p>Stake NYAN tokens to claim your very own CATNIP!</p>
                <p>New to Yield farming? Read our extensive guide <a href="#">here</a></p>
            </Col>
        </Row>
        
        <br/>

        <Row className="justify-content-center align-items-center">
          <Col lg="auto"></Col>
          <Col lg={3} className="text-center">
            
            <div class="card actionbox">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img className="actionbox-logo-image" alt="nyan logo" src={nyanLogo}/>
                    </div>
                    <div class="card-body actionbox-body">
                        <p class="card-text">Your NYAN Balance</p>
                        <h4 class="card-title">1.35</h4>
                    </div>
                </div>
                <div class="card-footer actionbox-footer">
                    <small class="text-muted"><Button className="btn-sm pink-button">Stake NYAN</Button></small>
                </div>
            </div>
          </Col>

          <Col lg={3} className="text-center">
            
            <div class="card actionbox">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img className="actionbox-logo-image" alt="nyan logo" src={nyanLogo}/>
                    </div>
                    <div class="card-body actionbox-body">
                        <p class="card-text">Total NYAN Supply</p>
                        <h4 class="card-title">30000</h4>
                    </div>
                </div>
                <div class="card-footer actionbox-footer">
                    <small class="text-muted"><Button className="btn-sm pink-button">Get NYAN</Button></small>
                </div>
            </div>
          </Col>
          <Col lg="auto"></Col>
        </Row>
        
        <br/>
        
        <Row className="justify-content-center align-items-center">
          <Col lg="auto"></Col>
          <Col lg={3} className="text-center">
            
            <div class="card actionbox">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img className="actionbox-logo-image" alt="nyan logo" src={nyanLogo}/>
                    </div>
                    <div class="card-body actionbox-body">
                        <p class="card-text">Total CATNIP Supply</p>
                        <h4 class="card-title">5000</h4>
                    </div>
                </div>
                <div class="card-footer actionbox-footer">
                    <small class="text-muted"><Button className="btn-sm pink-button">Stake NIP/ETH</Button></small>
                </div>
            </div>
          </Col>

          <Col lg={3} className="text-center">
            
            <div class="card actionbox">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img className="actionbox-logo-image" alt="nyan logo" src={nyanLogo}/>
                    </div>
                    <div class="card-body actionbox-body">
                        <p class="card-text">Total dNYAN Supply</p>
                        <h4 class="card-title">500</h4>
                    </div>
                </div>
                <div class="card-footer actionbox-footer">
                    <small class="text-muted"><Button className="btn-sm pink-button">Claim dNyan</Button></small>
                </div>
            </div>
          </Col>
          <Col lg="auto"></Col>
        </Row>

        <br/><br/>

        <Row className="learn-more">
            <Col lg="auto">Pro Tip: Stake your CATNIP in the NIP/ETH SLP token pool yields DNYAN, a rarity. <br/>
            Learn more about NYAN, CATNIP and DNYAN and the ecosystem <a href="#">here</a>.</Col>
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
