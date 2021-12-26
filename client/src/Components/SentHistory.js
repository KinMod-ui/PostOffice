import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ParcelOutItem from "./packageOutgoing/packageOutItem";
import { GetOutPackages } from "../actions/packageOutgoing";

const SentHistory = ({ GetOutPackages, package: { packages, loading } }) => {
  useEffect(() => {
    console.log("Here");
    GetOutPackages();
  }, [GetOutPackages]);

  return (
    <div>
      <div className="tables">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sent To</th>
              <th scope="col">Address</th>

              <th scope="col">Pick Status</th>
              <th scope="col">Dispatch Status</th>
              <th scope="col">Date</th>
              <th scope="col">Price (Rupees)</th>
              <th scope="col">Extra Comments</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pack, idx) => (
              <ParcelOutItem key={pack._id} pack={pack} cnt={idx + 1} />
            ))}
            {/* <tr>
            <th scope="row">1</th>
            <td>Amazon Pack</td>
            <td>1/1/1 00:00:00</td>
            <td>John</td>
          </tr> */}
          </tbody>
        </table>
      </div>
      <div className="send-main"></div>
    </div>
  );
};

SentHistory.propTypes = {
  GetOutPackages: PropTypes.func.isRequired,
  package: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  package: state.packages,
});

export default connect(mapStateToProps, { GetOutPackages })(SentHistory);
