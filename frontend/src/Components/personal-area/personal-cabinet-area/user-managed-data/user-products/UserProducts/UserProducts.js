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
        return(
            <div className={'user-products'}>

                {this.props.products.map(product => <Product product={product} key={product.name}/>)}

                {this.props.isLoading
                    ? <button className={'submit-button'} onClick={this.handleClick}>
                        <div className="dot-flashing"/>
                    </button>
                    : <button className={'submit-button'} onClick={this.handleClick}>Оформить заказ</button>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.allProducts,
        checkedProducts: state.products,
        isLoading: state.isLoading
    };
};

export default connect(mapStateToProps)(UserProducts);