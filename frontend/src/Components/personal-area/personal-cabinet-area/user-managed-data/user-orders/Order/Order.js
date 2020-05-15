import React, {Component} from "react";

import './Order.css';
import {updateOrderStatus} from "../../../../../../store/actionCreators";
import {connect} from "react-redux";

class Order extends Component{

    handleClickDeliveryConfirm = event => {
        event.preventDefault();
        this.props.updateOrderStatus(this.props.order._id, 'DELIVERED');
    };

    handleClickPaymentConfirm = event => {
        event.preventDefault();
        this.props.updateOrderStatus(this.props.order._id, 'PAID');
    };

    render() {
        return (
            <div className={'order'}>
                <div className={'order-head-box'}>
                    <p className={'order-number'}>Заказ №{this.props.order._id}</p>
                    <div className={'right-float'}>
                        {this.props.user_role === 'USER'
                            ? this.props.order.status === 'PAID'
                                ? <p>ОПЛАЧЕНО</p>
                                : <p>НЕ ОПЛАЧЕНО</p>
                            : this.props.order.status === 'DELIVERED'
                                ? <p>ДОСТАВЛЕНО</p>
                                : <p>НЕ ДОСТАВЛЕНО</p>
                        }
                    </div>
                </div>
                <div className={'contents'}>
                    {this.props.order.products.map(prod => {
                        return (
                            <div key={prod.id}>
                                <div className={'product-name'}>{prod.name}</div>
                                <div className={'product-date'}>{prod.date}</div>
                            </div>
                        )
                    })}
                </div>
                <div className={'cost'}>
                    Стоимость доставки: {Math.ceil(this.props.order.weight * 101)}$
                </div>
                {this.props.user_role === 'USER'
                    ? <div>
                        {this.props.order.status === 'DELIVERED'
                            ? <div className={'delivery-confirmed-msg-box'}>Получение подтверждено</div>
                            : <button className={'submit-button'} onClick={this.handleClickDeliveryConfirm}>Подтвердить получение</button>
                        }
                    </div>
                    : <div>
                        {this.props.order.status === 'PAID'
                            ? <div className={'delivery-confirmed-msg-box'}>Оплата подтверждена</div>
                            : <button className={'submit-button'} onClick={this.handleClickPaymentConfirm}>Подтвердить оплату</button>
                        }
                    </div>
                }


            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isOrdersLoading: state.isOrdersLoading,
        user_role: state.user.user_role
    };
};

const mapDispatchToProps = {
    updateOrderStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);