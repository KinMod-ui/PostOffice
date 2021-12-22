import React , {Fragment} from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';

const ParcelIncItem = ({pack : {PackageDescription , PickedBy , PickedAt} , cnt}) => {
    return (
        <tr>
            <th scope="row">{cnt}</th>
            <td>{PackageDescription}</td>
            {PickedBy ? <Fragment><td>{PickedBy}</td>
            <td>{formatDate(PickedAt)}</td></Fragment> : <Fragment><td>-</td>
            <td>-- : -- : --</td></Fragment>}
        </tr>
    )
}

ParcelIncItem.propTypes = {
    pack : PropTypes.object.isRequired
}

export default connect()(ParcelIncItem)
