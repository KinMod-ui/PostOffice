import React , {useEffect , Fragment} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetIncPackages } from '../actions/packageIncoming';
import ParcelIncItem from './packageInc/ParcelIncItem';

const RecieveHistory = ({GetIncPackages , package : {packages , loading}}) => {

    useEffect(() => {
      GetIncPackages()
    } , [GetIncPackages]);

    return (
      <div className="tables">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Package Description</th>
            <th scope="col">Picked By</th>
            <th scope="col">Picked At</th>
          </tr>
        </thead>
        <tbody>
        {packages.map((pack , idx) => (
          <ParcelIncItem key={pack._id} pack={pack} cnt={idx+1} />
        ))}
          {/* <tr>
            <th scope="row">1</th>
            <td>Amazon Pack</td>
            <td>1/1/1 00:00:00</td>
            <td>John</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Flipkart</td>
            <td>1/1/1 00:00:00</td>
            <td>Doe</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Clothing Items</td>
            <td></td>
            <td>Jane</td>
          </tr> */}
        </tbody>
      </table>
    </div>
    )
}

RecieveHistory.propTypes = {
    GetIncPackages: PropTypes.func.isRequired,
    package : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    package : state.packages
})

export default connect(mapStateToProps , {GetIncPackages})(RecieveHistory);
