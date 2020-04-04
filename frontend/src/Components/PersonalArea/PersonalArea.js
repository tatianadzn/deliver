import React, {Component} from 'react';
import PersonalCabinet from "../PersonalCabinet/PersonalCabinet";
import Auth from "../Auth/Auth";

import {connect} from 'react-redux';

class PersonalArea extends Component{

    render() {
        if (this.props.isAuthorised){
            return(
                <PersonalCabinet/>
            )
        } else {
            return(
                <Auth/>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        isAuthorised: state.isAuthorised
    };
};


export default connect(mapStateToProps)(PersonalArea);
