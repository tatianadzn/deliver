import React, {Component} from "react";

import './AddNewProduct.css';

import {addNewProduct} from "../../../../../store/actionCreators";
import {connect} from "react-redux";

class AddNewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            email: '',
            weight: ''
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const product = {
            email: this.state.email,
            description: this.state.description,
            weight: this.state.weight
        };
        this.props.addNewProduct(product);
    };

    render(){
        return(
            <div className={"add-product-form"}>
                <form onChange={this.handleChange}>
                    <input type={'text'} name={'description'} className={'input-field'} placeholder={"Описание продукта"}/>
                    <input type={'text'} name={'email'} className={'input-field'} placeholder={"Email владельца"}/>
                    <input type={'text'} name={'weight'} className={'input-field'} placeholder={"Вес товара"}/>

                    {this.props.isLoading
                        ? <button type={'submit'} className={'submit-button'} onClick={this.handleSubmit}>
                            <div className="dot-flashing"></div>
                        </button>
                        : <button type={'submit'} className={'submit-button'}
                                  onClick={this.handleSubmit}>Добавить продукт</button>
                    }
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = {
    addNewProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewProduct);