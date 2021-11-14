import axios from 'axios';

// if it finds a token it will set it to global header else make it null
const setAuthToken = token => {
    if (token){
        axios.defaults.headers.common['x-auth-token'] = token;
    }
    else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;