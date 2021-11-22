import {
    GET_PACKAGE ,
    PACKAGE_ERROR,
    ADD_PACKAGE,
    DELETE_PACKAGE,
    DELETE_USER
}from '../actions/types'

const initialState = {
    packages : [],
    package : null,
    loading : true,
    error : {}
}

export default function(state = initialState , action){
    const {type , payload} = action;
    
    switch(type){
        case GET_PACKAGE:
            return {
                ...state,
                packages : payload,
                loading : false
            }
        case ADD_PACKAGE:
            return {
                ...state,
                packages: [payload, ...state.packages],
                loading: false
            };
        case DELETE_PACKAGE:
            return {
                ...state,
                packages: state.packages.filter((pack) => pack._id !== payload),
                loading: false
            };
        case DELETE_USER:
            return {
                ...state,
                packages: state.packages.filter((pack) => pack.user.username !== payload && pack.username !== payload),
                loading: false
            };
        case PACKAGE_ERROR:
            return {
                ...state,
                error : payload,
                loading : false
            }
        default : 
            return state
    }
}