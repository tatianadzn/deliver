import React, {Component} from 'react';
import LogIn from "../../Containers/LogIn/LogIn";
import SignUp from "../../Containers/SignUp/SignUp";
import './Auth.css'

import store from "../../store/store";

class Auth extends Component{

    render() {
        if (store.isRegister){
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

export default Auth;