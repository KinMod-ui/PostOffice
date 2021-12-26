import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PACKAGE , 
    PACKAGE_ERROR,
    ADD_PACKAGE,
    DELETE_PACKAGE
} from './types';
import { sendEmailSendData } from '../EmailHandling/sendEmail';

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

        const {id , Picked, DispatchStatus , PackageWeight , Price } = formData
        
        const body = JSON.stringify({id , Picked , DispatchStatus , Picked , PackageWeight , Price });
        
        const res = await axios.post(`/api/parcelOut/${id}` , body , config)
        dispatch({
            type : DELETE_PACKAGE,
            payload : id
        })

        dispatch({
            type : ADD_PACKAGE,
            payload : res.data
        })
        scrollTop();
        dispatch(setAlert("Changes have been made" , 'success'))

    } catch (err) {
        dispatch(setAlert(err.response.statusText , 'danger'))
        dispatch({
            type : PACKAGE_ERROR,
            payload : {msg : err.response.statusText , status : err.response.status}
        })
        
    }
}

var scrollTop = function() {
    window.scrollTo(0, 0);
};

// Add a new outgoing package
export const AddOutPackages = (e , formData) => async dispatch => {

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
            SenderEmail,
            RecieverName,
            RecieverLine1,
            RecieverLine2,
            RecieverCity,
            RecieverState,
            RecieverPinCode,
            RecieverMobile,
            packdes,
            email,
            Picked,
            PackageWeight,
            Price,
            ExtraComments,
            DispatchStatus
        } = formData
        const PackageDescription = packdes;
        const user = formData.username
        
        const body = JSON.stringify({
            user,     
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
            Picked,
            ExtraComments,
            DispatchStatus
        });

        const res = await axios.post(`/api/parcelOut` , body , config)

        dispatch({
            type : ADD_PACKAGE,
            payload : res.data
        })

        dispatch(setAlert("Package Added" , 'success'));
        
        scrollTop();
        sendEmailSendData(e, formData);
        setTimeout( function(){ window.location.reload(); } , 1000);
        
    } catch (err) {

        scrollTop();
        console.log(err)
        dispatch(setAlert(err.response.statusText , 'danger'))
        dispatch({
            type : PACKAGE_ERROR,
            payload : {msg : err.response.statusText , status : err.response.status}
        })
        // setTimeout( function(){ window.location.reload(); } , 1000);
        e.target.textContent = "Add Package"
    }
}