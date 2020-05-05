import axios from 'axios';

export const TO_REGISTERED = 'TO_REGISTERED';
export const TO_UNREGISTERED = 'TO_UNREGISTERED';
export const TO_UNAUTHORISED = 'TO_UNAUTHORISED';
export const AUTHORISATION = 'AUTHORISATION';
export const AUTH_INCORRECT = 'AUTH_INCORRECT';
export const LOADING_STARTED = 'LOADING_STARTED';
export const CHECKING_PRODUCT_ON = 'CHECKING_PRODUCT_ON';
export const CHECKING_PRODUCT_OFF = 'CHECKING_PRODUCT_OFF';
export const GET_USER_PRODUCTS = 'GET_USER_PRODUCTS';
export const GET_USER_ORDERS = 'GET_USER_ORDERS';
export const LOADING_PRODUCTS_STARTED = 'LOADING_PRODUCTS_STARTED';
export const LOADING_PRODUCTS_FINISHED = 'LOADING_PRODUCTS_FINISHED';
export const LOADING_ORDERS_STARTED = 'LOADING_ORDERS_STARTED';
export const LOADING_ORDERS_FINISHED = 'LOADING_ORDERS_FINISHED';
export const TO_ORDERS = 'TO_ORDERS';
export const TO_PRODUCTS = 'TO_PRODUCTS';
export const CREATE_ORDER = 'CREATE_ORDER';

export const to_registered = () => ({
    type: TO_REGISTERED
});


export const to_unregistered = () => ({
    type: TO_UNREGISTERED
});


export const to_unauthorised = () => ({
    type: TO_UNAUTHORISED
});

export const authorisation = (user) => ({
    type: AUTHORISATION,
    payload: user
});

export const auth_incorrect = () => ({
    type: AUTH_INCORRECT
});

export const loading_started = () => ({
    type: LOADING_STARTED
});

export const checking_product_on = product => ({
    type: CHECKING_PRODUCT_ON,
    payload: product
});

export const checking_product_off = product => ({
    type: CHECKING_PRODUCT_OFF,
    payload: product
});

export const get_user_products = product => ({
    type: GET_USER_PRODUCTS,
    payload: product
});

export const get_user_orders = order => ({
    type: GET_USER_ORDERS,
    payload: order
});

export const loading_products_started = () => ({
    type: LOADING_PRODUCTS_STARTED
});

export const loading_products_finished = () => ({
    type: LOADING_PRODUCTS_FINISHED
});

export const loading_orders_started = () => ({
    type: LOADING_ORDERS_STARTED
});

export const loading_orders_finished = () => ({
    type: LOADING_ORDERS_FINISHED
});

export const to_orders = () => ({
    type: TO_ORDERS
});

export const to_products = () => ({
    type: TO_PRODUCTS
});

export const create_order = () => ({
    type: CREATE_ORDER
});

export function signUp(user){
    return(dispatch) => {
        dispatch(loading_started());
        //check if user already exists
        axios.get('//localhost:8080/authorisation/', { params: { email: user.email } })
            .then(res => {
                    if (res.data == null){
                        const data = {
                            email: user.email,
                            password: user.password,
                            last_name: user.last_name,
                            first_name: user.first_name,
                            second_name: user.second_name,
                            user_role: user.user_role,
                            address: user.address,
                            mobile: user.mobile
                        };

                        //add user to db
                        axios.post('//localhost:8080/authorisation/', data)
                            .then(res => {
                                console.log(res.data);
                                dispatch(authorisation(user));
                            })
                            .catch(err => console.log('Error on create user: ' + err));

                    } else {
                        dispatch(auth_incorrect());
                        console.log('exists');
                    }
            })
            .catch(err => console.log('Error on check user: ' + err));
            };
}

export function logIn(auth){
    return(dispatch) => {

        dispatch(loading_started());
        axios.get('//localhost:8080/authorisation/', { params: { email: auth.email } })
            .then(res => {
                if (res.data !== null) {
                    if (res.data.password === auth.password){
                        dispatch(authorisation(res.data));
                        dispatch(getUserProducts());
                    } else {
                        dispatch(auth_incorrect());
                    }
                } else {
                    dispatch(auth_incorrect());
                }

            })
            .catch(err => console.log('Error on login data: ' + err));


    }
}

export function getUserProducts(){
    return(dispatch, getState) => {
        dispatch(loading_products_started());

        axios.get('//localhost:8080/products/', { params: { email:  getState().user.email} })
            .then(res => {
                if (res.data.length !== 0){
                    res.data.map(prod => {
                        dispatch(get_user_products(prod));
                    })
                }
                dispatch(loading_products_finished());
            })
            .catch(err => console.log('Error on getting user products: ' + err))
    }
}

export function getUserOrders() {
    return(dispatch, getState) => {
        dispatch(loading_orders_started());

        axios.get('//localhost:8080/orders/', { params: { email:  getState().user.email} })
            .then(res => {
                if (res.data.length !== 0){
                    res.data.map(order => {
                        dispatch(get_user_orders(order));
                    })
                }
                dispatch(loading_orders_finished());
            })
            .catch(err => console.log('Error on getting user orders: ' + err))
    }
}

export function createOrder(products){
    return(dispatch, getState) => {
        const state = getState();
        let data = {
            owner: state.user._id,
            cost: '200$',
            products: products
        };
        axios.post('//localhost:8080/orders/', data)
            .then(res => {
                console.log(res.data);
                dispatch(create_order());
                dispatch(getUserOrders());
                dispatch(getUserProducts());
            })
            .catch(err => console.log('Error on create order: ' + err));
    }
}