import React, {Component} from 'react';

import Product from "../Product/Product";
import './UserProducts.css';
import {connect} from "react-redux";
import {getUserProducts} from "../../../../../../store/actionCreators";

class UserProducts extends Component {

    handleClick = event => {
      event.preventDefault();
      console.log(this.props.checkedProducts);
    };

    componentDidMount() {
        this.props.getUserProducts();
    }

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
                    <div className={'no-product-msg'}>
                        Пока ничего не пришло :(
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

const mapDispatchToProps = {
    getUserProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProducts);