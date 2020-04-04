import React, {Component} from 'react';
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import './Auth.css'

import {connect} from 'react-redux';

class Auth extends Component{

    render() {
        if (this.props.isRegistered){
            return(
                <div className={"Auth"}>
                    <div className={"helper"}><LogIn/></div>
                </div>

            )
        } else {
            return(
                <div className={"Auth"}>
                    <div className={"helper"}><SignUp/></div>
                </div>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        isRegistered: state.isRegistered
    };
};

export default connect(mapStateToProps)(Auth);