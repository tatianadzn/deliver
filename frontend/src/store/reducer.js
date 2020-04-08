import {
    TO_REGISTERED,
    TO_UNREGISTERED,
    TO_UNAUTHORISED,
    AUTHORISATION
} from './actionCreators';


const defaultState = {
    isAuthorised: false,
    isRegistered: true,
    user: {}
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
        case TO_UNAUTHORISED:
            return {
                ...state,
                isAuthorised: false
            };
        case AUTHORISATION:
            return {
                ...state,
                user: action.payload,
                isAuthorised: true
            };
        default:
            return state;
    }
};


export default reducer;