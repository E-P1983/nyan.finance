import React, { Component } from "react";
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

import "../App.css";

import nyanGif from '../assets/nyan-logo.png';
import nyanLogo from '../assets/nyan-logo.png';
import stakeLogo from '../assets/Nyan_stake.gif';
import mineLogo from '../assets/Dark_Nyan.gif';
import pumpLogo from '../assets/Nyan_pump.gif';


import etherCatHead from '../assets/NyanFinanceCatHead-Small.png';

import { Web3, Balances, Supply } from '../utils';

export default class Home extends Component {

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

        <br/>

        <Row className="justify-content-center align-items-start">
            <Col lg="auto" className=""></Col>
            <Col lg={6}>
                <div className="align-items-center text-center subpage-header">
                  <Image src={etherCatHead} className="subpage-headder-image"/>
                  <span className="subpage-header-title ">LET'S START</span>
                  <p className="text-center subpage-header-subtext">New to Yield farming? Read our extensive guide <a href="#">here</a></p>
                </div>
                
            </Col>
            <Col lg="auto" className=""></Col>
        </Row>
        
        <br/><br/><br/>

        <Row className="justify-content-center align-items-center">
            <Col lg="auto"></Col>

            <Col lg={3}>
                <Link to="/stake" className="router-link">
                    <div className="card actionbox">
                        <div className="card-horizontal">
                            <div className="img-square-wrapper">
                                <img className="actionbox-logo-image" alt="nyan logo" src={stakeLogo}/>
                            </div>
                            <div className="card-body actionbox-body">
                                <h4 className="card-title">Stake</h4>
                                <p className="card-text">Stake your NYAN and earn CATNIP!</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </Col>

            <Col lg={3}>
                <div className="card actionbox">
                    <div className="card-horizontal">
                        <div className="img-square-wrapper">
                            <img className="actionbox-logo-image" alt="nyan logo" src={mineLogo}/>
                        </div>
                        <div className="card-body actionbox-body">
                            <h4 className="card-title">Mine</h4>
                            <p className="card-text">Provide liquidity and earn DNyan</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={3}>
                <div className="card actionbox">
                    <div className="card-horizontal">
                        <div className="img-square-wrapper">
                            <img className="actionbox-logo-image" alt="nyan logo" src={pumpLogo}/>
                        </div>
                        <div className="card-body actionbox-body">
                            <h4 className="card-title">Pump</h4>
                            <p className="card-text">Community Hedgefund</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg="auto"></Col>

        </Row>
        
        <Row className="learn-more">
            <Col lg="auto">Pro Tip: Stake your CATNIP in the NIP/ETH SLP token pool yields DNYAN, a rarity. <br/>
            Learn more about NYAN, CATNIP and DNYAN and the ecosystem <a href="#">here</a>.</Col>
        </Row>
      </Container>
    );
  }
}
