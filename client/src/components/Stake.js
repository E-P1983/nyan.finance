import React, { Component } from "react";

import nyanGif from '../assets/nyan-logo.png';

import { Modal, Button, Row, Col, Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Balances, Claim } from '../utils';

import nyanLogo from '../assets/nyan-logo.png';
import catnipLogo from '../assets/catnip.png';

export default class Stake extends Component {

    state = {
        nyanBalance: 0,
        stakedNyanAmount: 0,
        catnipRewards: 0,
        showUnstakeModal: false
    };
    
    /**
     * Modal interactions
     */
    showUnstakeModal = () => {
        this.setState({
            showUnstakeModal: true
        })
    }

    handleCloseUnstakeModal = () => {
        this.setState({
            showUnstakeModal: false
        })
    }

    setMaxUnstakeInputField() {
        if (this.state.unstakeAmount > 0) {
          return this.state.unstakeAmount;
        } else {
          return '';
        }
    }

    setMaxUnstakeAmount = () => {
        console.log()
        this.setState({unstakeAmount: this.state.stakedNyanAmount});
    }

    /** setters & modifiers */
    updateUnStakingInput(e) {
        this.setState({unstakeAmount: e.target.value})
        
        if (this.state.unstakeAmount > this.state.allowance || this.state.nyanBalance){
        // disable button
        
        } else {
        // enable button
        }
        
        /*
        if (this.state.stakeAmount > this.state.allowance && !this.state.isApproved) {
            this.setState({isApproved: false})
        }
        */
    }
    
    /**
     * Claim the rewards for this active account
     */
    claimRewards = async () => {
        if(this.state.catnipRewards > 0){
          await Claim.harvestMyCatnipRewards()
          Balances.getMyCatnipRewards();
        }
    }

    componentDidMount = async () => {
        this.setState({
            nyanBalance: await Balances.getMyNyanBalance(),
            stakedNyanAmount: await Balances.getMyStakedNyanAmount(),
            catnipRewards: await Balances.getMyCatnipRewards()
        })
    };
  
    render() {
        return (
        <Container fluid>
        
            <Row className="justify-content-center align-items-center">
    
                <Col lg="auto">
                    <div styles={{backgroundImage: `url(${nyanGif})`}}></div>
                    <h1 className="title">STAKE NYAN</h1>
                    <p className="text-center">Deposit NYAN SLP Tokens and earn <b>CATNIP</b></p>
                    <p className="text-center">New to Yield farming? Read our extensive guide <a href="#">here</a></p>
                </Col>
            </Row>
            
            <br/>
    
            <Row className="justify-content-center align-items-center">
                <Col lg="auto"></Col>

                <Col lg={3}>
                <Card className="actionbox text-center">
                    <div className="text-center">
                        <Card.Img className="actionbox-logo-image top" variant="top" src={catnipLogo}/>
                    </div>
                    <Card.Body className="actionbox-body text-center">
                        <Card.Title className="card-title">{this.state.catnipRewards}</Card.Title>
                        <Card.Text className="card-text">
                            Catnip Earned
                        </Card.Text>
                        <Button className="pink-button actionbox-button" variant="primary" onClick={this.claimRewards}>Harvest</Button>
                    </Card.Body>
                </Card>
                    
                </Col>
                <Col lg={3}>
                    <Card className="actionbox text-center">
                        <div className="text-center">
                            <Card.Img className="actionbox-logo-image top" variant="top" src={nyanLogo}/>
                        </div>
                        <Card.Body className="actionbox-body text-center">
                            <Card.Title className="card-title">{this.state.stakedNyanAmount}</Card.Title>
                            <Card.Text className="card-text">
                            NYAN staked
                            </Card.Text>
                            <Button className="pink-button actionbox-button" variant="primary" onClick={this.showUnstakeModal}>Unstake</Button>
                            &nbsp;
                            <Button className="pink-button actionbox-button" variant="primary">Deposit</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="auto"></Col>
            </Row>
            
            <br/>

            <Row>
                <Col className="justify-content-center align-items-center text-center"><Link to="/app"><Button variant="link" className="as-link" >Back to overview</Button></Link></Col>
            </Row>

            <Modal className="modal-box" centered show={this.state.showUnstakeModal} onHide={this.handleCloseUnstakeModal}>
                <Modal.Header>
                    <Modal.Title className="modal-box-title">Withdraw NYAN</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="justify-content-right text-right max-container">
                        <Col><span class="darkpink-text">{this.state.stakedNyanAmount} NYAN available</span></Col>
                    </Row>
                    <Row>
                        <Col>
                        <input 
                            className="input-amount" 
                            placeholder="Amount..."
                            value={this.setMaxUnstakeInputField()} 
                            onChange={this.updateUnStakingInput.bind(this)}
                            type="number"
                            autoFocus={true}>
                        </input>
                        </Col>
                        <Col lg={2} className="align-items-center my-auto">
                            <Button variant="primary pink-button" onClick={this.setMaxUnstakeAmount}>Max</Button>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="justify-content-center align-items-center">
                    <Button variant="primary brown-button" onClick={this.handleCloseUnstakeModal}>
                        Cancel
                    </Button>
                    <Button variant="primary pink-button" onClick={this.handleCloseUnstakeModal}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
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