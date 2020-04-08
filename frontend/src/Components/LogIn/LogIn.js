import React, {Component} from 'react';
import './LogIn.css';

import {connect} from 'react-redux';
import {to_unregistered} from "../../store/actionCreators";

class LogIn extends Component{

    render() {
        return(
            <div className={"log-in"}>
                <form>
                    <input type={'text'} className={'input-field'} placeholder={"E-mail"}/>
                    <input type={'password'} className={'input-field'} placeholder={"Пароль"}/>
                    <button type={'submit'} className={'submit-button'}>Войти</button>
                </form>
                <button className={'to-register-button'} onClick={() => {this.props.to_unregistered()}}>Еще не зарегистрированы?</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthorised: state.isAuthorised
    };
};

const mapDispatchToProps = {
    to_unregistered
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);