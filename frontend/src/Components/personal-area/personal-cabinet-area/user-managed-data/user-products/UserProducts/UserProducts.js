import React, {Component} from 'react';

import Product from "../Product/Product";
import './UserProducts.css';
import {connect} from "react-redux";

class UserProducts extends Component {

    handleClick = event => {
      event.preventDefault();
      console.log(this.props.checkedProducts);
    };

    render() {
        if (this.props.isProdLoading) {
            return(
                <div className={'loader'}>
                    <div className="dot-flashing"></div>
                </div>
            )
        } else {
            if (this.props.products.length !== 0) {
                return (
                    <div className={'user-products'}>
                        {this.props.products.map(product => {
                            return (
                                <Product
                                    key={product.name}
                                    product={product}
                                />)
                        })}

                        {this.props.isLoading
                            ? <button className={'submit-button'} onClick={this.handleClick}>
                                <div className="dot-flashing"/>
                            </button>
                            : <button className={'submit-button'} onClick={this.handleClick}>Оформить заказ</button>
                        }
                    </div>
                )
            } else {
                return (
                    <div className={'no-product-msg-block'}>
                        <div className={'no-product-msg'}>
                            Пока ничего не пришло :(
                        </div>
                    </div>

                )
            }
        }

    }
}

const mapStateToProps = state => {
    return {
        products: state.allProducts,
        checkedProducts: state.products,
        isLoading: state.isLoading,
        isProdLoading: state.isProdLoading
    };
};


export default connect(mapStateToProps)(UserProducts);