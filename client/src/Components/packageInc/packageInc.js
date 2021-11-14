import React , {useEffect , Fragment} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetIncPackages } from '../../actions/packageIncoming'

const PackageInc = ({GetIncPackages , package : {packages , loading}}) => {

    // console.log(packages);

    useEffect(() => {
        GetIncPackages()
    } , [GetIncPackages]);

    return (
        <div>
        </div>
    )
}

PackageInc.propTypes = {
    GetIncPackages: PropTypes.func.isRequired,
    package : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    package : state.package
})

export default connect(mapStateToProps , {GetIncPackages})(PackageInc);
