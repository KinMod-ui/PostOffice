import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner"
import { connect } from "react-redux";
import formatDate from "../../utils/formatDate";

const ParcelOutItem = ({
  pack: { RecieverDetails, DispatchStatus, ExtraComments, Price, date , Picked , loading} ,
  cnt,
}) => {

    if (loading || RecieverDetails === undefined){
        <Spinner />;
    }

  return (
    <tr>
      <th scope="row">{cnt}</th>
      <td>{RecieverDetails && RecieverDetails.name}</td>
      <td>
        {RecieverDetails && RecieverDetails.Address.Line1} , {RecieverDetails && RecieverDetails.Address.City} ,{" "}
        {RecieverDetails && RecieverDetails.Address.State}
      </td>
      <td>{RecieverDetails && Picked}</td>
      <td>{RecieverDetails && DispatchStatus}</td>
      <td>{formatDate(RecieverDetails && date)}</td>
      <td>{RecieverDetails && Price ?  Price : "-"}</td>
      <td>{RecieverDetails && ExtraComments}</td>
    </tr>
  );
};

ParcelOutItem.propTypes = {
  pack: PropTypes.object.isRequired,
};

export default connect()(ParcelOutItem);
