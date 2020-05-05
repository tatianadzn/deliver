import React, {Component} from 'react';

import UserPersonalData from "../UserPersonalData/UserPersonalData";
import UserProducts from "../user-managed-data/user-products/UserProducts/UserProducts";
import UserOrders from "../user-managed-data/user-orders/UserOrders/UserOrders";
import './PersonalCabinet.css';

import {connect} from "react-redux";
import {getUserOrders} from "../../../../store/actionCreators";

class PersonalCabinet extends Component{

    componentDidMount() {
        this.props.getUserOrders();
    }

    render() {
        return(
            <div className={"personal-cabinet"}>
                <UserPersonalData/>
                {this.props.isUserOrder ? <UserOrders/> : <UserProducts/>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isUserOrder: state.isUserOrder
    };
};

const mapDispatchToProps = {
    getUserOrders
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalCabinet);