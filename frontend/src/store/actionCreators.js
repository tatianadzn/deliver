import axios from 'axios';

export const TO_REGISTERED = 'TO_REGISTERED';
export const TO_UNREGISTERED = 'TO_UNREGISTERED';
export const TO_UNAUTHORISED = 'TO_UNAUTHORISED';
export const AUTHORISATION = 'AUTHORISATION';


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

export function signUp(user){
    return(dispatch) => {
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
                        console.log('exists');
                    }
            })
            .catch(err => console.log('Error on check user: ' + err));
            };
}

export async function checkIfUserExists(email){
    return(dispatch) => {

        axios.get('//localhost:8080/authorisation/', { params: { email: email } })
            // .then(res => console.log(res.data))
            .then(res => dispatch(authorisation(res.data)))
            .catch(err => console.log('Error on check user: ' + err));


    }
}