import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Spinner';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading , user }
}) => {
  if (loading) return <Spinner/>
  if (isAuthenticated)
  if (user !== null)return <Component />;
  else  return <Spinner/>;

  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);