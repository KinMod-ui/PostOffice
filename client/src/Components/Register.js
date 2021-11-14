import React , {useState} from "react";
import { Navigate} from "react-router-dom";
import { register } from "../actions/auth";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setAlert } from "../actions/alert";

const Register = ({isAuthenticated , register , setAlert}) => {

    const [formData , setFormData] = useState({
        name : "",
        email : "",
        username : "" ,
        password : "",
        password2 : ""
      })
    
      const {name , email , username , password , password2} = formData
    
      const onChange = e => {
        setFormData({...formData , [e.target.name] : e.target.value});
      }
    
      const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2){
            setAlert("Passwords do not match" , "danger");
        }
        register({name , email , username , password});
      }

      if (isAuthenticated){
        return (
          <Navigate to="/dashboard" />
        )
      }
    

    return (
        <div className="container sendForm">
      <div className="row">
        <form onSubmit={e => onSubmit(e)}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onChange(e)} 
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="username@lnmiit.ac.in"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
            
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="Username"
              placeholder="Username"
              name="username"
              value={username}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="number"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
    )
}

Register.propTypes = {
    register : PropTypes.func.isRequired,
    isAuthenticated : PropTypes.bool,
    setAlert : PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps , {register , setAlert} )(Register);