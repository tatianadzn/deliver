import {
    TO_REGISTERED,
    TO_UNREGISTERED,
    TO_UNAUTHORISED,
    AUTHORISATION,
    AUTH_INCORRECT, LOADING_STARTED,
    CHECKING_PRODUCT_ON, CHECKING_PRODUCT_OFF
} from './actionCreators';


const defaultState = {
    isAuthorised: true,
    isRegistered: true,
    isUserOrder: false,
    isAuthCorrect: true,
    isLoading: false,
    user: {
        last_name: 'a',
        first_name: 'a',
        second_name: 'a',
        email: 'a',
        mobile: 'a',
        address: 'a'
    },
    products: [],
    allProducts: [{name: 'pr1', date: 'date1'}, {name: 'pr2', date: 'date2'}, {name: 'pr3', date: 'date3'}, {name: 'pr4', date: 'date4'}]
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
        case CHECKING_PRODUCT_ON:
            let prods = state.products;
            prods.push(action.payload);
            return {
                ...state,
                products: prods
            };
        case CHECKING_PRODUCT_OFF:
            let products = state.products.filter(x => x !== action.payload);
            return {
                ...state,
                products: products
            };
        default:
            return state;
    }
};


export default reducer;