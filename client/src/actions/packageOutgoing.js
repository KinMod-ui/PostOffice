import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PACKAGE , 
    PACKAGE_ERROR,
    ADD_PACKAGE,
    DELETE_PACKAGE
} from './types';

// Get all outgoing packages of a user
export const GetOutPackages = () => async dispatch => {
    try {
        const res = await axios.get('/api/parcelOut')
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

// Get all outgoing packages
export const GetAllOutPackages = () => async dispatch => {
    try {
        const res = await axios.get('/api/parcelOut/All')
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

// Update the outgoing package
export const UpdateOutPackages = (formData) => async dispatch => {

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

// Add a new outgoing package
export const AddOutPackages = (formData) => async dispatch => {

    try {
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        const {
            SenderName,
            SenderLine1,
            SenderLine2,
            SenderCity,
            SenderState,
            SenderPinCode,
            SenderMobile,
            RecieverName,
            RecieverLine1,
            RecieverLine2,
            RecieverCity,
            RecieverState,
            RecieverPinCode,
            RecieverMobile,
            packdes,
            email,
            PackageWeight,
            Price,
            ExtraComments,
            DispatchStatus
        } = formData
        const PackageDescription = packdes;
        const SenderEmail = email
        
        const body = JSON.stringify({
            SenderName,
            SenderLine1,
            SenderLine2,
            SenderCity,
            SenderState,
            SenderPinCode,
            SenderEmail,
            SenderMobile,
            RecieverName,
            RecieverLine1,
            RecieverLine2,
            RecieverCity,
            RecieverState,
            RecieverPinCode,
            RecieverMobile,
            PackageDescription,
            PackageWeight,
            Price,
            ExtraComments,
            DispatchStatus
        });

        const res = await axios.post(`/api/parcelOut` , body , config)

        dispatch({
            type : ADD_PACKAGE,
            payload : res.data
        })

        dispatch(setAlert("Package Added" , 'success'));

    } catch (err) {
        dispatch(setAlert(err.response.statusText , 'danger'))
        dispatch({
            type : PACKAGE_ERROR,
            payload : {msg : err.response.statusText , status : err.response.status}
        })
    }
}