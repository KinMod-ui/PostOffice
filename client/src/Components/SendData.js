import React, { useState } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddOutPackages } from "../actions/packageOutgoing";

const SendData = ({ isLoading, AddOutPackages, user }) => {
  if (isLoading) {
    <Spinner />;
  }

  const [formData, setFormData] = useState({
    SenderName: " ",
    SenderLine1: "",
    SenderLine2: "",
    SenderCity: "",
    SenderState: "",
    SenderPinCode: "",
    SenderEmail: "",
    SenderMobile: "",
    RecieverName: "",
    RecieverLine1: "",
    RecieverLine2: "",
    RecieverCity: "",
    RecieverState: "",
    RecieverPinCode: "",
    RecieverMobile: "",
    packdes: "",
    PackageWeight: "",
    Price: "",
    Picked: "",
    ExtraComments: "",
    DispatchStatus: "",
  });

  const {
    SenderName,
    SenderLine1,
    SenderLine2,
    SenderCity,
    SenderState,
    SenderPinCode,
    SenderMobile,
    RecieverName,
    RecieverLine1,
    RecieverLine2,
    RecieverCity,
    RecieverState,
    RecieverPinCode,
    RecieverMobile,
    packdes,
    PackageWeight,
    Price,
    ExtraComments,
    DispatchStatus,
  } = formData;

  const onClick = (e) => {
    e.preventDefault();
    formData.SenderEmail = user.email;
    formData.DispatchStatus = "Not Dispatched";
    formData.Picked = "Not Picked";
    console.log(e, formData);
    e.target.textContent = "Adding Package...";
    // AddOutPackages(e , formData);
    // sendEmail(e, formData);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="form-main">
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="container sendForm">
                <div className="row">
                  <form>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Sender's Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="sendername"
                        aria-describedby="senderName"
                        name="SenderName"
                        value={SenderName}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Sender's Address
                      </label>
                      <input
                        type="text"
                        className="form-control add"
                        id="senderaddress1"
                        aria-describedby="senderAddress1"
                        placeholder="Line 1"
                        name="SenderLine1"
                        value={SenderLine1}
                        onChange={(e) => onChange(e)}
                      />
                      <input
                        type="text"
                        className="form-control add"
                        id="senderaddress2"
                        aria-describedby="senderAddress2"
                        placeholder="Line 2"
                        name="SenderLine2"
                        value={SenderLine2}
                        onChange={(e) => onChange(e)}
                      />
                      {/* <input
                        type="textarea"
                        className="form-control add"
                        id="senderaddressCITY"
                        aria-describedby="senderAddressCITY"
                        placeholder="City"
                        name="SenderCity"
                        value={SenderCity}
                        onChange={(e) => onChange(e)}
                      /> */}
                      
                      <select className="dropbtn" id = "dropdown" name = "SenderState" value={SenderState} onChange={e => onChange(e)}>
                      <option className = "dropdown-content" value ="State">Pick a State</option>
                      <option className = "dropdown-content" value ="Andhra Pradesh">Andhra Pradesh</option>
                      <option className = "dropdown-content" value ="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                      <option className = "dropdown-content" value ="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option className = "dropdown-content" value ="Assam">Assam</option>
                      <option className = "dropdown-content" value ="Bihar">Bihar</option>
                      <option className = "dropdown-content" value ="Chandigarh">Chandigarh</option>
                      <option className = "dropdown-content" value ="Chhattisgarh">Chhattisgarh</option>
                      <option className = "dropdown-content" value ="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                      <option className = "dropdown-content" value ="Daman and Diu">Daman and Diu</option>
                      <option className = "dropdown-content" value ="Delhi">Delhi</option>
                      <option className = "dropdown-content" value ="Lakshadweep">Lakshadweep</option>
                      <option className = "dropdown-content" value ="Puducherry">Puducherry</option>
                      <option className = "dropdown-content" value ="Goa">Goa</option>
                      <option className = "dropdown-content" value ="Gujarat">Gujarat</option>
                      <option className = "dropdown-content" value ="Haryana">Haryana</option>
                      <option className = "dropdown-content" value ="Himachal Pradesh">Himachal Pradesh</option>
                      <option className = "dropdown-content" value ="Jammu and Kashmir">Jammu and Kashmir</option>
                      <option className = "dropdown-content" value ="Jharkhand">Jharkhand</option>
                      <option className = "dropdown-content" value ="Karnataka">Karnataka</option>
                      <option className = "dropdown-content" value ="Kerala">Kerala</option>
                      <option className = "dropdown-content" value ="Madhya Pradesh">Madhya Pradesh</option>
                      <option className = "dropdown-content" value ="Maharashtra">Maharashtra</option>
                      <option className = "dropdown-content" value ="Manipur">Manipur</option>
                      <option className = "dropdown-content" value ="Meghalaya">Meghalaya</option>
                      <option className = "dropdown-content" value ="Mizoram">Mizoram</option>
                      <option className = "dropdown-content" value ="Nagaland">Nagaland</option>
                      <option className = "dropdown-content" value ="Odisha">Odisha</option>
                      <option className = "dropdown-content" value ="Punjab">Punjab</option>
                      <option className = "dropdown-content" value ="Rajasthan">Rajasthan</option>
                      <option className = "dropdown-content" value ="Sikkim">Sikkim</option>
                      <option className = "dropdown-content" value ="Tamil Nadu">Tamil Nadu</option>
                      <option className = "dropdown-content" value ="Telangana">Telangana</option>
                      <option className = "dropdown-content" value ="Tripura">Tripura</option>
                      <option className = "dropdown-content" value ="Uttar Pradesh">Uttar Pradesh</option>
                      <option className = "dropdown-content" value ="Uttarakhand">Uttarakhand</option>
                      <option className = "dropdown-content" value ="West Bengal">West Bengal</option>
                      </select>
                      <input
                        type="text"
                        className="form-control add"
                        id="senderaddressPIN"
                        aria-describedby="senderAddressPIN"
                        placeholder="Pin Code"
                        name="SenderPinCode"
                        value={SenderPinCode}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Sender's Mobile Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="sendernum"
                        aria-describedby="senderNum"
                        name="SenderMobile"
                        value={SenderMobile}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Reciever's Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recievername"
                        aria-describedby="recieverName"
                        name="RecieverName"
                        value={RecieverName}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Reciever's Address
                      </label>
                      <input
                        type="text"
                        className="form-control add"
                        id="recieveraddress1"
                        aria-describedby="recieverAddress1"
                        placeholder="Line 1"
                        name="RecieverLine1"
                        value={RecieverLine1}
                        onChange={(e) => onChange(e)}
                      />
                      <input
                        type="text"
                        className="form-control add"
                        id="recieveraddress2"
                        aria-describedby="recieverAddress2"
                        placeholder="Line 2"
                        name="RecieverLine2"
                        value={RecieverLine2}
                        onChange={(e) => onChange(e)}
                      />
                      <input
                        type="textarea"
                        className="form-control add"
                        id="recieveraddressCITY"
                        aria-describedby="recieverAddressCITY"
                        placeholder="City"
                        name="RecieverCity"
                        value={RecieverCity}
                        onChange={(e) => onChange(e)}
                      />
                      {/* <input
                        type="textarea"
                        className="form-control add"
                        id="recieveraddressSTATE"
                        aria-describedby="recieverAddressSTATE"
                        placeholder="State"
                        name="RecieverState"
                        value={RecieverState}
                        onChange={(e) => onChange(e)}
                      /> */}
                      <select id = "dropdown" name = "RecieverState" value={RecieverState} onChange={e => onChange(e)}>
                      <option value="State">Pick a State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                      <option value="Daman and Diu">Daman and Diu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                      </select>
                      <input
                        type="text"
                        className="form-control add"
                        id="recieveraddressPIN"
                        aria-describedby="recieverAddressPIN"
                        placeholder="Pin Code"
                        name="RecieverPinCode"
                        value={RecieverPinCode}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Reciever's Mobile Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recievernum"
                        aria-describedby="recieverNum"
                        name="RecieverMobile"
                        value={RecieverMobile}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Comments (if any)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="comments"
                        aria-describedby="comments"
                        name="ExtraComments"
                        value={ExtraComments}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn bn632-hover bn26"
                      onClick={(e) => onClick(e)}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col send-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

SendData.propTypes = {
  isLoading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  AddOutPackages: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.Loading,
  user: state.auth.user,
});

export default connect(mapStateToProps, { AddOutPackages })(SendData);
