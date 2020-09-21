import React, { Component } from "react";
import { Button, Col, Row } from 'react-bootstrap';

export default class AmountField extends Component {
    
    state = {
        amount: 0
    }

    setMaxAmount = () => {
        this.setState({amount: this.props.maxAmount})
    }

    setInputField() {
        if (this.state.amount > 0) {
          return this.state.amount;
        } else {
          return '';
        }
      }

    /** setters & modifiers */
    updateInput(e) {
        console.log(typeof e.target.value)
        console.log(this.props.maxAmount)
        if (this.props.maxAmount >= e.target.value){
            // do nothing
            this.setState({amount: e.target.value})
        } else {
            this.setState({amount: this.props.maxAmount})
        }
    }

    componentDidMount = async () => {
        console.log(this.props)
        
    }

    render() {
        // if (!this.state.loaded) {
        //   return <div>Loading Web3, accounts, and contract...</div>;
        // }
        return (
            <Row>
                <Col>
                    <input 
                        className="input-amount" 
                        placeholder="Amount..."
                        value={this.setInputField()} 
                        onChange={this.updateInput.bind(this)}
                        type="number"
                        autoFocus={true}>
                    </input>
                </Col>
                <Col lg={2} className="align-items-center my-auto">
                    <Button variant="primary pink-button" onClick={this.setMaxAmount}>Max</Button>
                </Col>
            </Row>
        )
    }
}