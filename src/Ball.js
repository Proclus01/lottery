import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
    render() {
        return (
            <div className="ball">
                <p className="number">{this.props.number}</p>
            </div>
        );
    }
}

export default Ball;