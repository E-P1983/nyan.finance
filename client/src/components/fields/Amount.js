import React, { Component } from "react";
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class AmountField extends Component {
    componentDidMount = async () => {

    }

    render() {
        // if (!this.state.loaded) {
        //   return <div>Loading Web3, accounts, and contract...</div>;
        // }
        return (
            <input 
                className="input-amount" 
                placeholder="Amount..."
                value={this.setMaxUnstakeInputField()} 
                onChange={this.updateUnStakingInput.bind(this)}
                type="number"
                autoFocus={true}>
            </input>
        )
    }
}