import React, { useEffect } from "react";
import { GetAllIncPackages } from "../actions/packageIncoming";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GuardTableItems from "./GuardTableItems";

const GuardTables = ({ GetAllIncPackages, package: { packages, loading } }) => {
  useEffect(() => {
    GetAllIncPackages();
  }, [GetAllIncPackages]);

  return (
    <div>
      <div className="guardTable-main">
        <div className="tables">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Package Description</th>
                <th scope="col">Status</th>
                <th scope="col">Picked By</th>
                <th scope="col">Picked At</th>
                <th scope="col">Update Package</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pack, idx) => (
                <GuardTableItems key={pack._id} pack={pack} cnt={idx + 1} />
              ))}

              {/* <tr>
              <th scope="row">2</th>
              <td>Jane Doe</td>
              <td>00abc000</td>
              <td>Flipkart Package</td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gpick2"
                    id="flexRadioDefault1"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Picked
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gpick2"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Not Picked
                  </label>
                </div>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John"
                  aria-label="Pickedby"
                  aria-describedby="basic-addon1"
                />
              </td>
              <td>11/11/11</td>
              <td>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </td>
            </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

GuardTables.propTypes = {
  GetAllIncPackages: PropTypes.func.isRequired,
  package: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  package: state.packages,
});

export default connect(mapStateToProps, { GetAllIncPackages })(GuardTables);
