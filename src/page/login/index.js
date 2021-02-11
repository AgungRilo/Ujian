import React, { Component } from 'react';
import "./login.css"
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }
    
    setValue = el =>{
        this.setState({
           [el.target.name] : el.target.value
           
        })
        
    }

    render() {
        const {username,password} = this.state
        if(this.props.statusLogin){
            return <Redirect to="/form"/>
        }
        return (
            <div>
                <div class="container">

                    <label>Username : </label>
                    <input type="text" placeholder="Enter Username" name="username" onChange={this.setValue}/>
                    <label>Password : </label>
                    <input type="password" placeholder="Enter Password" name="password"onChange={this.setValue} />
                    <button type="submit" onClick={this.props.doLogin({username, password})}>Login</button>

                </div>

            </div>
        );
    }
}

export default Login;