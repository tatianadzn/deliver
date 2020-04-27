import React, {Component} from 'react';
import './SignUp.css';
import {signUp} from '../../../../store/actionCreators';
import {connect} from "react-redux";

class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: {
                value: '',
                isCorrect: true
            },
            password: {
                value: '',
                isCorrect: true
            },
            last_name: {
                value: '',
                isCorrect: true
            },
            first_name: {
                value: '',
                isCorrect: true
            },
            second_name: {
                value: '',
                isCorrect: true
            },
            user_role: {
                value: 'USER'
            },
            address: {
                value: '',
                isCorrect: true},
            mobile: {
                value: '',
                isCorrect: true
            },
            repassword: {
                value: ''
            }
        }
    }

    validate = (userprop, prop) => {
        if (userprop === '')
        {
            this.setState({[prop]: {value: userprop, isCorrect: false}});
            return false;
        } else {
            this.setState({[prop]: {value: userprop, isCorrect: true}});
            return true;
        }
    };

    validateCyrillic = (userprop, prop) => {
        const cyrillicPattern = /^[\u0400-\u04FF ]+$/;
        if (!cyrillicPattern.test(userprop))
        {
            this.setState({[prop]: {value: userprop, isCorrect: false}});
            return false;
        } else {
            this.setState({[prop]: {value: userprop, isCorrect: true}});
            return true;
        }
    };

    validateEmail = (userprop, prop) => {
        const emailPattern = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        if (!emailPattern.test(userprop))
        {
            this.setState({[prop]: {value: userprop, isCorrect: false}});
            return false;
        } else {
            this.setState({[prop]: {value: userprop, isCorrect: true}});
            return true;
        }
    };


    validation = (user) => {
        let isCorrect = this.validate(user.email, 'email') && this.validateEmail(user.email, 'email');
        isCorrect &= this.validate(user.last_name, 'last_name') && this.validateCyrillic(user.last_name, 'last_name');
        isCorrect &= this.validate(user.first_name, 'first_name') && this.validateCyrillic(user.first_name, 'first_name');
        isCorrect &= this.validate(user.address, 'address');
        isCorrect &= this.validate(user.mobile, 'mobile');

        if (user.second_name !== '') {
            isCorrect &= this.validateCyrillic(user.second_name, 'second_name');
        }

        if (user.password !== user.repassword || user.password.length < 4)
        {
            isCorrect = false;
            this.setState({password: {value: user.password, isCorrect: false}});
        } else {
            this.setState({password: {value: user.password, isCorrect: true}});
        }
        return isCorrect;
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: {value: event.target.value, isCorrect: true}});
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.email.value,
            password: this.state.password.value,
            last_name: this.state.last_name.value,
            first_name: this.state.first_name.value,
            second_name: this.state.second_name.value,
            user_role: this.state.user_role.value,
            address: this.state.address.value,
            mobile: this.state.mobile.value,
            repassword: this.state.repassword.value
        };
        if (this.validation(user)) {
            this.props.signUp(user);
        }

    };

    render() {
        return (
            <div className={"sign-up"}>
                <form onChange={this.handleChange}>
                    {this.state.last_name.isCorrect
                        ? <input type={'text'} name={'last_name'} className={'input-field'} placeholder={"Фамилия*"}/>
                        : <input type={'text'} name={'last_name'} className={'input-field-wrong'} placeholder={"Фамилия*"}/>
                    }
                    {this.state.first_name.isCorrect
                        ? <input type={'text'} name={'first_name'} className={'input-field'} placeholder={"Имя*"}/>
                        :
                        <input type={'text'} name={'first_name'} className={'input-field-wrong'} placeholder={"Имя*"}/>
                    }
                    {this.state.second_name.isCorrect
                        ? <input type={'text'} name={'second_name'} className={'input-field'} placeholder={"Отчество"}/>
                        : <input type={'text'} name={'second_name'} className={'input-field-wrong'}
                                 placeholder={"Отчество"}/>
                    }
                    {this.state.email.isCorrect
                        ? <input type={'text'} name={'email'} className={'input-field'} placeholder={"E-mail*"}/>
                        : <input type={'text'} name={'email'} className={'input-field-wrong'} placeholder={"E-mail*"}/>
                    }
                    {this.state.mobile.isCorrect
                        ? <input type={'text'} name={'mobile'} className={'input-field'} placeholder={"Телефон*"}/>
                        : <input type={'text'} name={'mobile'} className={'input-field-wrong'} placeholder={"Телефон*"}/>
                    }
                    {this.state.address.isCorrect
                        ? <input type={'text'} name={'address'} className={'input-field'}
                                 placeholder={"Почтовый адрес*"}/>
                        : <input type={'text'} name={'address'} className={'input-field-wrong'}
                                 placeholder={"Почтовый адрес*"}/>
                    }
                    {this.state.password.isCorrect
                        ? <input type={'password'} name={'password'} className={'input-field'} placeholder={"Пароль*"}/>
                        : <input type={'password'} name={'password'} className={'input-field-wrong'}
                                     placeholder={"Пароль*"}/>
                    }
                    {this.state.password.isCorrect
                        ? <input type={'password'} name={'repassword'} className={'input-field'}
                                 placeholder={"Повторите пароль*"}/>
                        : <input type={'password'} name={'repassword'} className={'input-field-wrong'}
                                 placeholder={"Повторите пароль*"}/>
                    }

                    {this.props.isLoading
                        ? <button type={'submit'} className={'submit-button'} onClick={this.handleSubmit}>
                            <div className="dot-flashing"></div>
                        </button>
                        : <button type={'submit'} className={'submit-button'}
                                  onClick={this.handleSubmit}>Зарегистрироваться</button>
                    }
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthorised: state.isAuthorised,
        user: state.user,
        validation: state.validationSignUp,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = {
    signUp
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);