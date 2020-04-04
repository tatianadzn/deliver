import {
    TO_REGISTERED,
    TO_UNREGISTERED,
    TO_AUTHORISED,
    TO_UNAUTHORISED
} from './actionCreators';


const defaultState = {
    isAuthorised: false,
    isRegistered: true
};

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case TO_REGISTERED:
            return {
                ...state,
                isRegistered: true
            };
        case TO_UNREGISTERED:
            return {
                ...state,
                isRegistered: false
            };
        case TO_AUTHORISED:
            return {
                ...state,
                isAuthorised: true
            };
        case TO_UNAUTHORISED:
            return {
                ...state,
                isAuthorised: false
            };
        default:
            return state;
    }
};


export default reducer;