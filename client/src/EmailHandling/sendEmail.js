import emailjs from 'emailjs-com';
import emailKey from "../EmailHandling/emailKey";
import { setAlert } from '../actions/alert';
import axios from 'axios';

export const sendEmail = (e , formData) => async dispatch => {

    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    let email = ""

    try {
        const res = await axios.get(`/api/users/email/${formData.username}`);
        email = res.data.email

    } catch (err) {
        dispatch(setAlert("Request Failed. Please try again." , "danger"))
        return
    }

    var templateParams = {
        username: formData.username,
        email : email
    };

    emailjs.init(emailKey.USER_ID);
     
    emailjs.send(emailKey.SERVICE_ID, emailKey.TEMPLATE_ID, templateParams)
    .then(function(response) {
        dispatch(setAlert("Email has been sent." , "success"))
    }, function(error) {
        console.log('FAILED...', error);
        dispatch(setAlert("Request Failed. Please try again." , "danger"))
        return
    });
}

