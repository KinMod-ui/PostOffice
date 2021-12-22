import React , {useEffect} from "react";
import { GetAllOutPackages } from "../actions/packageOutgoing";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import OutgoingTableItems from './OutgoingTableItems'

const OutgoingHandle = ({ GetAllOutPackages, package: { packages, loading } }) => {

  useEffect(() => {
    GetAllOutPackages();
  }, [GetAllOutPackages]);

  return (
    <div>
      <div className="tables">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sender's Name</th>
              <th scope="col">Sender's Address</th>
              <th scope="col">Sender's Number</th>
              <th scope="col">Extra Comments</th>
              <th scope="col">Pick Status</th>
              <th scope="col">Dispatch Status</th>
              <th scope="col">Weight</th>
              <th scope="col">Price</th>

              <th scope="col">Save Changes</th>
            </tr>
          </thead>
          <tbody>
          {packages.map((pack, idx) => (
                <OutgoingTableItems key={pack._id} pack={pack} cnt={idx + 1} />
            ))}
            {/* <tr> */}
              {/* <th scope="row">1</th>
              <td>John Doe</td>
              <td>A1 32 Street, Jaipur,,Rajasthan, 101011</td>
              <td>0000000000</td>
              <td>its a fragile order</td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="pick1"
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
                    name="pick1"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Not Picked
                  </label>
                </div>
              </td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="dispatch1"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Dispatched
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="dispatch1"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Not Dispatched
                  </label>
                </div>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Weight"
                  aria-label="Weight"
                  aria-describedby="basic-addon1"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  aria-label="Price"
                  aria-describedby="basic-addon1"
                />
              </td>

              <td>
                <button type="button" className="btn bn632-hover bn26">
                  Save
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Jane</td>
              <td>32, Salt Lake,Kolkata,301011</td>
              <td>1212121212</td>
              <td>NA</td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="pick2"
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
                    name="pick2"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Not Picked
                  </label>
                </div>
              </td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="dispatch2"
                    id="flexRadioDefault1"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Dispatched
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="dispatch2"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Not Dispatched
                  </label>
                </div>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="1 kg"
                  aria-label="Weight2"
                  aria-describedby="basic-addon1"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="200"
                  aria-label="Price"
                  aria-describedby="basic-addon1"
                />
              </td>

              <td>
                <button type="button" className="btn bn632-hover bn26">
                  Save
                </button>
              </td> */}
            {/* </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

OutgoingHandle.propTypes = {
  GetAllOutPackages: PropTypes.func.isRequired,
  package: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  package: state.packages
});

export default connect(mapStateToProps, { GetAllOutPackages })(OutgoingHandle);