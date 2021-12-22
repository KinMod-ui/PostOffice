import React , {Fragment} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';

const ParcelOutItem = ({pack : {RecieverDetails , DispatchStatus , ExtraComments , Price , date} , cnt}) => {
    return (
        <tr>
            <th scope="row">{cnt}</th>
            <td>{RecieverDetails.name}</td>
            <td>{RecieverDetails.Address.Line1} , {RecieverDetails.Address.City} , {RecieverDetails.Address.State}</td>
            <td>{DispatchStatus}</td>
            <td>{formatDate(date)}</td>
            <td>{Price ? Price : "-"}</td>
            <td>{ExtraComments}</td>
        </tr>
    )
}

ParcelOutItem.propTypes = {
    pack : PropTypes.object.isRequired
}

export default connect()(ParcelOutItem)
