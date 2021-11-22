import React , {Fragment} from 'react';
import { Route, Redirect , Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

function PublicRoute({ children, auth : {isAuthenticated ,loading}, ...rest }) {

    if (loading){
        return <Fragment>Loading</Fragment>;
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
  
//   export default PublicRoute;

// const PublicRoute = ({ component : Component  , restricted, auth : {isAuthenticated , loading} , ...rest }) => {
//     return (
//         // restricted = false meaning public route
//         // restricted = true meaning restricted route
//         <Route {...rest} render={props => (
//             isAuthenticated && restricted ?
//                 <Navigate to="/dashboard" />
//             : <Component {...props} />
//         )} />
//     );
// };


PublicRoute.propTypes = {
    auth : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth : state.auth
})

export default connect(mapStateToProps)(PublicRoute)