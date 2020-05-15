import React, {Component} from 'react';

import {connect} from 'react-redux';
import {checking_product_on, checking_product_off} from "../../../../../../store/actionCreators";
import './Product.css';

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    handleChecking = () => {
        this.setState({'checked': !this.state.checked});

        if (this.props.products.find(x => x === this.props.product) === undefined){
            this.props.checking_product_on(this.props.product)
        } else {
            this.props.checking_product_off(this.props.product);
        }
    };

    render() {
        return(
            <div className="product-block">
                <div onClick={this.handleChecking}>
                    {this.state.checked
                        ? <div className={'label-checked'} >
                                <div className={'product-name'}>{this.props.product.name}</div>
                                <div className={'product-date'}>{this.props.product.date}</div>
                                <div className={'product-date'}>{this.props.product.weight}кг</div>
                        </div>
                        : <div className={'label-not-checked'} >
                                <div className={'product-name'}>{this.props.product.name}</div>
                                <div className={'product-date'}>{this.props.product.date}</div>
                                <div className={'product-date'}>{this.props.product.weight}кг</div>
                        </div>
                    }
                </div>

            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = {
    checking_product_on, checking_product_off
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

