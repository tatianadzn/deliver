import React, {Component} from 'react';
import Order from "../Order/Order";

import './UserOrders.css';
import {connect} from "react-redux";
import {getUserOrders} from "../../../../../../store/actionCreators";

class UserOrders extends Component {

    render() {
        if (this.props.isOrdersLoading){
            return (
                <div className={'loader'}>
                    <div className="dot-flashing"></div>
                </div>
            )
        } else {
            if (this.props.orders.length !== 0) {
                return (
                    <div className={'product-block'}>
                        <div className={'user-orders'}>
                            {this.props.orders.map(order => {
                                return (
                                    <Order
                                        order={order}
                                        key={order._id}/>
                                )
                            })}
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className={'no-product-msg-block'}>
                        <div className={'no-product-msg'}>
                            Пока ничего нет :(
                        </div>
                    </div>
                );
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        isOrdersLoading: state.isOrdersLoading,
        orders: state.orders
    };
};

const mapDispatchToProps = {
    getUserOrders
};


export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);