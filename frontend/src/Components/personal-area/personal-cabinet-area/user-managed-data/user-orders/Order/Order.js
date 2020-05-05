import React, {Component} from "react";

import './Order.css';

class Order extends Component{
    render() {
        return (
            <div className={'order'}>
                <div className={'product-name'}>
                    <p className={'order-number'}>Заказ №234567</p>
                    {this.props.order.status === 'PAID' || this.props.order.status === 'PAID_DELIVERED'
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
                <button className={'submit-button'}>Подтвердить получение</button>
            </div>
        );
    }
}

export default Order;