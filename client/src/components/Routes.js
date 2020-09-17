import React, { Component } from "react";
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

import "../App.css";

import nyanGif from '../assets/nyan-logo.png';
import nyanLogo from '../assets/nyan-logo.png';
import stakeLogo from '../assets/Nyan_stake.gif';
import mineLogo from '../assets/Dark_Nyan.gif';
import pumpLogo from '../assets/Nyan_pump.gif';

import { Web3, Balances, Supply } from '../utils';

import Home from "./Home";
import Stats from "./Stats";
import Stake from "./Stake";
import Landing from "./Landing";



export default class Routes extends Component {
    checkIfWeb3IsPresent = () => {
        //let check = Web3.checkWeb3IsPresent();
        console.log('HOW ABOUT THIS')
        //console.log(check)
        return true
    }

    componentDidMount = async () => {

    }

    render() {
        // if (!this.state.loaded) {
        //   return <div>Loading Web3, accounts, and contract...</div>;
        // }
        return (
            <div>
                <Route exact path='/' component={Landing}/>
                <Route exact path="/app">
                {this.checkIfWeb3IsPresent() ? <Home/> : <Redirect to="/" />}
                </Route>
                <Route exact path='/stake' component={Stake}/>
                <Route exact path='/stats' component={Stats}/>
            </div>
        )
    }
}