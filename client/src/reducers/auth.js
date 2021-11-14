import { LOGIN_SUCCESS , LOGIN_FAIL , USER_LOADED , AUTH_ERROR , LOGOUT , REGISTER_FAIL , REGISTER_SUCCESS } from '../actions/types';

const initialState = {
    token : localStorage.getItem('token'),
    isAuthenticated : null,
    loading : true,
    user : null
}

export default function foo(state = initialState , action){
    const {type , payload} = action;
    
    switch(type){
        case USER_LOADED :
            return {
                ...state,
                isAuthenticated : true,
                loading : false,
                user : payload
            }
        case AUTH_ERROR :
        case LOGIN_FAIL :
        case REGISTER_FAIL:
        case LOGOUT :
            localStorage.removeItem('token');
            return {
                ...state ,
                token : null,
                isAuthenticated : false,
                loading : false
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token' , payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated : true,
                loading : false   
            }
        default :
            return state
    }
}