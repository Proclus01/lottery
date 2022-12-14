import React, { Component } from 'react';
import Ball from './Ball.js';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({ length: this.props.maxBalls })       
        };
        this.handleClick = this.handleClick.bind(this);
    }

    rng() {
        return Math.floor((Math.random() * this.props.maxNum) + 1);
    }

    generate() {
        this.setState(
            currentState => ({
                nums: currentState.nums.map(
                    num => this.rng()
                )
            })
        );
    }

    handleClick() {
        this.generate();
    }

    render() {
        return (
            <div className="lottery-container">
                <h3>{this.props.title}</h3>
                    <div className="lottery">
                        {this.state.nums.map(
                            (key, idx) => ( <Ball key={idx} number={key} /> )
                        )}
                    </div>
                <button onClick={this.handleClick} className="generateButton">Generate</button>
            </div>
        );
    }
}

export default Lottery;