import React, { useState } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddOutPackages } from "../actions/packageOutgoing";

const SendData = ({isLoading , AddOutPackages , user}) => {
  if (isLoading) {
    <Spinner />;
  }

  const [formData, setFormData] = useState({
    SenderName : " ",
    SenderLine1 : "",
    SenderLine2 : "",
    SenderCity : "",
    SenderState : "",
    SenderPinCode : "",
    SenderEmail : "",
    SenderMobile : "",
    RecieverName : "",
    RecieverLine1 : "",
    RecieverLine2 : "",
    RecieverCity : "",
    RecieverState : "",
    RecieverPinCode : "",
    RecieverMobile : "",
    packdes : "",
    PackageWeight : "",
    Price : "",
    ExtraComments : "",
    DispatchStatus : ""
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
    DispatchStatus
   } = formData;

   const onClick = (e) => {
    e.preventDefault();
    formData.SenderEmail = user.email
    formData.DispatchStatus = "Not Dispatched"
    console.log(e , formData);
    // AddOutPackages(formData);
    e.target.textContent = "Adding Package...";
    // sendEmail(e, formData);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-main">
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
              <input
                type="textarea"
                className="form-control add"
                id="senderaddressCITY"
                aria-describedby="senderAddressCITY"
                placeholder="City"
                name="SenderCity"
            value={SenderCity}
            onChange={(e) => onChange(e)}
              />
              <input
                type="textarea"
                className="form-control add"
                id="senderaddressSTATE"
                aria-describedby="senderAddressSTATE"
                placeholder="State"
                name="SenderState"
            value={SenderState}
            onChange={(e) => onChange(e)}
              />
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
              <input
                type="textarea"
                className="form-control add"
                id="recieveraddressSTATE"
                aria-describedby="recieverAddressSTATE"
                placeholder="State"
                name="RecieverState"
            value={RecieverState}
            onChange={(e) => onChange(e)}
              />
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
            <button type="submit" className="btn bn632-hover bn26" onClick={(e) => onClick(e)}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

SendData.propTypes = {
  isLoading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  AddOutPackages : PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.Loading,
  user : state.auth.user
});

export default connect(mapStateToProps, { AddOutPackages })(SendData);
