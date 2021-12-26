import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddIncPackages } from "../actions/packageIncoming";
import { sendEmail } from "../EmailHandling/sendEmail";

const Addpackage = ({ AddIncPackages, sendEmail }) => {
  const [formData, setFormData] = useState({
    packdes: "",
    name: "",
    username: "",
  });

  const { packdes, name, username } = formData;

  async function firstAsync(e , formData) {
      let ret = {
        poss : false
      }
      // let promise = 
        // new Promise((res, rej) => {
          await AddIncPackages(e , formData , ret);
          // console.log(ret);
          // res(ret);
      // });


      let result = await ret;
      // console.log(result)
        if (result.poss === true){
          sendEmail(e , formData)
        }
        // console.log(result.poss)
  }

  const onClick = (e) => {
    e.preventDefault();
    e.target.textContent = "Adding Package...";
    
    firstAsync(e , formData);
    // AddIncPackages(e , formData , ret);
    
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="dashboard d-grid gap-2 col-6 mx-auto my-5">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Package Description
          </label>
          <input
            type="text"
            class="form-control"
            id="packdes"
            aria-describedby="packdes"
            name="packdes"
            value={packdes}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Owner's Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="Owner's Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="username"
            aria-describedby="username"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
          />
        </div>

        <button
          type="submit"
          class="btn bn632-hover bn26"
          onClick={(e) => onClick(e)}
        >
          Add Package
        </button>
      </form>
    </div>
  );
};

Addpackage.propTypes = {
  AddIncPackages: PropTypes.func.isRequired,
  sendEmail : PropTypes.func.isRequired,
};

export default connect(null, { AddIncPackages , sendEmail })(Addpackage);
