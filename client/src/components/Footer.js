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



import { Web3, Balances, Supply } from '../utils';

export default class Footer extends Component {
    componentDidMount = async () => {

    }

    render() {
        // if (!this.state.loaded) {
        //   return <div>Loading Web3, accounts, and contract...</div>;
        // }
        return (
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
        )
    }
}