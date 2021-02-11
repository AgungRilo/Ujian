import React, { Component } from 'react';

class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {value, pilih}=this.props
        return ( 
            <option value={value}>{pilih}</option>
         );
    }
}
 
export default Option;