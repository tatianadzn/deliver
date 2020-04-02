import React, {Component} from 'react';
import './SignUp.css';

class SignUp extends Component{
    render() {
        return (
            <div className={"sign-up"}>
                <form>
                    <input type={'text'} className={'input-field'} placeholder={"Имя*"}/>
                    <input type={'text'} className={'input-field'} placeholder={"Фамилия*"}/>
                    <input type={'text'} className={'input-field'} placeholder={"Отчество"}/>
                    <input type={'text'} className={'input-field'} placeholder={"E-mail*"}/>
                    <input type={'password'} className={'input-field'} placeholder={"Телефон*"}/>
                    <input type={'text'} className={'input-field'} placeholder={"Почтовый адрес*"}/>
                    <input type={'password'} className={'input-field'} placeholder={"Пароль*"}/>
                    <input type={'password'} className={'input-field'} placeholder={"Повторите пароль*"}/>
                    <button type={'submit'} className={'submit-button'}>Зарегистрироваться</button>
                </form>
            </div>
        );
    }
}

export default SignUp;