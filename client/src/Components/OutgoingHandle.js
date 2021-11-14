import React from "react";

export default function OutgoingHandle() {
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
              <th scope="col">Pick Status</th>
              <th scope="col">Dispatch Status</th>
              <th scope="col">Weight</th>
              <th scope="col">Save Changes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>John Doe</td>
              <td>A1 32 Street, Jaipur,,Rajasthan, 101011</td>
              <td>0000000000</td>
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
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Jane</td>
              <td>32, Salt Lake,Kolkata,301011</td>
              <td>1212121212</td>
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
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
