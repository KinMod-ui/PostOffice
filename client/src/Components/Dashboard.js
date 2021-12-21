import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Dashboard = ({ auth: { isAuthenticated, user, loading } }) => {
  // console.log(isAuthenticated , loading , user);

  const IncomingHandlerLinks = (
    <Fragment>
      <div class="card">
        <i class="fas fa-plus-circle fa-6x fasc"></i>
        <div class="container"></div>
        <Link className="btn bn632-hover bn26" to="/addPackage">
          Add package
        </Link>
      </div>
      <div class="card">
        <i class="far fa-list-alt fa-6x fasc"></i>
        <div class="container"></div>
        <Link className="btn bn632-hover bn26" to="/guardTables">
          Incoming Status
        </Link>
      </div>
    </Fragment>
  );

  const OutgoingHandlerLinks = (
    <Fragment>
      <div class="card">
        <i class="fas fa-shipping-fast fa-6x fasc"></i>
        <div class="container"></div>
        <Link className="btn bn632-hover bn26" to="/outgoingHandle">
          Outgoing Status
        </Link>
      </div>
    </Fragment>
  );

  const NormalLinks = (
    <Fragment>
      <div class="card">
        <i class="fas fa-box-open fa-6x fasc"></i>
        <div class="container"></div>
        <Link className="btn bn632-hover bn26" to="/sendData">
          Send Package
        </Link>
      </div>
      <div class="card">
        <i class="fas fa-history fa-6x fasc"></i>
        <div class="container"></div>
        <Link className="btn bn632-hover bn26" to="/recieveHistory">
          Recieve History
        </Link>
      </div>
      <div class="card">
        <i class="far fa-paper-plane fa-6x fasc"></i>
        <div class="container"></div>
        <Link className="btn bn632-hover bn26" to="/sentHistory">
          Packages Sent
        </Link>
      </div>
    </Fragment>
  );

  const AdminLinks = (
    <div class="card">
      <i class="fas fa-user-plus fa-6x fasc"></i>
      <div class="container"></div>
      <Link className="btn bn632-hover bn26" to="/accessManager">
        Give Access
      </Link>
    </div>
  );

  return (
    <div className="dash-back">
      <div className="dashboard d-flex justify-content-center">
        {(user.type === "Admin" || user.type === "Normal") && (
          <Fragment>{NormalLinks}</Fragment>
        )}
        {(user.type === "Admin" || user.type === "Incoming Handler") && (
          <Fragment>{IncomingHandlerLinks}</Fragment>
        )}
        {(user.type === "Admin" || user.type === "OutGoing Handler") && (
          <Fragment>{OutgoingHandlerLinks}</Fragment>
        )}
        {user.type === "Admin" && <Fragment>{AdminLinks}</Fragment>}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
