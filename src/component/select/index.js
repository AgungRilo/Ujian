import React, { Component } from 'react';  

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {id, name, value, onChange}=this.props
        return ( 
            <div  className="col-75">
                <select id={id} name={name} value={value} onChange={onChange}>

                </select>
            </div>
         );
    }
}
 
export default Select;