import React, { Component } from 'react';
import './Header.css'
import logo from './logo.png'

import {connect} from 'react-redux';
import {to_registered, to_unregistered, to_unauthorised} from "../../store/actionCreators";

class Header extends Component{

    ScrollUp(){
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }


    SignUpClick = () => {
        this.props.to_unregistered();
        window.scroll({
            top: 930,
            behavior: 'smooth'
        });
    };

    LogInClick = () => {
        this.props.to_registered();
        window.scroll({
            top: 930,
            behavior: 'smooth'
        });
    };


    render() {
        if (!this.props.isAuthorised){
            return(
                <div className={"bodyHeader"}>
                    <button className={"button-logo"} onClick={this.ScrollUp}>
                        <img src={logo} className={"logo"} alt="logo"/>
                    </button>

                    <button className={"button"} onClick={this.LogInClick}>Log In</button>
                    <span className={"text"}>|</span>
                    <button className={"button"} onClick={this.SignUpClick}>Sign Up</button>
                </div>
            )
        } else {
            return(
                <div className={"bodyHeader"}>
                    <button className={"button-logo"} onClick={this.ScrollUp}>
                        <img src={logo} className={"logo"} alt="logo"/>
                    </button>

                    <button className={"button"} onClick={() => {this.props.to_unauthorised()}}>Выйти</button>
                {/*    Имя и Выйти здесь*/}
                </div>
            );
        }


    }
}


const mapStateToProps = state => {
    return {
        isRegistered: state.isRegistered,
        isAuthorised: state.isAuthorised
    };
};

const mapDispatchToProps = {
    to_registered, to_unregistered, to_unauthorised
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);