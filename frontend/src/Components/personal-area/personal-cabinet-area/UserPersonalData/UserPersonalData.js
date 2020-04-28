import React, {Component} from 'react';

import './UserPersonalData.css';
import {connect} from "react-redux";
import {to_orders, to_products} from "../../../../store/actionCreators";

class UserPersonalData extends Component {

    handleClickToOrders = event => {
        event.preventDefault();
        this.props.to_orders();

    };

    handleClickToProducts = event => {
        event.preventDefault();
        this.props.to_products();

    };

    render() {
        return(
            <div className={'left-col'}>
                <div className={'product-order-buttons'}>
                    <button className={'product-order-button'} onClick={this.handleClickToOrders}>Мои Заказы</button>
                    <span className={'text'}>|</span>
                    <button className={'product-order-button'} onClick={this.handleClickToProducts}>Мои Товары</button>
                </div>

                <div className={'personal-data'}>
                    <p className={'my-address'}>{this.props.user.last_name} {this.props.user.first_name}
                    {this.props.user.second_name !== '' ? <span> {this.props.user.second_name}</span> : <span/>}</p>
                    <p>Телефон: {this.props.user.mobile}</p>
                    <p>Почтовый адрес: {this.props.user.address}</p>
                    <p>Email: {this.props.user.email}</p>
                    <div className={'my-address'}>Мой адрес в США:
                        <p>
                            775 Westminster Avenue APT D5
                            Brooklyn, NY, 11230
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    to_orders, to_products
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPersonalData);