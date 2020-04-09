import React, {Component} from 'react';

import UserPersonalData from "../UserPersonalData/UserPersonalData";
import UserProducts from "../user-managed-data/UserProducts/UserProducts";
import UserOrders from "../user-managed-data/UserOrders/UserOrders";
import './PersonalCabinet.css';

import {connect} from "react-redux";

class PersonalCabinet extends Component{

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

export default connect(mapStateToProps)(PersonalCabinet);