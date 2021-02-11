import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div class="topnav">
                    <a href="#home">Home</a>
                    <a class="active" href="#news">Inventory</a>
                    <a href="#contact">Transaction</a>
                </div>
            </div>
        );
    }
}

export default Nav;
