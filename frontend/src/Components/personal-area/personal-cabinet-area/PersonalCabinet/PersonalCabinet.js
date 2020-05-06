import React, {Component} from 'react';

import UserPersonalData from "../UserPersonalData/UserPersonalData";
import UserProducts from "../user-managed-data/user-products/UserProducts/UserProducts";
import UserOrders from "../user-managed-data/user-orders/UserOrders/UserOrders";

import ManagerPersonalData from "../managers-area/ManagerPersonalData/ManagerPersonalData";
import AddNewProduct from "../managers-area/AddNewProduct/AddNewProduct";
import './PersonalCabinet.css';

import {connect} from "react-redux";
import {getUserOrders} from "../../../../store/actionCreators";

class PersonalCabinet extends Component{

    componentDidMount() {
        this.props.getUserOrders();
    }

    render() {
        if (this.props.user.user_role === 'USER'){
            return(
                <div className={"personal-cabinet"}>
                    <UserPersonalData/>
                    {this.props.isUserOrder ? <UserOrders/> : <UserProducts/>}
                </div>
            )
        } else {
            return (
                <div>
                    <ManagerPersonalData user={this.props.user}/>
                    <div className={"personal-cabinet"}>
                        {this.props.isUserOrder ? <UserOrders/> : <AddNewProduct/>}
                    </div>
                </div>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        isUserOrder: state.isUserOrder,
        user: state.user
    };
};

const mapDispatchToProps = {
    getUserOrders
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalCabinet);