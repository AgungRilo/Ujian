import React, { Component } from 'react';
import "./style.css";



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: 'APLIKASI POHON HIAS'
         }
    }
    render() { 
        return ( 
            <div className="from">
                <h2>{this.state.title}</h2>
            </div>
         );
    }
}
 
export {Header};