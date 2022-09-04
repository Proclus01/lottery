import React, { Component } from 'react';
import Ball from './Ball.js';
import './Lottery.css';

class Lottery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ball1: this.rng(),
            ball2: this.rng(),
            ball3: this.rng(),
            ball4: this.rng(),
            ball5: this.rng(),
            ball6: this.rng()            
        }
    }

    rng() {
        return Math.floor((Math.random() * 40) + 1);
    }

    render() {
        return (
            <div className="lottery">
                {Object.keys(this.state).map(
                    key => ( <Ball key={key} number={this.state[key]} /> )
                )}
            </div>
        );
    }
}

export default Lottery;