import React, {Component} from 'react';
import 'three-dots';
import './LogIn.css';

import {connect} from 'react-redux';
import {to_unregistered, logIn} from  '../../../../store/actionCreators';

class LogIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: ''
        }
    }


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();

        const auth = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.logIn(auth);
    };


    render() {
        return(
            <div className={"log-in"}>

                <form>
                    {this.props.isAuthCorrect
                        ? <div>
                            <input type={'text'} name={'email'} className={'input-field'} placeholder={"E-mail"} onChange={this.handleChange}/>
                            <input type={'password'} name={'password'} className={'input-field'} placeholder={"Пароль"} onChange={this.handleChange}/>
                        </div>
                        : <div>
                            <input type={'text'} name={'email'} className={'input-field-wrong'} placeholder={"E-mail"} onChange={this.handleChange}/>
                            <input type={'password'} name={'password'} className={'input-field-wrong'} placeholder={"Пароль"} onChange={this.handleChange}/>
                        </div>
                    }

                    {this.props.isLoading
                        ? <button type={'submit'} className={'submit-button'} onClick={this.handleSubmit}><div className="dot-flashing"></div> </button>
                        : <button type={'submit'} className={'submit-button'} onClick={this.handleSubmit}>Войти</button>
                    }

                </form>
                <button className={'to-register-button'} onClick={() => {this.props.to_unregistered()}}>Еще не зарегистрированы?</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthorised: state.isAuthorised,
        isAuthCorrect: state.isAuthCorrect,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = {
    to_unregistered, logIn
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);