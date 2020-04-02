import React, {Component} from 'react';
import './LogIn.css';

class LogIn extends Component{
    render() {
        return(
            <div className={"log-in"}>
                <form>
                    <input type={'text'} className={'input-field'} placeholder={"Логин"}/>
                    <input type={'password'} className={'input-field'} placeholder={"Пароль"}/>
                    <button type={'submit'} className={'submit-button'}>Войти</button>
                </form>
                <button className={'to-register-button'}>Еще не зарегистрированы?</button>
            </div>
        )
    }
}

export default LogIn;