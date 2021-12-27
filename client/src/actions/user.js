import axios from 'axios';
import { setAlert } from './alert';
import {
    DELETE_USER,
    PACKAGE_ERROR
} from './types';

// Get all incoming packages of a user
export const ChangeType = ({obj}) => async dispatch => {
    try {
        const {username , type } = obj
        // console.log(username , type)

        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        const body = JSON.stringify({type});

        const res = await axios.patch(`/api/users/type/${username}` , body , config)
        // console.log("Whoosh", res.data);

        dispatch({
            type : DELETE_USER,
            payload : res.data
        })

        dispatch(setAlert("User Changed" , 'success'))

    } catch (err) {
        if (err.response)
        dispatch(setAlert(err.response.statusText , 'danger'))
        dispatch({
            type : PACKAGE_ERROR,
            payload : {msg : err.response.statusText , status : err.response.status}
        })
    }
}