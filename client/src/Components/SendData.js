import React from "react";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const  SendData = (isLoading)  => {

  if  (isLoading){
    <Spinner />
  }

  return (
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
            />
            <input
              type="text"
              className="form-control add"
              id="senderaddress2"
              aria-describedby="senderAddress2"
              placeholder="Line 2"
            />
            <input
              type="textarea"
              className="form-control add"
              id="senderaddressCITY"
              aria-describedby="senderAddressCITY"
              placeholder="City"
            />
            <input
              type="textarea"
              className="form-control add"
              id="senderaddressSTATE"
              aria-describedby="senderAddressSTATE"
              placeholder="State"
            />
            <input
              type="text"
              className="form-control add"
              id="senderaddressPIN"
              aria-describedby="senderAddressPIN"
              placeholder="Pin Code"
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
            />
            <input
              type="text"
              className="form-control add"
              id="recieveraddress2"
              aria-describedby="recieverAddress2"
              placeholder="Line 2"
            />
            <input
              type="textarea"
              className="form-control add"
              id="recieveraddressCITY"
              aria-describedby="recieverAddressCITY"
              placeholder="City"
            />
            <input
              type="textarea"
              className="form-control add"
              id="recieveraddressSTATE"
              aria-describedby="recieverAddressSTATE"
              placeholder="State"
            />
            <input
              type="text"
              className="form-control add"
              id="recieveraddressPIN"
              aria-describedby="recieverAddressPIN"
              placeholder="Pin Code"
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
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

SendData.propTypes = {
  
  isLoading : PropTypes.bool
}

const mapStateToProps = state => ({
  isLoading : state.auth.Loading
});

export default connect(mapStateToProps , null )(SendData);