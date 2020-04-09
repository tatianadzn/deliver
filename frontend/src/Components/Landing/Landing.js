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
                    <div className={"slogan"}>
                        <p>Легкий</p>
                        <p className={'middle-text'}>шопинг в США!</p>
                    </div>
                    <button className={"get-address-button"} onClick={this.ToRegisterForm}>Получить адрес</button>
                </div>
            </div>
        );
    }
}

export default Landing;
