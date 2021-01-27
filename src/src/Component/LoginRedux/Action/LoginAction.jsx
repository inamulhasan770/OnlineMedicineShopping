import { LOGIN, LOGOUT } from './actionTypes';

export const Login = (user) => {
    return {
        type: LOGIN,
        user
    }
}


export const Logout =  (user) => {
    return {
        type: LOGOUT,
        user
    }
}