import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Dashboard = ({ auth: { isAuthenticated, user, loading } }) => {
  // console.log(isAuthenticated , loading , user);

  const IncomingHandlerLinks = (
    <Fragment>
      <Link className="btn bn632-hover bn26" to="/addPackage">
        <i class="fas fa-plus-circle fasc"></i>
        Add package
      </Link>
      <Link className="btn bn632-hover bn26" to="/guardTables">
        <i class="far fa-list-alt fasc"></i>
        Incoming Status
      </Link>
    </Fragment>
  );

  const OutgoingHandlerLinks = (
    <Fragment>
      <Link className="btn bn632-hover bn26" to="/outgoingHandle">
        <i class="fas fa-shipping-fast fasc"></i>
        Outgoing Status
      </Link>
    </Fragment>
  );

  const NormalLinks = (
    <Fragment>
      <Link className="btn bn632-hover bn26" to="/sendData">
        <i class="fas fa-box-open fasc"></i>
        Send Package
      </Link>

      <Link className="btn bn632-hover bn26" to="/recieveHistory">
        <i class="fas fa-history fasc"></i>
        Recieve History
      </Link>

      <Link className="btn bn632-hover bn26" to="/sentHistory">
        <i class="far fa-paper-plane fasc"></i>
        Packages Sent
      </Link>
    </Fragment>
  );

  const AdminLinks = (
    <Link className="btn bn632-hover bn26" to="/accessManager">
      <i class="fas fa-user-plus fasc"></i>
      Give Access
    </Link>
  );

  return (
    <div>
      <div>
        <div id="myCarousel" class="carousel carousel-fade slide">
          <div class="carousel-inner">
            <div class="item active background a"></div>
          </div>
        </div>

        <div class="covertext">
          <div class="col-xs-12 explore">
            <h1 class="title">Post Office</h1>
            <h3 class="subtitle">
              Send, Recieve and keep track of your package.
            </h3>
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
