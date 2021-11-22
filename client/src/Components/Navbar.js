import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { logout } from "../actions/auth";

const  Navbar = ({auth : {isAuthenticated , loading , user} , logout}) => {

  const authLinks = (
        <div className="container-fluid">
          <Link className="navbar-brand" to="/dashboard">
            {/* we need to change this to login or dashboard link according to session */}
            LNMIIT Post Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            {/* only show when user logged in */}
            <Link to="/dashboard">
              <button className="btn btn-primary" type="submit">
                Hello {user ? user.name : "wowowza"}
              </button>
            </Link>
            <button onClick={logout} className="btn btn-primary" type="submit" href="#!">
              <i className="fas fa-sign-out-alt"></i>{' '}
              <span className="hide-sm">Log Out</span>
            </button>
            
          </div>
        </div>
  );

  const guestLinks = (
    
        <div className="container-fluid">
          <Link className="navbar-brand" to="/dashboard">
            {/* we need to change this to login or dashboard link according to session */}
            LNMIIT Post Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            {/* only show when user logged in */}
            <Link to="/login">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </Link>
          </div>
        </div>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        { !loading &&(<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>) }
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  logout : PropTypes.func.isRequired,
  auth : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth : state.auth
})

export default connect(mapStateToProps , {logout})(Navbar);