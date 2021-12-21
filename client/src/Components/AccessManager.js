import React, { Fragment, useState } from "react";
import { ChangeType } from "../actions/user";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AccessManager = ({ ChangeType }) => {
  const [formData, setFormData] = useState({
    username: "",
  });

  const { username } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onClick = (e) => {
    const obj = { type: e.target.name, username };
    ChangeType({ obj });
  };

  return (
    <Fragment>
      <div className="dashboard d-grid gap-2 col-6 mx-auto my-5">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="username"
              onChange={(e) => onChange(e)}
              name="username"
              value={username}
            />
          </div>
        </form>
        <button
          type="button"
          className="btn bn632-hover bn26"
          name="Incoming Handler"
          onClick={(e) => onClick(e)}
        >
          Make Incoming Handler
        </button>
        <button
          type="button"
          className="btn bn632-hover bn26"
          name="OutGoing Handler"
          onClick={(e) => onClick(e)}
        >
          Make Outgoing Handler
        </button>
        <button
          type="button"
          className="btn bn632-hover bn26"
          name="Admin"
          onClick={(e) => onClick(e)}
        >
          Make Admin
        </button>
        <button
          type="submit"
          class="btn bn632-hover bn26"
          name="Normal"
          onClick={(e) => onClick(e)}
        >
          Take Privilege
        </button>
      </div>
    </Fragment>
  );
};

AccessManager.propTypes = {
  ChangeType: PropTypes.func.isRequired,
};

export default connect(null, { ChangeType })(AccessManager);
