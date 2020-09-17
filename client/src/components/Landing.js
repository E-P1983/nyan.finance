import React, { Component } from "react";
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Container, Row, Col, Modal, Button, Image } from 'react-bootstrap';

import "../App.css";

import etherCat from '../assets/NyanFinanceCat.png';

import { Web3, Balances, Supply } from '../utils';

export default class Landing extends Component {

  closeMissingWeb3Modal = () => {
    this.setState({
      showMissingWeb3Modal: false
    });
  }
  
  state = {
    showMissingWeb3Modal: false
  };

   
  componentDidMount = async () => {
    document.title = "Nyan.finance";
  };

  launchApp = async () => {
    // check for web3 instance. If so, let it connect.
    let isPresent = await Web3.checkWeb3IsPresent();
    
    //console.log(isPresent)
    //console.log(isConnected)

    if(!isPresent){
      console.log('missing')
      // show error
      this.setState({
        showMissingWeb3Modal: true
      })
    }
    else {
      // check if connected
      let accounts = Web3.getAccounts();
      console.log(accounts);
      this.props.history.push('/app')
    }
    
  }

  render() {
    // if (!this.state.loaded) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (

      <Container fluid>
        <br/><br/>
        <Row className="justify-content-center align-items-center">
            <Col lg="auto" className=""></Col>
            <Col lg={6}>
                <div className="text-center header-image">
                  <Image src={etherCat} fluid/>
                </div>
                <h1 className="title">NYAN.FINANCE</h1>
                <p className="text-center">Community Governed Hedge Fund</p>
            </Col>
            <Col lg="auto" className=""></Col>
        </Row>
        
        <br/><br/><br/>

        <Row className="justify-content-center align-items-center">
            <Col lg="auto" className=""></Col>
            <Col lg={2} className="landing-button-left justify-content-between text-right"><Button className="btn-lg pink-button" onClick={this.launchApp}>Launch app</Button></Col>
            <Col lg={2} className="landing-button-right"><Button className="btn-lg pink-button">Read the docs</Button></Col>
            <Col lg="auto" className=""></Col>
        </Row>
    
        <Modal className="modal-box" show={this.state.showMissingWeb3Modal}>
          <Modal.Header>
            <Modal.Title className="modal-box-title">Connection issue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>We were unable to connect to a valid wallet. Please make sure you have a Web3 compatible wallet loaded,
                and you have approved the request to connect.<br/>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary pink-button" onClick={this.closeMissingWeb3Modal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </Container>
    );
  }
}
