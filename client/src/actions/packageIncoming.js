import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PACKAGE , 
    PACKAGE_ERROR,
    ADD_PACKAGE,
    DELETE_PACKAGE
} from './types';
import { sendEmail } from '../EmailHandling/sendEmail';

// Get all incoming packages of a user
export const GetIncPackages = () => async dispatch => {
    try {
        const res = await axios.get('/api/parcelInc')
        // console.log("Whoosh", res.data);

        dispatch({
            type : GET_PACKAGE,
            payload : res.data
        })

    } catch (err) {
        dispatch(setAlert(err.response.statusText , 'danger'))
        dispatch({
            type : PACKAGE_ERROR,
            payload : {msg : err.response.statusText , status : err.response.status}
        })
    }
}

// Get all incoming packages
export const GetAllIncPackages = () => async dispatch => {
    try {
        const res = await axios.get('/api/parcelInc/All')
        // console.log("Whoosh", res.data);

        dispatch({
            type : GET_PACKAGE,
            payload : res.data
        })

    } catch (err) {
        dispatch(setAlert(err.response.statusText , 'danger'))
        dispatch({
            type : PACKAGE_ERROR,
            payload : {msg : err.response.statusText , status : err.response.status}
        })
    }
}

// Update the incoming package
export const UpdateIncPackages = (formData) => async dispatch => {

    try {
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        const {id ,name , PackageDescription , username , PickedBy , PickedAt , current} = formData
        const Status = current ? "Picked" : "Not Picked";
        const body = JSON.stringify({name , PackageDescription , username , PickedBy , PickedAt , Status});
        
        const res = await axios.post(`/api/parcelInc/parcel/${id}` , body , config)

        dispatch({
            type : DELETE_PACKAGE,
            payload : id
        })

        dispatch({
            type : ADD_PACKAGE,
            payload : res.data
        })

    } catch (err) {
        dispatch(setAlert(err.response.statusText , 'danger'))
        dispatch({
            type : PACKAGE_ERROR,
            payload : {msg : err.response.statusText , status : err.response.status}
        })
        
    }
}

// Add a new incoming package
export const AddIncPackages = (e , formData , ret) => async dispatch => {

    try {
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        const {username , name , packdes} = formData
        const PackageDescription = packdes;
        // const Status = current ? "Picked" : "Not Picked";
        const body = JSON.stringify({username , name , PackageDescription});

        const res = await axios.post(`/api/parcelInc` , body , config)

        dispatch({
            type : ADD_PACKAGE,
            payload : res.data
        })

        // console.log(e , formData)
        ret.poss = true;
        dispatch(setAlert("Package Added" , 'success'));
        // return "Yes";
    } catch (err) {
        dispatch(setAlert(err.response.statusText , 'danger'))
        dispatch({
            type : PACKAGE_ERROR,
            payload : {msg : err.response.statusText , status : err.response.status}
        })
        window.location.reload();
    }
}