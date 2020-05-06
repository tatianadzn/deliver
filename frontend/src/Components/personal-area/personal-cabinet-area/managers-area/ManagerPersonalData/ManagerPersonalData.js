import React, {Component} from 'react';

import './ManagerPersonalData.css';

import {to_orders, to_products} from "../../../../../store/actionCreators";
import {connect} from "react-redux";

class ManagerPersonalData extends Component {

    handleClickToOrders = event => {
        event.preventDefault();
        this.props.to_orders();
        window.scroll({
            top: 930,
            behavior: 'smooth'
        });
    };

    handleClickToProducts = event => {
        event.preventDefault();
        this.props.to_products();
        window.scroll({
            top: 930,
            behavior: 'smooth'
        });
    };

    render(){
        return(
            <div className={'manager-personal-data'}>
                <div className={'manager-info-block'}>
                    Менеджер {this.props.user.last_name} {this.props.user.first_name}
                    <p>{this.props.user.email}</p>
                </div>
                <div className={'button-block'}>
                    <button className={'product-order-button'} onClick={this.handleClickToOrders}>Управление заказами</button>
                    <span className={'text'}>|</span>
                    <button className={'product-order-button'} onClick={this.handleClickToProducts}>Добавить продукт</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isUserOrder: state.isUserOrder,
        user: state.user
    };
};

const mapDispatchToProps = {
    to_orders, to_products
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagerPersonalData);