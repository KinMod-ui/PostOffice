import axios from 'axios';
import { setAlert } from './alert';
import { AUTH_ERROR , LOGIN_FAIL, LOGIN_SUCCESS, USER_LOADED , LOGOUT , REGISTER_FAIL , REGISTER_SUCCESS } from './types';
import setAuthToken from '../utils/setAuthToken'

// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type : USER_LOADED,
            payload : res.data
        })
    } catch (err) {
        dispatch({
            type : AUTH_ERROR
        })
    }
};

export const register = ({name , username , email , password }) => async dispatch => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({name , username ,password , email});
    
    try {
        const res = await axios.post('/api/users' , body , config);

        dispatch({
            type : REGISTER_SUCCESS,
            payload : res.data
        })
        dispatch(setAlert("Registration Successfull" , "success"))
        dispatch(loadUser());

    } catch (err) {

        const errors = err.response.data.errs;

        if (errors){
            errors.forEach(error => dispatch(setAlert(error.msg , 'danger')));
        }

        dispatch({
            type : REGISTER_FAIL
        })
    }
}

export const login = (username , password) => async dispatch => {
    
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({username , password});
    
    try {
        const res = await axios.post('/api/auth' , body , config);

        dispatch({
            type : LOGIN_SUCCESS,
            payload : res.data
        })

        dispatch(loadUser());

    } catch (err) {

        const errors = err.response.data.errors;

        if (errors){
            errors.forEach(error => dispatch(setAlert(error.msg , 'danger')));
        }

        dispatch({
            type : LOGIN_FAIL
        })
    }
};

export const logout = () => dispatch => {
    dispatch({
        type : LOGOUT
    })
}