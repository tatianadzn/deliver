import {
    TO_REGISTERED,
    TO_UNREGISTERED,
    TO_UNAUTHORISED,
    AUTHORISATION,
    AUTH_INCORRECT,
    LOADING_STARTED,
    CHECKING_PRODUCT_ON,
    CHECKING_PRODUCT_OFF,
    GET_USER_PRODUCTS,
    LOADING_PRODUCTS_STARTED,
    LOADING_PRODUCTS_FINISHED,
    TO_ORDERS, TO_PRODUCTS
} from './actionCreators';


const defaultState = {
    isAuthorised: true,
    isRegistered: true,
    isUserOrder: false,
    isAuthCorrect: true,
    isLoading: false,
    isProdLoading: false,
    user: {
        last_name: 'a',
        first_name: 'a',
        second_name: 'a',
        email: 'tatiana22d@gmail.com',
        mobile: 'a',
        address: 'a'
    },
    products: [],
    allProducts: []
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
                isAuthorised: false,
                user: {
                    last_name: '',
                    first_name: '',
                    second_name: '',
                    email: '',
                    mobile: '',
                    address: ''
                },
                products: [],
                allProducts: []
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
        case LOADING_PRODUCTS_STARTED:
            return {
                ...state,
                isProdLoading: true
            };
        case LOADING_PRODUCTS_FINISHED:
            return {
                ...state,
                isProdLoading: false
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
        case GET_USER_PRODUCTS:
            return {
                ...state,
                allProducts: [...state.allProducts, {name: action.payload.description, date: action.payload.date}]
            };
        case TO_ORDERS:
            return {
                ...state,
                isUserOrder: true
            };
        case TO_PRODUCTS:
            return {
                ...state,
                isUserOrder: false
            };
        default:
            return state;
    }
};


export default reducer;