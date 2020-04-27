import React, {Component} from 'react';

import './UserPersonalData.css';
import {connect} from "react-redux";

class UserPersonalData extends Component {
    render() {
        return(
            <div className={'user-personal-data'}>
                <p className={'my-address'}>{this.props.user.last_name} {this.props.user.first_name}
                {this.props.user.second_name !== '' ? <span> {this.props.user.second_name}</span> : <span/>}</p>
                <p>Телефон: {this.props.user.mobile}</p>
                <p>Почтовый адрес: {this.props.user.address}</p>
                <p>Email: {this.props.user.email}</p>
                <div className={'my-address'}>Мой адрес в США:
                    <p>
                        775 Westminster Avenue APT D5
                        Brooklyn, NY, 11230
                    </p>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(UserPersonalData);