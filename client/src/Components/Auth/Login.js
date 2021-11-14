import React , {useState} from "react";
import { connect } from 'react-redux'
import {Navigate} from 'react-router-dom';
import PropTypes from 'prop-types'
import { login } from "../../actions/auth";

const Login = ({ login , isAuthenticated , loading}) => {

  const [formData , setFormData] = useState({
    username : "" ,
    password : ""
  })

  const {username , password} = formData

  const onChange = e => {
    setFormData({...formData , [e.target.name] : e.target.value});
  }

  const onSubmit = async e => {
    e.preventDefault();
    login(username , password);
  }

  // Redirect if logged in
  if (!loading && isAuthenticated){
    return (
      <Navigate to="/dashboard" />
    )
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="login-form bg-light mt-4 p-4">
              <form method="" className="row g-3" onSubmit={e => onSubmit(e)}>
                <h4>Welcome</h4>
                <div className="col-12">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => onChange(e)}
                    className="form-control"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="col-12">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <hr className="mt-4" />
                <div className="col-12">
                  <button type="submit" className="btn btn-primary float-end">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  login : PropTypes.func.isRequired,
  isAuthenticated : PropTypes.bool,
  loading : PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated,
  loading : state.auth.loading
});

export default connect(mapStateToProps , {login})(Login);