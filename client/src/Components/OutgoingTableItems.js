import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { UpdateOutPackages } from "../actions/packageOutgoing";
import { connect } from "react-redux";

const OutgoingTableItems = ({ pack, cnt, UpdateOutPackages }) => {
  const [formData, setFormData] = useState({
    id: pack._id,
    PickCheck: pack.Picked === "Picked",
    DispatchCheck: pack.DispatchStatus === "Dispatched" ? true : false,
    Price : pack.Price? pack.Price : "",
    PackageWeight : pack.PackageWeight ? pack.PackageWeight : "",
    Picked : "",
    DispatchStatus: ""
  });

  const { PickCheck, DispatchCheck, Price, PackageWeight , Picked , DispatchStatus } =
    formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onClick = async (e) => {
    e.preventDefault();

    if (PickCheck === false) {
      formData.Price = -1;
      formData.PackageWeight = -1;
    }

    if (formData.Price.length === 0){
        formData.Price = -1
    }
    if (formData.PackageWeight.length === 0){
        formData.PackageWeight = -1
    }

    if (PickCheck){
        formData.Picked = "Picked"
    }
    else formData.Picked = "Not Picked"

    if (DispatchCheck){
        formData.DispatchStatus = "Dispatched"
    }
    else formData.DispatchStatus = "Not Dispatched" 
    if (!PickCheck){
      formData.DispatchStatus = "Not Dispatched"
    }
    UpdateOutPackages(formData);
  };

  return (
    <tr>
      <th scope="row">{cnt}</th>
      <td>{pack.SenderDetails && pack.SenderDetails.name}</td>
              <td>{pack.SenderDetails && pack.SenderDetails.Address.Line1} , {pack.SenderDetails && pack.SenderDetails.Address.City} , {pack.SenderDetails && pack.SenderDetails.Address.State} , {pack.SenderDetails && pack.SenderDetails.Address.PinCode}</td>
              <td>{pack.SenderDetails && pack.SenderDetails.MobNumber}</td>
              <td>{pack && pack.ExtraComments}</td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="PickCheck"
                    id="flexRadioDefault1"
                    value={PickCheck}
                    checked={PickCheck}
                    onChange={() => setFormData({ ...formData, PickCheck: !PickCheck })}
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Picked
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="PickCheck"
                    id="flexRadioDefault2"
                    value={!PickCheck}
                    checked={!PickCheck}
                    onChange={() => setFormData({ ...formData, PickCheck: !PickCheck })}
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
                    type="checkbox"
                    name="DispatchCheck"
                    id="flexRadioDefault1"
                    value={DispatchCheck}
                    checked={DispatchCheck}
                    onChange={() => setFormData({ ...formData, DispatchCheck: !DispatchCheck })}
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Dispatched
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="DispatchCheck"
                    id="flexRadioDefault2"
                    value={!DispatchCheck}
                    checked={!DispatchCheck}
                    onChange={() => setFormData({ ...formData, DispatchCheck: !DispatchCheck })}
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
                  placeholder={PackageWeight.length && PackageWeight !== -1 ? PackageWeight : "Weight"}
                  aria-label="Weight"
                  aria-describedby="basic-addon1"
                  name="PackageWeight"
                  value={PackageWeight === -1 ? "" : PackageWeight}
                  onChange={e => onChange(e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder={Price.length && Price !== -1 ? Price : "Price"}
                  aria-label="Price"
                  aria-describedby="basic-addon1"
                  name="Price"
                  value={Price === -1 ? "" : Price}
                  onChange={e => onChange(e)}
                />
              </td>
              <td>
                <button type="button" className="btn bn632-hover bn26" onClick={e => onClick(e)}>
                  Save
                </button>
              </td>
    </tr>
  );
};

OutgoingTableItems.propTypes = {
  UpdateOutPackages: PropTypes.func.isRequired,
};

export default connect(null, { UpdateOutPackages })(OutgoingTableItems);
