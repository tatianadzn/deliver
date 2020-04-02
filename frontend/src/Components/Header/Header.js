import React, { Component } from 'react';
import './Header.css'
import logo from './logo.png'

import store from "../../store/store";

class Header extends Component{

    ScrollUp(){
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    SignUpClick(){
        store.isRegister = false;
        //change isRegistered = false
        window.scroll({
            top: 930,
            behavior: 'smooth'
        });
    }

    LogInClick(){
        store.isRegister = true;
        //change isRegistered = true
        window.scroll({
            top: 930,
            behavior: 'smooth'
        });
    }

    render() {
        return(
            <div className={"bodyHeader"}>

                <button className={"button-logo"} onClick={this.ScrollUp}>
                    <img src={logo} className={"logo"} alt="logo"/>
                </button>

                {/*store isAuth*/}
                <button className={"button"} onClick={this.LogInClick}>Log In</button>
                <span className={"text"}>|</span>
                <button className={"button"} onClick={this.SignUpClick}>Sign Up</button>
            </div>
        );
    }
}

export default Header;