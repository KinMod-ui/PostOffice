import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Dashboard = ({auth : {isAuthenticated , user , loading}}) => {

  // console.log(isAuthenticated , loading , user);

  const IncomingHandlerLinks = (
    <Fragment>
      <Link className="btn btn-secondary" to="/addPackage">
        Add package
      </Link>
      <Link className="btn btn-secondary" to="/guardTables">
            Incoming Packages Status
      </Link>
    </Fragment>
  )

  const OutgoingHandlerLinks = (
    <Fragment>
      <Link className="btn btn-secondary" to="/outgoingHandle">
        Outgoing Packages Status
      </Link>
    </Fragment>
  )

  const NormalLinks = (
    <Fragment>
      <Link className="btn btn-primary" to="/sendData">
        Send Package
      </Link>

      <Link className="btn btn-primary" to="/recieveHistory">
        Packages Recieved
      </Link>
      <Link className="btn btn-primary" to="/sentHistory">
        Packages Sent
      </Link>
    </Fragment>
  )

  const AdminLinks = (
    <Link className="btn btn-danger" to="/accessManager">
          Give Access
    </Link>
  )

  return (
    <div>
      <div className="dashboard d-grid gap-2 col-6 mx-auto my-5">
        {(user.type === 'Admin' || user.type === 'Normal') && (<Fragment>{NormalLinks}</Fragment>)}
        {(user.type === 'Admin' || user.type === 'Incoming Handler') && (<Fragment>{IncomingHandlerLinks}</Fragment>)}
        {(user.type === 'Admin' || user.type === 'OutGoing Handler') && (<Fragment>{OutgoingHandlerLinks}</Fragment>)}
        {(user.type === 'Admin') && (<Fragment>{AdminLinks}</Fragment>)}
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  auth : PropTypes.object
}

const mapStateToProps = state => ({
  auth : state.auth
});

export default connect(mapStateToProps)(Dashboard);