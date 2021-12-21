import React , {Fragment} from 'react';
import { Route, Redirect , Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../Spinner';

function PublicRoute({ children, auth : {isAuthenticated ,loading}, ...rest }) {

  if (loading){
    return <Spinner/>
  }

  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          !isAuthenticated ? (
            children
          ) : (
            <Navigate
              to={{
                pathname: '/home',
                state: { from: location }
              }}
            />
          ))
      }
    />
  );
}

PublicRoute.propTypes = {
  auth : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth : state.auth
})

export default connect(mapStateToProps)(PublicRoute)