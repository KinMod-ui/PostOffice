import emailjs from 'emailjs-com';
import emailKey from "../EmailHandling/emailKey";
import { setAlert } from '../actions/alert';
import axios from 'axios';
import { browserHistory } from 'react-router';
import React, { Component } from 'react';
import history from '../Components/history';

var scrollTop = function() {
    window.scrollTo(0, 0);
};

export const sendEmail = (e , formData) => async dispatch => {

    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    let email = ""
  

    try {
        const res = await axios.get(`/api/users/email/${formData.username}`);
        email = res.data.email
    } catch (err) {
        scrollTop();
        dispatch(setAlert("Request Failed. Please try again." , "danger"))
        e.target.textContent = "Add Package"
        return
    }

    var templateParams = {
        username: formData.username,
        email : email
    };

    emailjs.init(emailKey.USER_ID);
     
    emailjs.send(emailKey.SERVICE_ID, emailKey.TEMPLATE_ID, templateParams)
    .then(function(response) {
        scrollTop();
        dispatch(setAlert("Email has been sent." , "success"))
        window.location.reload();
    }, function(error) {
        console.log('FAILED...', error);
        scrollTop();
        dispatch(setAlert("Request Failed. Please try again." , "danger"))
        e.target.textContent = "Add Package"
        return
    });
    
}

export const sendEmailSendData = (e , formData) => async dispatch => {

    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    let email = ""

    try {
        const res = await axios.get(`/api/users/email/${formData.username}`);
        email = res.data.email
    } catch (err) {
        scrollTop();
        dispatch(setAlert("Request Failed. Please try again." , "danger"))
        e.target.textContent = "Add Package"
        return
    }

    var templateParams = {
        username: formData.username,
        email : email
    };

    emailjs.init(emailKey.USER_ID);
     
    emailjs.send(emailKey.SERVICE_ID, emailKey.TEMPLATE_ID2, templateParams)
    .then(function(response) {
        scrollTop();
        dispatch(setAlert("Email has been sent." , "success"))
        window.location.reload();
    }, function(error) {
        console.log('FAILED...', error);
        scrollTop();
        dispatch(setAlert("Request Failed. Please try again." , "danger"))
        e.target.textContent = "Add Package"
        return
    });
    
}

