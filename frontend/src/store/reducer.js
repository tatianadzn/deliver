import {
    TO_REGISTERED,
    TO_UNREGISTERED,
    TO_UNAUTHORISED,
    AUTHORISATION,
    AUTH_INCORRECT, LOADING_STARTED
} from './actionCreators';


const defaultState = {
    isAuthorised: false,
    isRegistered: true,
    isUserOrder: true,
    isAuthCorrect: true,
    isLoading: false,
    user: {
        last_name: 'a',
        first_name: 'a',
        second_name: 'a',
        email: 'a',
        mobile: 'a',
        address: 'a'
    }
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
                isAuthorised: true,
                isLoading: false,
                isAuthCorrect: true
            };
        case AUTH_INCORRECT:
            return {
                ...state,
                isAuthCorrect: false,
                isLoading: false
            };
        case LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
};


export default reducer;