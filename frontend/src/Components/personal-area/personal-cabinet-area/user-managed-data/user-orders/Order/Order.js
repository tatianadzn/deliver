import React, {Component} from "react";

import './Order.css';
import {updateOrderStatus} from "../../../../../../store/actionCreators";
import {connect} from "react-redux";

class Order extends Component{

    handleClick = event => {
        event.preventDefault();
        console.log(this.props.order);
        this.props.updateOrderStatus(this.props.order._id, 'DELIVERED');
    };

    render() {
        return (
            <div className={'order'}>
                <div className={'product-name'}>
                    <p className={'order-number'}>Заказ №234567</p>
                    {this.props.order.status === 'PAID'
                        ? <p>Оплата подтверждена менеджером</p>
                        : <p>Оплата не подтверждена менеджером</p>
                    }
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
                    Стоимость доставки: {this.props.order.cost}
                </div>
                <div>
                    {this.props.order.status === 'DELIVERED'
                        ? <div className={'delivery-confirmed-msg-box'}>Получение подтверждено</div>
                        : <button className={'submit-button'} onClick={this.handleClick}>Подтвердить получение</button>
                    }
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isOrdersLoading: state.isOrdersLoading
    };
};

const mapDispatchToProps = {
    updateOrderStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);