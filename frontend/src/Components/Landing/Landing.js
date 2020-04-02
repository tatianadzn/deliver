import React, { Component } from 'react';
import './Landing.css'

class Landing extends Component{

    ToRegisterForm(){
        window.scroll({
            top: 930,
            behavior: 'smooth'
        });
    }

    render() {
        return(
            <div className={"bodyLanding"}>
                <div className={"landing-content"}>
                    <p className={"slogan"}>Легкий шопинг в США, Турции и Саудовской Аравии!</p>
                    <button className={"get-address-button"} onClick={this.ToRegisterForm}>Получить адрес</button>
                </div>
            </div>
        );
    }
}

export default Landing;
