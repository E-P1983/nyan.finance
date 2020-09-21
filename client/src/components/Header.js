import React, { Component, useContext, useState} from "react";
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


import { useGlobal } from 'reactn';

import etherCat from '../assets/NyanFinanceCat-Small.png';

import { Web3, Balances, Supply } from '../utils';

export default function Header(props) {
    
    const [ web3Instance ] = useGlobal('web3Instance');

/*
 extends Component {
    
    state = {
        isConnected: false
    }

    constructor(props) {
        const globalState = useContext(store);
        console.log(globalState); // this will return { color: red }
    }

    componentDidMount = async () => {
        
    }

    static getDerivedStateFromProps(nextProps, prevState){

        console.log(nextProps);
        /*
        if(nextProps.someValue!==prevState.someValue){
          return { someState: nextProps.someValue};
       }x
       else  return null;
     }
     */
    
    // if (!this.state.loaded) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
        <Row className="header">
            <Col sm={4} lg={4}> 
                <Link to="/" className="router-link">
                <div className="logo-container">
                    <Image src={etherCat} className="logo-image"></Image>
                    <span className="logo-text">NYAN.FINANCE</span>
                </div>
                </Link>
            </Col>

            <Col sm={2} lg={2}>
            </Col> 

            <Col sm={6} lg={6} className="align-self-center">
                <div className="text-center">
                    <span><Link to="/" className="link">Home</Link></span>
                    {web3Instance ? <span><Link to="/app" className="link">Stake</Link> </span> : null }
                    {web3Instance ? <span><Link to="/stats" className="link">Your balances</Link></span> : null }
                    <span><Link to="/learnmore" className="link">Learn more</Link></span>
                    
                </div>
                
            </Col>
        </Row>
    )
    
}