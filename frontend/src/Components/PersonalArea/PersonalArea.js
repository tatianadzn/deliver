import React, {Component} from 'react';
import PersonalCabinet from "../PersonalCabinet/PersonalCabinet";
import Auth from "../Auth/Auth";

import store from "../../store/store";

class PersonalArea extends Component{

    render() {
        if (store.isAuth){
            return(
                <PersonalCabinet/>
            )
        } else{
            return(
                <Auth/>
            )
        }

    }
}

export default PersonalArea;
